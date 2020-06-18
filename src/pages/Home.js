import React, { Component, Fragment } from "react";
import TaskCard from "../components/TaskCard.js";
import "../App.css";
import NewTask from "../pages/NewTask";

export default class Home extends Component {
  renderIncompleteTasks = () => {
    const { tasks } = this.props;
    // debugger;
    // console.log(this.props);
    return tasks.map((task) => (
      <TaskCard
        key={task.id}
        info={task}
        onComplete={this.props.onComplete}
        onDelete={this.props.onDelete}
      />
    ));
  };
  render() {
    // this.forceUpdate();
    return (
      <Fragment>
        <div className="wrapper">
          <div className="task-table">
            <h1>Hello, {this.props.user.username}!</h1>
            <h2>You have {this.props.tasks.length} tasks.</h2>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Category</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>{this.renderIncompleteTasks()}</tbody>
            </table>
          </div>
          <br />
          <br />
          <NewTask onSubmit={this.props.onSubmit} user={this.props.user} />
        </div>
      </Fragment>
    );
  }
}
