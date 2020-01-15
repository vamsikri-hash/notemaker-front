import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReactNavbar from "./components/Layout/ReactNavbar";
import Home from "./components/pages/Home";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import "./App.css";
import Alerts from "./components/Layout/Alerts";
import setAuthToken from "./utils/setAuthToken";
import Main from "./components/pages/Main";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App = () => {
  return (
    <AuthState>
      <AlertState>
        <Router>
          <Fragment>
            <ReactNavbar />
            <div className='container'>
              <Alerts />
              <Switch>
                <Route exact path='/' component={Main} />
                <Route exact path='/home' component={Home} />
                <Route exact path='/signup' component={Register} />
                <Route exact path='/login' component={Login} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </AlertState>
    </AuthState>
  );
};

export default App;
