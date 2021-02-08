import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import SignIn from "./components/signin/signIn"
import SignUp from "./components/signup/signUp"
import Main from './components/Main/Main'
import Profile from './components/Profile/Profile'
import Home from "./components/Home/Home"

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

      </Switch>

    </Router>
  )
}

export default App;
