import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import SignIn from "./components/Signin/SignIn"
import SignUp from "./components/Signup/SignUp"
import Main from './components/Main/Main'
import Profile from './components/Profile/Profile'
import Home from "./components/Home/Home"
import EventPage from "./components/Events/EventPage"

function App() {
  return (
    <Router>
      <div className="App">
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

        <Route exact path='/event-page/:id'>
          <EventPage/>
        </Route>

      </Switch>

    </Router>
  )
}

export default App;
