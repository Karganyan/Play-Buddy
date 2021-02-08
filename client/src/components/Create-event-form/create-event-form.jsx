import {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { createEventThunk, getGamesThunk, getTagsThunk } from "../../redux/action-creators/createEventThunk"

const CreateEventForm = () => {
  const [gameValue, setGameValue] = useState('')
  const [form, setForm] = useState({
    eventName: '',
    eventTextArea: '',
    address: '',
    category: '',
    game: '',
    eventPersons: 2,
  })
  const dispatch = useDispatch()
  const tags = useSelector(store => store.events.tags)
  const games = useSelector(store => store.events.games)
  useEffect(() => {
    dispatch(getTagsThunk())
    dispatch(getGamesThunk(gameValue))
  }, [form.category])

  const tagHandler = (event) => {
    inputHandler(event)
    setGameValue(event.target.value)
  }
  const inputHandler = (event) => {
    setForm(prev => {
      return { ...prev, [event.target.name]: event.target.value }
    })
  }
  const createEventHandler = (event) => {
    event.preventDefault()
    dispatch(createEventThunk(form));
  }
  console.log(tags)
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
          <option selected>Категория игры</option>
          {tags && tags.map(tag => {
            return (
              <option value={tag._id}>{tag.title}</option>
            )
          })}
        </select>
        <select onChange={inputHandler} className="mb-3 form-select">
          <option selected>Название игры</option>
          {games && games.map(game => {
            return (
              <option value="2">{game.title}</option>
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
