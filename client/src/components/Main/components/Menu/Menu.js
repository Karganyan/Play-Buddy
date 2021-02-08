import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Menu = ({ open }) => {

  const isLogged = useSelector(state => state.user.name)

  return (

      <StyledMenu open={open}>
        <Link to="/">
          <span role="img" aria-label="ABBA"><img src="https://img.icons8.com/bubbles/50/000000/confetti.png" /></span>
        ABBA
        </Link>
        {isLogged ?
          <Link to="/profile">
            <span role="img" aria-label="Профиль"><img src="https://img.icons8.com/doodle/48/000000/3-of-hearts.png" /></span>
        Профиль
      </Link>
          :
          <Link to="/signup">
            <span role="img" aria-label="Профиль"><img src="https://img.icons8.com/doodle/48/000000/3-of-hearts.png" /></span>
        Войти
      </Link>
        }
        <Link to="/home">
          <span role="img" aria-label="Карта Игр"><img src="https://img.icons8.com/doodle/48/000000/dice.png" /></span>
        Карта Игр
        </Link>
        {/* <Link to="/">
          <span role="img" aria-label="Категории"><img src="https://img.icons8.com/doodle/48/000000/board-game.png" /></span>
        Категории
        </Link> */}
      </StyledMenu>

  )
}
Menu.propTypes = {
  open: bool.isRequired,
}
export default Menu;
