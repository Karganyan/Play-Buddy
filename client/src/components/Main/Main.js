import React, { useState, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './Global';
import { theme } from './Theme';
import Burger from './components/Burger/Burger'
import Menu from './components/Menu/Menu'
import { useOnClickOutside } from './hooks';
import { userInSession, userLogoutThunk } from "../../redux/action-creators/user";

function App() {

  const [open, setOpen] = useState(false);
  const node = useRef(); 
  useOnClickOutside(node, () => setOpen(false));
    const logoutHandler = async () => {
    dispatch(userLogoutThunk(history))
  }

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div>
          <h1 style={{ fontSize: '50px', textAlign: 'center'}}>GAME MATCH</h1>
          <img src="https://media.giphy.com/media/5eF796KN48zDkgk9si/giphy.gif" alt="abba team" />
        </div>
        <div ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
        <a href='/logout' onClick={logoutHandler}>
          <img src="/icons8-open-door-50.png" />
          </a>
      </>
    </ThemeProvider>
  );
}
export default App;
