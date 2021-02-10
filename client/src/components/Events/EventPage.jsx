import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { joinEventThunk, closeEvent, getEventsThunk, kickUser } from '../../redux/action-creators/events';
import styles from "./Events.module.css";

const EventPage = () => {
  const [count, setCount] = useState(0)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getEventsThunk());
  }, [count]);
  const history = useHistory()
  const { user, userEvents, events } = useSelector(store => store);
  const param = useParams();
  const [wasAdded, setWasAdded] = useState('');

  const event = userEvents.find(event => event._id === param.id)
  const thisEvent = events.event.find(event => event._id === param.id)
  const joinEvent = () => {
    if (event) {
      setWasAdded('notok')
      setTimeout(() => { setWasAdded('') }, 3000)
    } else {
      (async () => {
        await setWasAdded('ok')
        await setTimeout(() => { setWasAdded('') }, 3000)
        await dispatch(joinEventThunk({ userId: user.id, eventId: param.id }))
      })()
      history.push('/chats')
    }
  }


  return (
    <div>
      <div className={styles.eventWrapper}>
        <img
          width="105px"
          src="https://sun9-71.userapi.com/c850720/v850720894/10d47c/NU0_158reys.jpg"
          alt="game"
        />
        <div className={styles.eventMainInfo}>
          <h1>{thisEvent && thisEvent.title}</h1>
          <div className={styles.eventDetails}>
            <span>Адресс: {thisEvent && thisEvent.address}</span>

            <span>
              Количество игроков: {thisEvent && thisEvent.participants.length}{" "}
              из {thisEvent && thisEvent.max_participants}
            </span>
          </div>
        </div>
      </div>
      <div className="eventDescription">
        Описание мероприятия:{thisEvent && thisEvent.description}
      </div>
      <br />
      <div>
        <h5>Участники мероприятия</h5>
        {thisEvent &&
          thisEvent.participants.map((userr) => {
            const avatarPath = `/uploads/${userr.avatar}`;
            return (
              <div key={userr._id}>
                <span>{userr.name}</span>
                <img src={avatarPath} className={styles.ava} alt="ava" width="100px"/>
                {event && user.id === event.creator ? (
                  userr._id === user.id ? null : (
                    <Button
                      onClick={() => {
                        setCount((pre) => pre + 1);
                        kickUser(userr._id, event._id, history);
                        dispatch(getEventsThunk());
                      }}
                    >
                      выгнать
                    </Button>
                  )
                ) : null}
              </div>
            );
          })}
      </div>
      <br />
      {event && user.id === event.creator ? (
        <Button onClick={() => closeEvent(event._id, history)}>
          Закрыть запись
        </Button>
      ) : (
        <Button onClick={joinEvent}>Записаться на игротеку</Button>
      )}
      {wasAdded
        ? wasAdded === "notok"
          ? "ALE TI UZHE ZPISAN"
          : "BRAT TI ZAPISAN OT DUSHI"
        : ""}
    </div>
  );
};

export default EventPage;
