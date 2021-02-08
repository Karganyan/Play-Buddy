import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Main from './components/Main/Main'
import Profile from './components/Profile/Profile'
import EditProfile from "./components/Profile/EditProfile"
import CreateEventForm from "./components/Create-event-form/create-event-form"
import Events from "./components/events/events"
import Home from "./components/Home/Home"
import EventPage from "./components/events/EventPage"
import Signin from "./components/Signin/SignIn"
import SignUp from "./components/signup/SignUp"
import Chat from "./components/chat/chat"
import Game from './components/Game/Game';

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
        <Route path="/game" exact component={Game} />

        <Route exact path="/event-page/:id">
          <EventPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
