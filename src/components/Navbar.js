import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class NavBar extends Component {
  renderLogs = () => {
    const { user } = this.props;
    let logged = localStorage.getItem("logged_in");
    // eslint-disable-next-line
    if (logged == "true") {
      return (
        <div
          className="navbar"
          style={{ backgroundColor: `${this.props.user.color}` }}
        >
          <NavLink to="/" exact>
            Home
          </NavLink>

          <NavLink to="/user" exact style={{ float: "right" }}>
            {user.username}
          </NavLink>
        </div>
      );
    } else {
      return (
        <div className="navbar" style={{ backgroundColor: "#333" }}>
          <NavLink to="/" exact>
            Home
          </NavLink>

          <NavLink to="/login" exact style={{ float: "right" }}>
            Login
          </NavLink>
        </div>
      );
    }
  };

  render() {
    return (
      <div>{this.renderLogs()}</div>
      //   <div
      //     className="navbar"
      //     style={{ backgroundColor: `${this.props.user.color}` }}
      //   >
      //     <NavLink to="/" exact>
      //       Home
      //     </NavLink>
      //     {this.renderLogs()}
      //     {/* <NavLink to="/user" exact>
      //       {this.props.user.username}
      //     </NavLink>
      //     <NavLink to="/login" exact style={{ float: "right" }}>
      //       Login
      //     </NavLink> */}
      //   </div>
    );
  }
}
