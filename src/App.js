import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

// import Home from "./views/Home";
// import Dashboard from "./views/Dashboard";
import FourOhFour from './views/Notfound';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            {/* <Route exact path="/" component={Home} /> */}
            {/* <Route exact path="/dashboard" component={Dashboard} /> */}
            <Route component={FourOhFour} />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
