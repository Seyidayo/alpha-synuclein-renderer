import React from "react";
import { Link } from "react-router-dom";

class Home extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <Link to="/dashboard">Dashboard</Link>
      </React.Fragment>
    );
  }
}

export default Home;
