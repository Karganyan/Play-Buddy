import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userInSessionThunk } from '../../redux/action-creators/user';
// import YandexMap from "../yandex-map/yandex-map"
import { YMaps, Map, Placemark, Clusterer } from 'react-yandex-maps';
import './eventMap.css';
import { getCurrentEventThunk, getEventsThunk } from '../../redux/action-creators/events';
import { useHistory } from 'react-router';
import Search from '../Search/Search';
import Checkbox from '../Search/Checkbox';

const EventMap = () => {
  const key = '51ad9d93-9100-4ffa-8ebf-138a17d2a225';
  const dispatch = useDispatch();
  const history = useHistory();
  const { user, events } = useSelector(store => store);
  const currentEvent = useSelector(store => store.currentEvent);
  const redirectOnEventPage = id => {
    history.push(`/event-page/${id}`);
  };

  useEffect(() => {
    (async () => {
      await dispatch(userInSessionThunk());
      await dispatch(getEventsThunk());
    })();
  }, []);
  
  const clickHandler = id => {
    dispatch(getCurrentEventThunk(id));
  };
  return (
    <div className='eventMap'>
      <div className='container mt-5'>
        {user.id ? (
          <>
            <h1>Привет, {user.name}</h1>
            {currentEvent._id ? (
              <>
                <h4>{currentEvent.title}</h4>
                <p>{currentEvent.description}</p>
                <span>Адрес: {currentEvent.address}(пока это координаты)</span>
                <button className='btn btn-primary'>записаться на событие</button>
              </>
            ) : (
              <p>Выбери событие</p>
            )}
          </>
        ) : (
          <h1>Давай зарегистрируемся?</h1>
        )}
        <Search />
        <Checkbox />
        <YMaps query={{ ns: 'use-load-option', apikey: key }}>
          <Map
            defaultState={{
              center: [55.75, 37.57],
              zoom: 10,
              controls: ['zoomControl', 'fullscreenControl'],
            }}
            modules={['control.ZoomControl', 'control.FullscreenControl', 'geocode']}
            className='map'
            instanceRef={ref => {
              ref && ref.behaviors.disable('scrollZoom');
            }}
          >
            <Clusterer options={{ groupByCoordinates: false }}>
              {events.event &&
                events.event.map(event => {
                  return (
                    <div key={event._id}>
                      <Placemark
                        onClick={() => clickHandler(event._id)}
                        geometry={event.coordinates}
                        options={{
                          iconLayout: 'default#image',
                          iconImageHref: event.thumbnail,
                          iconImageSize: [40, 40],
                        }}
                      />
                    </div>
                  );
                })}
            </Clusterer>
          </Map>
        </YMaps>
        <div>
          <ul>
            {events.event &&
              events.event.map(event => (
                <li key={event._id} onClick={() => redirectOnEventPage(event._id)}>
                  {event.title}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EventMap;
