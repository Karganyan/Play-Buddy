import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Home from "./components/home/Home"
import SignIn from "./components/signin/SignIn"
import SignUp from "./components/signup/SignUp"


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>

      <Switch>

        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='/signin'>
          <SignIn />
        </Route>

        <Route path='/signup'>
          <SignUp />
        </Route>

      </Switch>

    </Router>
  );
}

export default App;
