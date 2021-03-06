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
import NoteState from "./context/note/NoteState";
import PrivateRoute from "./components/routing/PrivateRoute";
import ItemState from "./context/item/ItemState";
import ItemHome from "./components/pages/ItemHome";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App = () => {
  return (
    <AuthState>
      <NoteState>
        <ItemState>
          <AlertState>
            <Router>
              <Fragment>
                <ReactNavbar />
                <div className='container'>
                  <Alerts />
                  <Switch>
                    <Route exact path='/' component={Main} />
                    <PrivateRoute exact path='/dashboard' component={Home} />
                    <PrivateRoute
                      exact
                      path='/dashboarditem'
                      component={ItemHome}
                    />
                    <Route exact path='/signup' component={Register} />
                    <Route exact path='/login' component={Login} />
                  </Switch>
                </div>
              </Fragment>
            </Router>
          </AlertState>
        </ItemState>
      </NoteState>
    </AuthState>
  );
};

export default App;
