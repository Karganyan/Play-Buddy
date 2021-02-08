import { Link } from "react-router-dom"
import { useHistory } from "react-router"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { userInSessionThunk, userLogoutThunk } from "../../redux/action-creators/user"

const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);

  const history = useHistory();
  useEffect(() => {
    dispatch(userInSessionThunk())
  }, [])

  const logoutHandler = async () => {
    dispatch(userLogoutThunk(history))
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
      <div className="container-fluid ">
        <Link className="navbar-brand" to="/">
          ABBA
        </Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {user.id
              ?
                <>
                  <li className="nav-item">
                    <a className="nav-link">{user.name}</a>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/logout" onClick={logoutHandler}>
                      Log Out
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/profile">
                      Profile
                    </Link>
                  </li>
                </>
              :
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/signin">Sign In</Link>
                  </li>
                  <li className="nav-item">
                    <a href='http://localhost:3001/user/google' className="nav-link" >Sign In With Google</a>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/signup">Sign Up</Link>
                  </li>
                </>
              }
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
