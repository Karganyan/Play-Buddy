import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
* {
  @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
  font-family: 'Pacifico';

}

html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    align-items: center;
    background: ${({ theme }) => theme.primaryDark};
    color: ${({ theme }) => theme.primaryLight};
    display: flex;
    height: 100vh;
    justify-content: center;
    text-rendering: optimizeLegibility;
  }
  `
