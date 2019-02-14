import React from "react";
import { Link, Switch, Route } from "react-router-dom";

import SideBar from "../components/NavComponents/SidebarComponent";
import NavBar from "../components/NavComponents/NavbarComponent";

import Models from "../components/DashboardComponents/3D-Model";
import Articles from "../components/DashboardComponents/Article";
import Database from "../components/DashboardComponents/Database";
import Disease from "../components/DashboardComponents/Disease";
import Overview from "../components/DashboardComponents/Overview";

class Dashboard extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div>
          <SideBar />
          <div>
            <Switch>
              <Route exact path="/dashboard" component={Overview} />
              <Route exact path="/dashboard/model" component={Models} />
              <Route exact path="/dashboard/disease" component={Disease} />
              <Route exact path="/dashboard/articles" component={Articles} />
              <Route exact path="/dashboard/database" component={Database} />
            </Switch>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Dashboard;
