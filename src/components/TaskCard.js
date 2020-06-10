import React, { Component } from "react";
import "../App.css";

export default class TaskCard extends Component {
  handleOnComplete = () => {
    this.props.onComplete(this.props.info);
  };

  render() {
    const { info } = this.props;
    return (
      <tr>
        <td>{info.name}</td>
        <td>{info.description}</td>
        <td>{info.category}</td>
        <td>
          <button type="button" className="btn" onClick={this.handleOnComplete}>
            Complete
          </button>
        </td>
      </tr>
    );
  }
}
