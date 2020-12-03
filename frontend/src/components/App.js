import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { Provider } from "react-redux";
import store from "../store";

//import { Container, Row, Col } from "reactstrap";

import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import Header from "./layout/Header";

import Alerts from "./layout/Alerts";
import Login from "./accounts/Login";
import Register from "./accounts/Register";

import { loadUser } from "../actions/auth";
// import PrivateRoute from "./common/PrivateRoute";
// import Dashboard from "./leads/Dashboard";
import Home from "./Home";
import About from "./About";


// Alert Options
const alertOptions = {
  timeout: 3000,
  position: "top center",
};

class App extends Component {
 
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router>
            <Fragment>
              <Header />
              <Alerts/>
              <div className="container" style={{ marginTop: "70px" }}>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/register" component={Register} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
