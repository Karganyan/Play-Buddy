import { BrowserRouter as Router, Route, Link, Switch, useHistory } from 'react-router-dom';
import styles from './Profile.module.css';
import { useState, useRef } from "react";
import ProfileInfo from './ProfileInfo';
import ProfileFavGames from './ProfileFavGames';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useOnClickOutside } from '../Main/hooks';

const Profile = () => {
  const user = useSelector(store => store.user);
  const avatar = useSelector(store => store.user.avatar);
  let avatarPath;
  console.log(avatar);
  if(avatar === '/uploads/avatar.png'){
    avatarPath = `${avatar}`;
  } else {
    avatarPath = `/uploads/${avatar}`;
  }
  const history = useHistory();
  useEffect(() => {
    !user.id ? history.push('/signin') : null;
  }, []);
  // console.log('AVATAR!====>', avatarPath);

  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <div className={styles.profile}>
      <div className={styles.header}>
        <div>
          <Link title="Домой" to="/">
            <img src="icons8-menu-96.png" className={styles.hamburger}/>
          </Link>

          <img src={avatarPath} alt='avatar' className={styles.avatar} />
          <Link to='/edit'>
            <img title='Настройки' src='settings.png' className={styles.settings} />
          </Link>
          <ProfileInfo />
          <div>
            <Link to='/events'>
              <button className='btn btn-outline-success btn-lg' type='button'>
                Мои События
              </button>
            </Link>
            <Link to='/chats'>
              <button className='btn btn-outline-success btn-lg' type='button'>
                Мои Чаты
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <h1>Личная информация</h1>

        {user.phone ? 
          <div>Номер телефона: {user.phone}</div>
        
          :
          null
        }
        <br />
        <br />
        <h1>Любимые Игры</h1>
        {user.fav_games ? <ProfileFavGames /> : <div>Пока не выбрано ни одной любимой игры</div>}
      </div>
    </div>
  );
};

export default Profile;
