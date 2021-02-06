import { Button } from 'react-bootstrap';
import styles from "./Events.module.css";

const EventPage = () => {

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

      <Button>Записаться на игротеку</Button>
    </div>
  );
};

export default EventPage;
