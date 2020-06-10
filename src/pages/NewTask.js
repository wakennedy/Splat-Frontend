import React, { Component, Fragment } from "react";

export default class NewTask extends Component {
  handleSubmit = (event) => {};
  render() {
    return (
      <Fragment>
        <form onSubmit={(e) => this.props.onSubmit(e)}>
          <h1>Hello {this.props.user.username}</h1>
          <p>Enter your Task Name:</p>
          <input type="text" name="name" />
          <p>Enter your Task Description:</p>
          <input type="text" name="description" />
          <p>Enter your Task Category:</p>
          <input type="text" name="category" />
          <br></br>
          <input
            type="submit"
            name="submit"
            value="Create New Task"
            className="submit"
          />
        </form>
      </Fragment>
    );
  }
}
