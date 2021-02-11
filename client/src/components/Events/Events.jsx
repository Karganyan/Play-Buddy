import styles from "./Events.module.css";
import EventCard from "./EventCard";
import { Link } from "react-router-dom";
import { Card, CardGroup, Button } from "react-bootstrap";

const Events = () => {

  return (
    <div>
      <div>
        <Link title="Домой" to="/">
          <img src="hamburger.png" className={styles.hamburger} />
        </Link>
        <h1 className={styles.title}>Мои События</h1>
        <CardGroup className={styles.myGroup}>
          <EventCard />
        </CardGroup>
        <hr />
        <Link to="/create-event">
          <button className="btn btn-outline-success" type="button">
            Создать новое событие
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Events;
