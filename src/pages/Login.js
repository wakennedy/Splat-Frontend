import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const URL = "http://localhost:3000/auth";
const EMPTYFIELDS = {
  username: "",
  password: "",
};

export default class Login extends Component {
  state = {
    fields: EMPTYFIELDS,
    error: false,
  };

  handleChange = (event) => {
    const newFields = {
      ...this.state.fields,
      [event.target.name]: event.target.value,
    };
    this.setState({ fields: newFields });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        username: this.state.fields.username,
        // password: this.state.password
      }),
    })
      .then((resp) => resp.json())
      .then((user) => {
        if (!user.error) {
          this.props.onLogin(user);
          this.props.history.push("/");
        } else {
          this.setState({ error: true });
        }
      });
    this.setState({ fields: EMPTYFIELDS });
  };

  render() {
    const { username, password } = this.state.fields;
    return (
      <div className="login wrapper">
        <div className="ui form">
          {this.state.error ? (
            <h1>Couldn't find that username. Please try again.</h1>
          ) : null}
          <form onSubmit={this.handleSubmit}>
            <div className="ui field">
              <label>Username</label>
              <br />
              <input
                name="username"
                placeholder="Enter username"
                value={username}
                onChange={this.handleChange}
              />
            </div>
            <div className="ui field">
              <label>Password</label>
              <br />
              <input
                name="password"
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={this.handleChange}
              />
            </div>
            <div className="form button">
              <button type="submit">Login</button>
            </div>
          </form>
          <NavLink to="/signup" exact>
            Sign Up
          </NavLink>
        </div>
      </div>
    );
  }
}
