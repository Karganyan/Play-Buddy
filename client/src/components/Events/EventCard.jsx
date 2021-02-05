import {
  Card,
  CardGroup,
  Button,
} from "react-bootstrap";
import styles from "./Events.module.css";


const EventCard = () => {
  return (
    <CardGroup>
      <Card style={{ "max-width": "10vw" }}>
        <Card.Img
          variant="top"
          src="https://sun9-71.userapi.com/c850720/v850720894/10d47c/NU0_158reys.jpg"
        />
        <Card.Body>
          <Card.Title>Game/Event title</Card.Title>
          <Card.Text>
            <div className={styles.eventDetails}>
              <span>Time</span>
              <span>Place</span>
            </div>
          </Card.Text>
          <Button style={{ "max-width": "8vw" }}>Отписаться от события</Button>
        </Card.Body>
      </Card>
    </CardGroup>
  );
};

export default EventCard;
