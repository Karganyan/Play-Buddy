import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { userInSessionThunk } from "../../redux/action-creators/user"
import YandexMap from "../Yandex-map/YandexMap"
import { YMaps, Map, Placemark, Clusterer } from 'react-yandex-maps'
import './home.css'
import { getCurrentEventThunk, getEventsThunk } from "../../redux/action-creators/events"
import { useHistory } from "react-router"
// import EventPage from "../Events/EventPage"

const Home = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { user, events } = useSelector(store => store)
  const currentEvent = useSelector(store => store.currentEvent)
  useEffect(() => {
    dispatch(userInSessionThunk());
    dispatch(getEventsThunk()); /* Тимур раскоментит */
  }, [])
  console.log(events);
  const clickHandler = (id) => {
    dispatch(getCurrentEventThunk(id))
  }

  const redirectOnEventPage = (id) => {
    history.push(`/event-page/${id}`)
  }
  return (
    <div className='container mt-5'>
      {user.id
        ?
        <>
          <h1>Привет {user.name}</h1>
          {currentEvent._id
            ?
            <>
              <h4>{currentEvent.title}</h4>
              <p>{currentEvent.description}</p>
              <span>Адрес: {currentEvent.coordinates}(пока это координаты)</span>
              <button className='btn btn-primary'>записаться на событие</button>
            </>
            :
            <p>Выбери событие</p>
          }
        </>
        :
        <h1>Нужно зарегестрироваться</h1>
      }
      <YandexMap />
      {/* <YMaps>
        <div >
          <img src="" alt="" />
          <Map defaultState={{ center: [55.75, 37.57], zoom: 10, controls: ['zoomControl', 'fullscreenControl'] }}
            modules={['control.ZoomControl', 'control.FullscreenControl']}
            className='map'
            instanceRef={ref => { ref && ref.behaviors.disable('scrollZoom') }}
          >
            <Clusterer
              options={{
                groupByCoordinates: false,
              }}
            >
              {events.map((game, index) => (
                <Placemark onClick={() => clickHandler(game._id)} key={index} geometry={game.coordinates} options={{
                  iconLayout: 'default#image',
                  iconImageHref: game.thumbnail,
                  iconImageSize: [40, 40],
                }} />
              ))}
            </Clusterer>
          </Map>
        </div>
      </YMaps> */}
      <div>
        <ul>
          {events && events.map(event => (
              <li key={event._id} onClick={() => redirectOnEventPage(event._id)}>
                {event.title}
              </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Home
