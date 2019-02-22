import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "./views/Home/index.js";
import Dashboard from "./views/Dashboard/index.js";
import Article from "./components/DashboardComponents/Article";
import FourOhFour from "./views/Notfound";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/dash" component={Article} />
            <Route component={FourOhFour} />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
