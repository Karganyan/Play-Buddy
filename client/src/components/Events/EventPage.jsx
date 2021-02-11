import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { joinEventThunk, closeEvent, getEventsThunk, kickUser } from '../../redux/action-creators/events';
import styles from "./Events.module.css";

const EventPage = () => {
  const [count, setCount] = useState(0)
  const [userCreator, setUserCreator] = useState('')
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
    <div className={styles.eventBg}>
      <div className={styles.centering}>
        <div className={styles.eventWrapper}>
          <img width="105px" src={thisEvent && thisEvent.thumbnail} alt="game" />
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
          <h5>Описание мероприятия:</h5>
          {thisEvent && thisEvent.description}
        </div>

        <br />
        <div>
          <h5>Участники мероприятия</h5>
          {thisEvent &&
            thisEvent.participants.map((userr) => {
              let avatarPath;
              if(userr.avatar === '/uploads/avatar.png'){
                avatarPath = `${userr.avatar}`;
              } else {
                avatarPath = `/uploads/${userr.avatar}`;
              }
              return (
                <ul key={userr._id}>
                  <li className={styles.participant}>{userr.name}</li>
                  <img
                    src={avatarPath}
                    className={styles.ava}
                    alt="ava"
                    width="100px"
                  />
                  {event && user.id === event.creator ? (
                    userr._id === user.id ? (
                      <>
                        &nbsp;<span> Организатор</span>
                      </>
                    ) : (
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
                </ul>
              );
            })}
        </div>
        <br />
        {event && user.id === event.creator ? (
          <Button onClick={() => closeEvent(event._id, history)}>
            Закрыть запись
          </Button>
        ) : user.id ? (
          <Button onClick={joinEvent}>Записаться на игротеку</Button>
        ) : (
          <Button
            onClick={() => {
              history.push("/signin");
            }}
          >
            Записаться на игротеку
          </Button>
        )}
        {wasAdded
          ? wasAdded === "notok"
            ? "ALE TI UZHE ZPISAN"
            : "BRAT TI ZAPISAN OT DUSHI"
          : ""}
      </div>
    </div>
  );
};

export default EventPage;
