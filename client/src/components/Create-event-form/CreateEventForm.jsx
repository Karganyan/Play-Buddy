import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { createEventThunk, getGamesThunk, getTagsThunk } from "../../redux/action-creators/createEventThunk"

const CreateEventForm = () => {
  const [gameValue, setGameValue] = useState('')
  const [form, setForm] = useState({
    eventName: '',
    eventTextArea: '',
    address: '',
    category: '',
    coordinates: '',
    game: '',
    thumbnail: '',
    eventPersons: 2,
  })
  const history = useHistory()
  const dispatch = useDispatch()
  const { tags, games, event } = useSelector(store => store.events)


  useEffect(() => {
    (async () => {
      await dispatch(getTagsThunk())
      if (gameValue) {
        await dispatch(getGamesThunk(gameValue))
      }
    })()
  }, [form.category])

  const tagHandler = (event) => {
    inputHandler(event)
    setGameValue(event.target.value)
  }
  const inputHandler = async (event) => {
    let street
    if (event.target.name === 'address') {
      street = event.target.value
      const req = await fetch(`https://geocode-maps.yandex.ru/1.x/?apikey=51ad9d93-9100-4ffa-8ebf-138a17d2a225&format=json&geocode=${street}`)
      const res = await req.json()
      const coordinates = res?.response?.GeoObjectCollection?.featureMember[0]?.GeoObject?.Point?.pos
      setForm(prev => {
        return { ...prev, coordinates, [event.target.name]: event.target.value }
      })

    } else {
      setForm(prev => {
        let currentThumbnail
        if (event.target.name === 'game') {
          currentThumbnail = games && games.find(el => el._id === event.target.value)?.thumbnail
        }
        return { ...prev, thumbnail : currentThumbnail, [event.target.name]: event.target.value }
      })
      setForm(prev => {
        return { ...prev, [event.target.name]: event.target.value }
      })
    }
  }
  const createEventHandler = async (e) => {
    e.preventDefault()
    await dispatch(createEventThunk(form));
    // const event = event.find(event => event)
    // history.push(`/event-page/${}`) доделаю позже
  }
  // console.log('======>', games)
  console.log('FORM', form)
  return (
    <div className='container'>
      <h1 className='mb-4'>Создание события</h1>
      <form onSubmit={createEventHandler}>
        <div className="mb-3">
          <label htmlFor="event" className="form-label">Название события</label>
          <input onChange={inputHandler} name='eventName' type="text" className="form-control" id="event" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Адрес</label>
          <input onChange={inputHandler} name='address' type="text" className="form-control" id="address" />
        </div>
        <select onChange={tagHandler} name='category' className="mb-3 form-select">
          <option >Категория игры</option>
          {tags && tags.map(tag => {
            return (
              <option key={tag._id} value={tag._id}>{tag.title}</option>
            )
          })}
        </select>
        <select onChange={inputHandler} name='game' className="mb-3 form-select" >
          <option>Название игры</option>
          {games && games.map(game => {
            return (
              <option key={game._id} value={game._id}>{game.title}</option>
            )
          })}
        </select>
        <div className="mb-3">
          <label htmlFor="desc">Описание события</label>
          <textarea onChange={inputHandler} name='eventTextArea' className="form-control" id="desc" />
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">Колличество игроков</label>
          <input onChange={inputHandler} name='eventPersons' type="number" className="form-control" id="amount" />
        </div>
        <div className="mb-3 form-check">
          <label className="form-check-label" htmlFor="beginner">Начинащий игрок</label>
          <input onChange={inputHandler} name='beginner' className="form-check-input" type="checkbox" value="" id="beginner" />
        </div>
        <div className="mb-3 form-check">
          <label className="form-check-label" htmlFor="advanced">Продвинутый игрок</label>
          <input onChange={inputHandler} name='advanced' className="form-check-input" type="checkbox" value="" id="advanced" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default CreateEventForm;
