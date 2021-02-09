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

const Profile = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.header}>
        <div>
          <Link to='/'>
            <img src='hamburger.png'className={styles.hamburger}  />
          </Link>
          <img src="dog.jpg" alt="dog" className={styles.avatar} />
          <Link to='/edit'>
            <img src="settings.png" className={styles.settings} />
          </Link>
          <div>
            {/* <Link to='/info'>
              <button className='btn btn-outline-success' type='button'>
                INFO
              </button>
            </Link> */}
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
        <ProfileFavGames />
        <br/>
        <Link to='/edit'>
          <button className='btn btn-danger'>Редактировать профиль</button>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
