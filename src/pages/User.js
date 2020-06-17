import React, { Component } from "react";
// import { useHistory } from "react-router";
// import history from "../history";
import { withRouter } from "react-router-dom";

const URL = "http://localhost:3000/users";
class User extends Component {
  state = {
    fields: {
      username: "",
      color: "",
      password: "",
    },
  };

  componentDidMount() {
    const userId = localStorage.user_id;
    fetch(`${URL}/${userId}`)
      .then((resp) => resp.json())
      .then((user) => {
        this.setState({ fields: user });
      });
  }

  handleChange = (event) => {
    const newFields = {
      ...this.state.fields,
      [event.target.name]: event.target.value,
    };
    this.setState({ fields: newFields });
  };

  handleSubmit = (event) => {
    // debugger;
    event.preventDefault();
    fetch(`${URL}/${this.state.fields.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(this.state.fields),
    })
      .then((resp) => resp.json())
      .catch();
    // debugger;
    // this.props.onColorChange()
    this.props.history.push("/");
  };
  render() {
    const { username, color } = this.state.fields;
    return (
      <div className="wrapper">
        <div className="ui form">
          <h1>{username}</h1>
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
              <div>
                <select name="color" value={color} onChange={this.handleChange}>
                  <option value="#8A1604">Red</option>
                  <option value="#BD7D08">Orange</option>
                  <option value="#0C8A17">Green</option>
                  <option value="#04BD92">Teal</option>
                  <option value="#0E8DBD">Blue</option>
                  <option value="#9F52C8">Purple</option>
                  <option value="#333">Gray</option>
                </select>
              </div>
            </div>

            <div className="form button">
              <button type="submit">Update Profile</button>
            </div>
          </form>
        </div>
        <div>
          <button type="click" onClick={this.props.logout}>
            Logout
          </button>
        </div>
      </div>
    );
  }
}
export default withRouter(User);
