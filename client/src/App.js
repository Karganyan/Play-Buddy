import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import SignIn from "./components/Signin/SignIn"
import SignUp from "./components/Signup/SignUp"
import Main from './components/Main/Main'
import Profile from './components/Profile/Profile'
// import MainPage from './components/Main/Main'
import EditProfile from "./components/Profile/EditProfile"
import CreateEventForm from "./components/Create-event-form/create-event-form"
import Events from "./components/Events/Events"
import Chat from "./components/Chat/chat"
import Home from "./components/Home/Home"

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
        <Route path="/signin" exact component={SignIn} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/home" exact component={Home} />

      </Switch>

    </Router>
  )
}

export default App;
