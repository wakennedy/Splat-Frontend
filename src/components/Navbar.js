import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class NavBar extends Component {
  renderLogs = () => {
    // const { user } = this.props;
    let logged = localStorage.getItem("logged_in");
    // eslint-disable-next-line
    if (logged == "true") {
      return (
        <div>
          <div
            className="navbar"
            style={{ backgroundColor: `${this.props.user.color}` }}
          >
            <NavLink id="home" to="/" exact>
              <img id="logo" src="https://i.imgur.com/pK3GhXG.png" alt="Home" />
            </NavLink>
            {/* <a>Splat</a> */}
            <NavLink to="/user" exact style={{ float: "right" }}>
              <img id="user" src="https://i.imgur.com/nr65dXf.png" alt="User" />
            </NavLink>
          </div>
        </div>
      );
    } else {
      return (
        <div className="navbar" style={{ backgroundColor: "#333" }}>
          <NavLink to="/" exact>
            <img id="logo" src="https://i.imgur.com/pK3GhXG.png" alt="Home" />
          </NavLink>

          <NavLink to="/login" exact style={{ float: "right" }}>
            <img id="user" src="https://i.imgur.com/nr65dXf.png" alt="User" />
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
