import {
  Card,
  CardGroup,
  Button,
} from "react-bootstrap";
import styles from "./Events.module.css";
import { useSelector } from 'react-redux';


const EventCard = () => {
  const user = useSelector((store) => store.user);
  const userEvents = useSelector(store => store.userEvents);
  return (
    <CardGroup>
      {userEvents.map(event => {
        return (
          <Card key={event._id} style={{ maxWidth: "25vw" }}>
            <Card.Img variant="top" src={event.thumbnail} />
            {user.id == event.creator && (
              <div className={styles.sticker}>
                <img
                  src="/sticker.png"
                  alt="sticker"
                  width="120px"
                  height="140px"
                />
                <span>Организатор</span>
              </div>
            )}
            <Card.Body
              className={user.id == event.creator && styles.bodyRelative}
            >
              <Card.Title>{event.title}</Card.Title>
              <Card.Text>
                <span className={styles.eventDetails}>
                  <span>Сб, 13.02.2020</span>
                  <span>{event.address}</span>
                </span>
              </Card.Text>
              <Button style={{ maxWidth: "18vw" }}>
                Отписаться от события
              </Button>
            </Card.Body>
          </Card>
        );
      })}
    </CardGroup>
  );
};

export default EventCard;
