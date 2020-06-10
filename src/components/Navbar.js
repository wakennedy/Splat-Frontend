import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <NavLink to="/" exact>
          Home
        </NavLink>
        <NavLink to="/user" exact>
          {this.props.user.username}
        </NavLink>
      </div>
    );
  }
}
