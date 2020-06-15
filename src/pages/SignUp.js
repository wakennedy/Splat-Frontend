import React, { Component } from "react";

const URL = "http://localhost:3000/users";
const EMPTYFIELDS = {
  username: "",
  color: "",
  password: "",
};

export default class Signup extends Component {
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
      body: JSON.stringify(this.state.fields),
    })
      .then((resp) => resp.json())
      .then((user) => {
        if (!user.error) {
          this.props.onLogin(user);
          this.props.history.push("/");
        } else {
          this.setState({ error: true });
        }
      })
      .catch();
    this.setState({ fields: EMPTYFIELDS });
  };

  render() {
    const { username, color, password } = this.state.fields;
    return (
      <div className="ui form">
        {this.state.error ? <h1>That username is already taken</h1> : null}
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
            <label>Favorite Color</label>
            <br />
            <input
              name="color"
              placeholder="Enter favorite color"
              value={color}
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
      </div>
    );
  }
}
