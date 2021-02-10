import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import styles from "./Profile.module.css";
import EditProfile from "./EditProfile";
// import Events from "../events/events";
// import CreateEventForm from "../Create-event-form/create-event-form";
// import { useState } from "react"
import ProfileInfo from "./ProfileInfo";
import ProfileFavGames from './ProfileFavGames';

// import UserChats from '../Chat/UserChats';
// import Main from '../Main/Main';
import { useSelector } from 'react-redux';

const Profile = () => {
  const user = useSelector((store) => store.user);
    const avatar = useSelector((store) => store.user.avatar);
// console.log(user.fav_games);

  return (
    <div className={styles.profile}>
      <div className={styles.header}>
        <div>
          <Link title="Домой" to="/">
            <img src="hamburger.png" className={styles.hamburger} />
          </Link>
          <img src="avatar.png" alt="avatar" className={styles.avatar} />
          <Link to="/edit">
            <img title="Настройки" src="settings.png" className={styles.settings} />
          </Link>
          <div>
            <Link to="/events">
              <button className="btn btn-outline-success" type="button">
                События
              </button>
            </Link>
            <Link to="/chats">
              <button className="btn btn-outline-success" type="button">
                Чаты
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <h1>INFO</h1>
        <ProfileInfo />
        <br />
        <br />
        <h1>FAVORITE GAMES</h1>
        {user.fav_games ? (
          <ProfileFavGames />
        ) : (
          <div>Пока не выбрано ни одной любимой игры</div>
        )}
      </div>
    </div>
  );
};

export default Profile;
