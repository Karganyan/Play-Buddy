import { BrowserRouter as Router, Route, Link, Switch, useHistory } from 'react-router-dom';
import styles from './Profile.module.css';
import { useState, useRef } from 'react';
import ProfileInfo from './ProfileInfo';
import ProfileFavGames from './ProfileFavGames';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useOnClickOutside } from '../Main/hooks';
import './Profile.module.css';

const Profile = () => {
  const user = useSelector(store => store.user);
  const avatar = useSelector(store => store.user.avatar);

  let avatarPath;

  if (avatar === '/uploads/avatar.png') {
    avatarPath = `${avatar}`;
  } else {
    avatarPath = `/uploads/${avatar}`;
  }

  const history = useHistory();
  useEffect(() => {
    !user.id ? history.push('/signin') : null;
  }, []);

  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <div className={styles.profile}>
      <div className={styles.header}>
        <div className={styles.profileWrapper}>
          <Link title='Домой' to='/'>
            <img src='home.svg' className={styles.hamburger} />
          </Link>
          <img src={avatarPath} alt='avatar' className={styles.avatar} />
          <Link to='/edit'>
            <img title='Настройки' src='settings.svg' className={styles.settings} />
          </Link>
        </div>

        <ProfileInfo />
        <div>
          <>
            <Link to='/events'>
              <button
                className='btn btn-outline-info btn-lg'
                style={{
                  width: '200px',
                  padding: '15px',
                  fontSize: '25px',
                  marginRight: '20px',
                  color: 'white',
                }}
              >
                Мои События
              </button>
            </Link>

            <Link to='/chats'>
              <button
                className='btn btn-outline-info btn-lg'
                style={{ width: '200px', padding: '15px', fontSize: '25px', color: 'white' }}
              >
                Мои Чаты
              </button>
            </Link>
          </>
        </div>

        <div className={styles.bottom}>
          {user.information ? (
            <div>
              {' '}
              <h2 style={{ color: '#fcf876' }}>Личная информация</h2>
              <p>{user.information} </p>
            </div>
          ) : null}
              <h2 style={{ color: '#fcf876' }}>Со мной можно связаться по номеру</h2>
          {user.phone ? (
            <div>
              <p>{user?.phone} </p>
            </div>
          ) : null}
          <br />

          <h1 style={{ color: '#fcf876', fontSize: '50px', textShadow: '1px 1px 2px #e7e7de' }}>
            Любимые Игры
          </h1>
          {user.fav_games ? <ProfileFavGames /> : <div>Пока не выбрано ни одной любимой игры</div>}
        </div>
      </div>
    </div>
  );
};
export default Profile;
