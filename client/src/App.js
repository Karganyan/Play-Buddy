import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home"
import SignIn from "./components/Signin/SignIn"
import SignUp from "./components/Signup/SignUp"
import User from './components/Profile/Profile'
import Main from './components/Main/Main'
import Profile from './components/Profile/Profile'

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Navbar /> */}
        <Home />
      </div>

      <Switch>

        <Route exact path='/'>
          <Main />
        </Route>

        <Route exact path='/signin'>
          <SignIn />
        </Route>

        <Route exact path='/signup'>
          <SignUp />
        </Route>

        <Route exact path='/profile'>
          <Profile />
        </Route>

        <Route exact path='/main'>
          <Main />
        </Route>

      </Switch>

    </Router>
  )
}

export default App;
