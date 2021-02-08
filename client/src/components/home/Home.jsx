import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { userInSessionThunk } from "../../redux/action-creators/user"
// import {userInSessionThunk} from '../../redux/'
import YandexMap from "../Yandex-map/YandexMap"
import { YMaps, Map, Placemark, Clusterer } from 'react-yandex-maps'
import './home.css'
import { getCurrentEventThunk, getEventsThunk} from "../../redux/action-creators/events"
import EventPage from "../Events/EventPage"



const Home = () => {
  const dispatch = useDispatch()
  const user = useSelector(store => store.user)
  const events = useSelector(store => store.events)
  const currentEvent = useSelector(store => store.currentEvent)
  useEffect(() => {
    dispatch(userInSessionThunk())
    // dispatch(getEventsThunk()); Тимур раскоментит
  }, [])

  const clickHandler = (id) => {
    dispatch(getCurrentEventThunk(id))
  }

  console.log(currentEvent)
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
      <YMaps>
        <div >
          <img src="" alt=""/>
          <Map defaultState={{ center: [55.75, 37.57], zoom: 10, controls: ['zoomControl', 'fullscreenControl'] }}
               modules={['control.ZoomControl', 'control.FullscreenControl']}
               className='map'
               instanceRef={ref => { ref && ref.behaviors.disable('scrollZoom')}}
          >
            <Clusterer
              options={{
                groupByCoordinates: false,
              }}
            >
              {events.map((game, index) => (
                <Placemark onClick={() => clickHandler(game._id)}  key={index} geometry={game.coordinates} options={{
                  iconLayout: 'default#image',
                  iconImageHref: game.thumbnail,
                  iconImageSize: [40, 40],
                }} />
              ))}
            </Clusterer>
          </Map>
        </div>
      </YMaps>
    </div>
  )
}

export default Home
