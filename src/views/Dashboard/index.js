import React from "react";
import PropTypes from "prop-types";
import { Switch, Route } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import Navigation from "../../components/NavComponents/NavbarComponent";

// import Models from "../components/DashboardComponents/3D-Model";
import Article from "../../components/DashboardComponents/Article";
// import Database from "../components/DashboardComponents/Database";
// import Disease from "../components/DashboardComponents/Disease";
// import Overview from "../components/DashboardComponents/Overview";

const styles = theme => ({
  root: {
    display: "flex"
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: "100vh",
    overflow: "auto"
  }
});
class Dashboard extends React.PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <Navigation />
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Switch>
            {/* <Route exact path="/dashboard" component={Overview} /> */}
            {/* <Route exact path="/dashboard/model" component={Models} /> */}
            {/* <Route exact path="/dashboard/disease" component={Disease} /> */}
            <Route exact path="/dashboard/articles" component={Article} />
            {/* <Route exact path="/dashboard/database" component={Database} /> */}
          </Switch>
        </main>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Dashboard);
