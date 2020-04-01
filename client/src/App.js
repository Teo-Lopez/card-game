import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Board from "./components/Board";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthService } from "./utils/services/Auth.service";
import ButtonAppBar from "./components/ui/NavBar";
const authService = new AuthService();

function App(props) {
  const [loggedInUser, setLoggedInUser] = useState(false);
  const fetchUser = () => authService.getLoggedUser();

  useEffect(() => {
    loggedInUser == false &&
      fetchUser().then(user => {
        user ? setLoggedInUser(user) : setLoggedInUser(null);
      });
  }, [loggedInUser]);

  return (
    <Switch>
      <>
        <ButtonAppBar loggedInUser={loggedInUser} {...props} />
        <Route path="/signup" render={() => <Signup {...props} setUser={fetchUser} />} />
        <Route path="/login" render={() => <Login {...props} setUser={fetchUser} />} />
        {loggedInUser == false ? (
          <h3>Trying to login</h3>
        ) : loggedInUser == null ? (
          <Redirect to="/login" />
        ) : (
          <Route exact path="/" component={Board} />
        )}
      </>
    </Switch>
  );
}

export default App;
