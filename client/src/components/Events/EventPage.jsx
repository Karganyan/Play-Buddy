import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { joinEventThunk } from '../../redux/action-creators/events';
import styles from "./Events.module.css";

const EventPage = () => {
  const dispatch = useDispatch()
  const { user, userEvents } = useSelector(store => store);
  const param = useParams();
  const [wasAdded, setWasAdded] = useState(false);
  const joinEvent = () => {
    const event = userEvents.find(event => event._id === param.id)
    if (event) {
      console.log(userEvents);
      setWasAdded(true)
      setTimeout(()=>{setWasAdded(false)},3000)
    } else {
      dispatch(joinEventThunk({ userId: user.id, eventId: param.id }))
    }
  }

  return (
    <div>
      <div className={styles.eventWrapper}>
        <img
          width="65px"
          src="https://sun9-71.userapi.com/c850720/v850720894/10d47c/NU0_158reys.jpg"
          alt="game"
        />
        <div className={styles.eventMainInfo}>
          <h1>event title</h1>
          <div className={styles.eventDetails}>
            <span>Time</span>
            <span>Place</span>
            <span>People Qty</span>
          </div>
        </div>
      </div>

      <div className="eventDescription">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ducimus
        quibusdam aut officia dolor. Voluptatibus, assumenda molestias? Natus
        praesentium reiciendis earum obcaecati expedita ratione qui perspiciatis
        voluptas optio. Veniam odio velit hic blanditiis necessitatibus adipisci
        voluptatem, autem ratione nisi suscipit. Sed atque, esse eligendi
        veritatis iusto deserunt, natus odit dicta laborum, distinctio iure ad.
        Labore, animi!
      </div>

      <Button onClick={joinEvent}>Записаться на игротеку</Button>
      {wasAdded && 'ALE TI EZHE ZPISAN'}
    </div>
  );
};

export default EventPage;