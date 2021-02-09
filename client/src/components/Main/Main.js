import React, { useState, useRef, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './Global';
import { theme } from './Theme';
import Burger from './components/Burger/Burger'
import Menu from './components/Menu/Menu'
import { useOnClickOutside } from './hooks';
import { userInSession, userLogoutThunk } from "../../redux/action-creators/user";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentEventThunk, getEventsThunk } from "../../redux/action-creators/events";
import { userInSessionThunk } from "../../redux/action-creators/user";
import { Link } from "react-router-dom";
import Checkbox from '../Search/Checkbox';
import { getTagsThunk, getGamesThunk } from '../../redux/action-creators/createEventThunk';

function MainPage() {


  const dispatch = useDispatch()
  const user = useSelector(store => store.user)
  const currentEvent = useSelector(store => store.currentEvent)


  useEffect(() => {
    (async () => {
      // ЭТО НЕ ТРОГАТЬ!!!!!!!!!!!1
      await dispatch(userInSessionThunk());
      await dispatch(getTagsThunk())
      await dispatch(getGamesThunk())
        
      })()
  }, [])

  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  const logoutHandler = async () => {
    dispatch(userLogoutThunk(history))
  }

  return (
    <>

      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <div>
            {user.id
              ?
              <>
                <h1>Приветики, {user.name}</h1>
                {currentEvent._id
                  ?
                  <>
                    <h4>{currentEvent.title}</h4>
                    <p>{currentEvent.description}</p>
                    <span>Адрес: {currentEvent.coordinates}(пока это координаты)</span>
                    <button className='btn btn-primary'>записаться на событие</button>
                  </>
                  :
                  <p>Выбери событие</p>
                }
              </>
              :
              <h1>Зарегистрироваться</h1>
            }
            <h1 style={{ fontSize: '50px', textAlign: 'center' }} className='appName'>Play Buddy <img src='https://media.giphy.com/media/ygzkZPxmh6HgUzbYFz/giphy.gif' style={{ width: '70px', height: '70px' }} /></h1>

            <img className='logo' src="/logo1.jpg" alt="logo" style={{ width: '300px', height: '300px', borderRadius: '80%' }} />
          </div>
          <div ref={node}>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />

          </div>
          <Link to='/' onClick={logoutHandler}>
            <img src="/icons8-open-door-50.png" />
          </Link>
        </>
      </ThemeProvider>
    </>
  );
}

export default MainPage;
