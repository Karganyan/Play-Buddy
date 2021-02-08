import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { userInSessionThunk } from "../../redux/action-creators/user"
import { YMaps, Map, Placemark, Clusterer } from 'react-yandex-maps'
import './home.css'
import { getCurrentEventThunk, getEventsThunk} from "../../redux/action-creators/events"

const Home = () => {
  const key = '51ad9d93-9100-4ffa-8ebf-138a17d2a225'
  const dispatch = useDispatch()
  const user = useSelector(store => store.user)
  const events = useSelector(store => store.events.event)
  const currentEvent = useSelector(store => store.currentEvent)
  useEffect(() => {
    dispatch(userInSessionThunk())
    dispatch(getEventsThunk())
  }, [])
  const clickHandler = (id) => {
    dispatch(getCurrentEventThunk(id))
  }
  // console.log(events)
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
                <span>Адрес: {currentEvent.address}(пока это координаты)</span>
                <button className='btn btn-primary'>записаться на событие</button>
              </>
              :
               <p>Выбери событие</p>
            }
        </>
        :
        <h1>Нужно зарегестрироваться</h1>
      }
      <YMaps query={{ ns: "use-load-option", apikey: key }}>
        <Map defaultState={{ center: [55.75, 37.57], zoom: 10, controls: ['zoomControl', 'fullscreenControl'] }}
                      modules={['control.ZoomControl', 'control.FullscreenControl', 'geocode']}
                      className='map'
                      instanceRef={ref => { ref && ref.behaviors.disable('scrollZoom')}}
        >
          <Clusterer options={{ groupByCoordinates: false }}>
            {events && events.map(event => {
              console.log('====>', event.coordinates)
              return (
                <div key={event._id}>
                  <Placemark onClick={() => clickHandler(event._id)}  geometry={event.coordinates} options={{
                     iconLayout: 'default#image',
                     iconImageHref: event.thumbnail,
                     iconImageSize: [40, 40],
                  }}/>
                </div>
              )
            })}
          </Clusterer>
          </Map>
      </YMaps>
    </div>
  )
}

export default Home
