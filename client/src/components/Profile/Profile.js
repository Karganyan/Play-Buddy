import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styles from './Profile.module.css';
import EditProfile from './EditProfile';
import Events from '../Events/Events';
import { useState } from 'react';

const Chats = () => {
  return (
    <div>
      <h1>Chats</h1>
    </div>
  );
};

function User() {
  const [edit, setEdit] = useState(false);

  return (
    <Router>
      <div className='Profile'>
        <Route path='/profile' exact component={Profile} />
        <Route path='/events' component={Events} />
        <Route path='/chats' component={Chats} />
        <Route path='/edit' component={EditProfile} />
      </div>
    </Router>
  );
}

const Profile = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.header}>
        <div>
          <img src='dog.jpg' alt='dog' className={styles.avatar} />
          <div>
            {/* <Link to='/info'>
              <button className='btn btn-outline-success' type='button'>
                INFO
              </button>
            </Link> */}
            <Link to='/events'>
              <button className='btn btn-outline-success' type='button'>
                EVENTS
              </button>
            </Link>
            <Link to='/chats'>
              <button className='btn btn-outline-success' type='button'>
                CHATS
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <h1>INFO</h1>
        <br />
        <br />
        <br />
        <h1>FAVORITE GAMES</h1>
        <div className={styles.cards}>
          <div className={styles.card}>
            {/* <img className='card-img-top' src='...' alt='Card' /> */}
          </div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
        </div>
        <Link to='/edit'>
          <button className='btn btn-danger'>Редактировать профиль</button>
        </Link>
      </div>
    </div>
  );
};

export default User;
