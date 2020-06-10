import React, { Component } from "react";
import "../App.css";

export default class TaskCard extends Component {
  handleOnComplete = () => {
    this.props.onComplete(this.props.info);
  };
  handleOnDelete = () => {
    this.props.onDelete(this.props.info);
  };

  render() {
    const { info } = this.props;
    return (
      <tr>
        <td>{info.name}</td>
        <td>{info.description}</td>
        <td>{info.category}</td>
        <td>
          <button
            type="button"
            className="complete-btn"
            onClick={this.handleOnComplete}
          >
            Complete
          </button>
          <button
            type="button"
            className="delete-btn"
            onClick={this.handleOnDelete}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}
