// import { Link } from "react-router-dom"
// import { useHistory } from "react-router"
// import { useEffect } from "react"
// import { useDispatch, useSelector } from "react-redux"
// import { userInSessionThunk, userLogoutThunk } from "../../redux/action-creators/user"
// import { Link } from "react-router-dom"
// import { useHistory } from "react-router"
// import { useEffect } from "react"
// import { useDispatch, useSelector } from "react-redux"
// import { userInSession, userLogoutThunk } from "../../redux/action-creators/user"

// const Navbar = () => {
//   const dispatch = useDispatch();
//   const user = useSelector(store => store.user);

  // const history = useHistory();
  // useEffect(() => {
  //   dispatch(userInSessionThunk())
  // }, [])
//   const history = useHistory();
//   useEffect(() => {
//     dispatch(userInSession())
//   }, [])

//   const logoutHandler = async () => {
//     dispatch(userLogoutThunk(history))
//   }
//   return (
//     <nav className="Navbar Navbar-expand-lg Navbar-light bg-light px-3">
//       <div className="container-fluid ">
//         <Link className="Navbar-brand" to="/">
//           ABBA
//         </Link>
//         <div className="collapse Navbar-collapse" id="navbarTogglerDemo03">
//           <ul className="Navbar-nav me-auto mb-2 mb-lg-0">
//             {user.id
//               ?
//                 <>
//                   <li className="nav-item">
//                     <a className="nav-link">{user.name}</a>
//                   </li>
//                   <li className="nav-item">
//                     <Link className="nav-link" to="/logout" onClick={logoutHandler}>
//                       Log Out
//                     </Link>
//                   </li>
//                   <li className="nav-item">
//                     <Link className="nav-link" to="/Profile">
//                       Profile
//                     </Link>
//                   </li>
//                 </>
//               :
//                 <>
//                   <li className="nav-item">
//                     <Link className="nav-link" to="/Signin">Sign In</Link>
//                   </li>
//                   <li className="nav-item">
//                     <a href='http://localhost:3001/user/google' className="nav-link" >Sign In With Google</a>
//                   </li>
//                   <li className="nav-item">
//                     <Link className="nav-link" to="/signup">Sign Up</Link>
//                   </li>
//                 </>
//               }
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };
// export default Navbar;
