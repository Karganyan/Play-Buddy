import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import {
  joinEventThunk,
  closeEvent,
  getEventsThunk,
  kickUser,
} from '../../redux/action-creators/events';
import styles from './Events.module.css';

const EventPage = () => {
  const [count, setCount] = useState(0);
  const [wasAdded, setWasAdded] = useState('');
  const { user, userEvents, events } = useSelector(store => store);

  const dispatch = useDispatch();
  const history = useHistory();
  const param = useParams();


  useEffect(() => {
    dispatch(getEventsThunk());
  }, [count]);


  const event = userEvents.find(event => event._id === param.id);
  const thisEvent = events?.event?.find(event => event._id === param.id);

  const joinEvent = () => {
    if (event) {
      setWasAdded('notok');
      setTimeout(() => {
        setWasAdded('');
      }, 3000);
    } else {
      setWasAdded('ok');
      setTimeout(() => {
        setWasAdded('');
      }, 3000);
      dispatch(joinEventThunk({ userId: user.id, eventId: param.id }));
      history.push('/chats');
    }
  };

  return (
    <div className={styles.eventBg}>
      <div className={styles.centering}>
        <div className={styles.eventWrapper}>
          <img className={styles.thumbnailPic} src={thisEvent && thisEvent.thumbnail} alt='game' />
          <div className={styles.eventMainInfo}>
            <h1>{thisEvent && thisEvent.title}</h1>
            <div className={styles.eventDetails}>
              <span className={styles.textAddress}>Адрес: {thisEvent && thisEvent.address}</span>

              <span>
                Количество игроков: {thisEvent && thisEvent.participants.length} из{' '}
                {thisEvent && thisEvent.max_participants}
              </span>
            </div>
          </div>
        </div>
        <div className='eventBox'>
          <div className='eventDescription' style={{ marginLeft: '10px', fontSize: '0.9rem' }}>
            <h6>Описание мероприятия:</h6>
            {thisEvent && thisEvent.description}
          </div>
          <h6 style={{ marginLeft: '10px' }}>Участники мероприятия:</h6>
          <div style={{ overflowY: 'scroll' }}>
            {thisEvent &&
              thisEvent.participants.map(userr => {
                let avatarPath;
                if (userr.avatar === '/uploads/avatar.png') {
                  avatarPath = `${userr.avatar}`;
                } else {
                  avatarPath = `/uploads/${userr.avatar}`;
                }
                return (
                  <ul key={userr._id}>
                    <li className={styles.participant}>{userr.name}</li>
                    <img src={avatarPath} className={styles.ava} alt='ava' width='50px' />
                    {event && user.id === event.creator._id ? (
                      userr._id === user.id ? null : (
                        <Button style={{ width: '150px', marginLeft: '1rem', marginTop: 3, padding: 0 }}
                          onClick={() => {
                            setCount(pre => pre + 1);
                            kickUser(userr._id, event._id, history);
                            dispatch(getEventsThunk());
                          }}
                        >
                          выгнать
                        </Button>
                      )
                    ) : null}
                    {event && userr._id === event.creator._id ? <span> &nbsp; (организатор)</span> : null}
                  </ul>
                );
              })}
          </div>
        </div>
        {event && user.id === event.creator._id ? (
          <Button
            onClick={() => closeEvent(event._id, history)}
            style={{ width: '260px', backgroundColor: '#0dcaf0' }}
          >
            Закрыть запись
          </Button>
        ) : user.id ? (
          <>
            <Button
              onClick={joinEvent}
              style={{
                backgroundColor: '#17a2b8',
                marginBottom: '20px',
                marginRight: '10px',
                width: '230px',
                fontSize: '.7rem'
              }}
            >
              Записаться на Игру!
            </Button>

            <Button
              style={{
                backgroundColor: '#17a2b8',
                marginBottom: '20px',
                width: '230px',
                fontSize: '.7rem'
              }}
              onClick={() => {
                history.push('/map');
              }}
            >
              Вернуться на карту
            </Button>
          </>
        ) : (
              <Button
                onClick={() => {
                  history.push('/signin');
                }}
                style={{ width: '250px', backgroundColor: '#0dcaf0', border: 0 }}>
                Записаться на игротеку
              </Button>
            )}

        {wasAdded ? (wasAdded === 'notok' ? 'Ты уже записан :)' : 'BRAT TI ZAPISAN OT DUSHI') : ''}
      </div>
    </div>
  );
};

export default EventPage;
