import styles from './Events.module.css';
import EventCard from './EventCard';
import { Link } from "react-router-dom";

const Events = () => {
  return (
    <div>
      <div>
        <h1>Мои События</h1>
        <EventCard />
        <hr/>
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
