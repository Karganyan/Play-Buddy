import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Main from './components/Main/Main'
import Profile from './components/Profile/Profile'
import EditProfile from "./components/Profile/EditProfile"
import CreateEventForm from "./components/Create-event-form/CreateEventForm"
import EventMap from "./components/EventMap/EventMap"
import Signin from "./components/Signin/SignIn"
import SignUp from "./components/Signup/SignUp"
import Events from "./components/Events/Events"
import Chat from "./components/Chat/Chat"
import EventPage from "./components/Events/EventPage"

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
        <Route path="/map" exact component={EventMap} />
        <Route exact path='/event-page/:id' component={EventPage} />

      </Switch>

    </Router>
  )
}

export default App;


