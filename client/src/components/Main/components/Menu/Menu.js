import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

const Menu = ({ open }) => {

  const isLogged = useSelector(state => state.user.name)

  return (
    <StyledMenu open={open}>
      <a href="/">
        <span role="img" aria-label="ABBA"><img src="https://img.icons8.com/bubbles/50/000000/confetti.png"/></span>
        ABBA
        </a>
      {isLogged ?
        <a href="/profile">
          <span role="img" aria-label="Профиль"><img src="https://img.icons8.com/doodle/48/000000/3-of-hearts.png" /></span>
        Профиль
      </a> :
        <a href="/signup">
          <span role="img" aria-label="Профиль"><img src="https://img.icons8.com/doodle/48/000000/3-of-hearts.png" /></span>
        Войти
      </a>
      }
      <a href="/https://yandex.ru/maps/213/moscow/?ll=37.622504%2C55.753215&z=10">
        <span role="img" aria-label="Карта Игр"><img src="https://img.icons8.com/doodle/48/000000/dice.png" /></span>
        Карта Игр
        </a>
      <a href="/">
        <span role="img" aria-label="Категории"><img src="https://img.icons8.com/doodle/48/000000/board-game.png" /></span>
        Категории
        </a>
    </StyledMenu>
  )
}
Menu.propTypes = {
  open: bool.isRequired,
}
export default Menu;
