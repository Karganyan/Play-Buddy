import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { userInSessionThunk } from "../../redux/action-creators/user"
// import YandexMap from "../yandex-map/yandex-map"
import { YMaps, Map, Placemark, Clusterer } from 'react-yandex-maps'
import './home.css'
import { getCurrentEventThunk, getEventsThunk} from "../../redux/action-creators/events"
// import EventPage from "../Events/eventPage"

const Home = () => {
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
  console.log('======>>',events)

  const geocode = (ymaps, address) => {

    let myGeocoder = ymaps.geocode(address)
    console.log('======>>', address)
    console.log(events)
    myGeocoder.then(
      function (res) {
        // alert('Координаты объекта :' + res.geoObjects.get(0).geometry.getCoordinates())
        console.log(res.geoObjects.get(0).geometry.getCoordinates())
      },
      function (err) {
        console.log('error')
      }
    )

      let myCoords = [55.830897,37.971041]
      let myGeocoder2 = ymaps.geocode(myCoords)
      myGeocoder2.then(
        function (res) {
          let nearest = res.geoObjects.get(0);
          // let name = nearest.properties.get('name')
          let name = nearest.properties._data.text  // Россия, Москва, улица Вавилова, 1
          console.log(name)
        },
        function (err) {
          console.log('error')
        }
      )
  }


const url = 'https://geocode-maps.yandex.ru/1.x/?apikey=51ad9d93-9100-4ffa-8ebf-138a17d2a225&geocode=37.611347,55.760241'
  const key = '51ad9d93-9100-4ffa-8ebf-138a17d2a225'
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
      {/* <YandexMap /> */}
      <YMaps query={{
        ns: "use-load-option",
        apikey: key,
      }} >
        <div >
          <img src="" alt=""/>

          {events && events.map(event => {
            return <Map onLoad={(ymaps) => geocode(ymaps, event.address)} defaultState={{ center: [55.75, 37.57], zoom: 10, controls: ['zoomControl', 'fullscreenControl'] }}
                        modules={['control.ZoomControl', 'control.FullscreenControl', 'geocode']}
                        className='map'
                        instanceRef={ref => { ref && ref.behaviors.disable('scrollZoom')}}
            >
              <Clusterer
                options={{
                  groupByCoordinates: false,
                }}
              >
                {events.map((game, index) => (
                  <Placemark onClick={() => clickHandler(event._id)}  key={index} geometry={event.coordinates} options={{
                    iconLayout: 'default#image',
                    iconImageHref: game.thumbnail,
                    iconImageSize: [40, 40],
                  }} />
                ))}
              </Clusterer>
            </Map>
          })}
        </div>
      </YMaps>
    </div>
  )
}

export default Home
