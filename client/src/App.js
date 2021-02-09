import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Main from './components/Main/Main'
import Profile from './components/Profile/Profile'
import EditProfile from "./components/Profile/EditProfile"
import CreateEventForm from "./components/Create-event-form/CreateEventForm"
import Home from "./components/Home/Home"
import Signin from "./components/Signin/SignIn"
import SignUp from "./components/Signup/SignUp"
import EventPage from "./components/Events/EventPage"
import Chat from "./components/Сhat/Chat"
import Events from './components/Events/Events.jsx'

function App() {
  return (
    <Router>
      <Switch>

        <Route path="/" exact component={Main} />
        <Route path="/events" exact component={Events} />
        <Route path="/chats" exact component={Chat} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/edit" exact component={EditProfile} />
        <Route path="/create-event" exact component={CreateEventForm} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/home" exact component={Home} />
        <Route exact path='/event-page/:id'>
          <EventPage/>
        </Route>

      </Switch>

    </Router>
  )
}

export default App;
