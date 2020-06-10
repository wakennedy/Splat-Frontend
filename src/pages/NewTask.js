import React, { Component, Fragment } from "react";
import "../App.css";
export default class NewTask extends Component {
  handleSubmit = (event) => {};
  render() {
    return (
      <Fragment>
        <div className="task-form">
          <form onSubmit={(e) => this.props.onSubmit(e)}>
            <h1>Create a New Task</h1>
            <p>Name:</p>
            <input type="text" name="name" />
            <p>Description:</p>
            <input type="text" name="description" />
            <p>Category:</p>
            <input type="text" name="category" />
            <br></br>
            <input
              type="submit"
              name="submit"
              value="Create New Task"
              className="submit"
            />
          </form>
        </div>
      </Fragment>
    );
  }
}
