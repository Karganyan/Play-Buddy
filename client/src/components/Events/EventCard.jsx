import {
  Card,
  CardGroup,
  Button,
} from "react-bootstrap";
import styles from "./Events.module.css";
import { useSelector } from 'react-redux';


const EventCard = () => {
  const allEvents = useSelector(store => store.events.event);
  console.log(allEvents);
  return (
    <CardGroup>
      <Card style={{ "maxWidth": "20vw" }}>
        <Card.Img
          variant="top"
          src="https://sun9-71.userapi.com/c850720/v850720894/10d47c/NU0_158reys.jpg"
        />
        <Card.Body>
          <Card.Title>Game/Event title</Card.Title>
          <Card.Text>
            <span className={styles.eventDetails}>
              <span>Time</span>
              <span>Place</span>
            </span>
          </Card.Text>
          <Button style={{ "maxWidth": "18vw" }}>Отписаться от события</Button>
        </Card.Body>
      </Card>
    </CardGroup>
  );
};

export default EventCard;
