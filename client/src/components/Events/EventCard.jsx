import { Card, Button } from "react-bootstrap";
import styles from "./Events.module.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const EventCard = () => {
  const user = useSelector((store) => store.user);
  const userEvents = useSelector((store) => store.userEvents);
  return (
    <>
      {userEvents.map((event) => {
        return (
          <Card key={event._id} className={styles.myCard}>
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
              className={
                user.id == event.creator
                  ? styles.bodyRelative
                  : styles.myCardbBody
              }
            >
              <Card.Title>
                <Link to="/create-event">{event.title}</Link>
              </Card.Title>
              <Card.Text>
                <span className={styles.eventDetails}>
                  <span>Сб, 13.02.2020</span>
                  <span>{event.address}</span>
                </span>
              </Card.Text>
              <Button className={styles.btn}>Отписаться от события</Button>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
};

export default EventCard;
