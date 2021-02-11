import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { userLogoutThunk } from '../../../../redux/action-creators/user';
import { useHistory } from "react-router";

const Menu = ({ open }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const isLogged = useSelector(state => state.user.name);

  const logoutHandler = async () => {
    dispatch(userLogoutThunk(history))
  }

  return (

    <StyledMenu open={open}>
      <Link to="/">
        <span role="img" aria-label="ABBA"><img src="https://img.icons8.com/bubbles/50/000000/confetti.png" /></span>
        PLAY BUDDY
        </Link>
      {isLogged ?
        <>
          <Link to="/profile">
            <span role="img" aria-label="Профиль"><img src="https://img.icons8.com/doodle/48/000000/3-of-hearts.png" /></span>
        Профиль
      </Link>
          <Link to='/' onClick={logoutHandler}>
            <span role="img" aria-label="Профиль"><img src="exit.png" /> Выйти</span>
          </Link>
        </>
        :
        <Link to="/signin">
          <span role="img" aria-label="Профиль"><img src="https://img.icons8.com/doodle/48/000000/3-of-hearts.png" /></span>
        Войти
      </Link>
      }
      <Link to="/map">
        <span role="img" aria-label="Карта Игр"><img src="https://img.icons8.com/doodle/48/000000/dice.png" /></span>
        Карта Игр
        </Link>

    </StyledMenu>

  )
}
Menu.propTypes = {
  open: bool.isRequired,
}
export default Menu;
