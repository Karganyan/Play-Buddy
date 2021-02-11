import React, { useState, useRef, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './Global';
import { theme } from './Theme';
import Burger from './components/Burger/Burger'
import Menu from './components/Menu/Menu'
import { useOnClickOutside } from './hooks';
import { userLogoutThunk } from "../../redux/action-creators/user";
import { useDispatch, useSelector } from "react-redux";
import { userInSessionThunk } from "../../redux/action-creators/user";
import { Link } from "react-router-dom";
import { getTagsThunk, getGamesThunk } from '../../redux/action-creators/createEventThunk';
import { useHistory } from "react-router";


function MainPage() {
  const history = useHistory()
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
            { user.id ? <h1>Приветики, {user.name}</h1> : <h1>Зарегистрироваться</h1> }
            <h1 style={{ fontSize: '50px', textAlign: 'center' }} className='appName'>Play Buddy <img src='https://media.giphy.com/media/ygzkZPxmh6HgUzbYFz/giphy.gif' style={{ width: '70px', height: '70px' }} /></h1>

            <img className='logo' src="/logo1.jpg" alt="logo" style={{ width: '300px', height: '300px', borderRadius: '80%' }} />
          </div>
          <div ref={node}>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />

          </div>
          <Link to='/' onClick={logoutHandler}>
            <img src="/icons8-open-door-50.png" alt='img'/>
          </Link>
        </>
      </ThemeProvider>
    </>
  );
}

export default MainPage;
