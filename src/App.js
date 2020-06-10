import React, { Component } from "react";
import "./App.css";
import "./css/taskTable.css";
import Navbar from "./components/Navbar.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import User from "./pages/User";
import NewTask from "./pages/NewTask";

const TASKBASEURL = "http://localhost:3000/tasks";
const USERBASEURL = "http://localhost:3000/users";

class App extends Component {
  state = {
    tasks: [],
    user: {},
  };
  componentDidMount() {
    fetch(TASKBASEURL)
      .then((res) => res.json())
      // .then((res) => console.log(res));
      .then((data) => {
        console.log(data);
        this.setState({
          tasks: data,
        });
      });
    fetch(USERBASEURL)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data[0]);
        this.setState({
          user: data[0],
        });
      });
  }

  handleComplete = (info) => {
    let key = info.id;
    this.setState((prevState) => ({
      tasks: prevState.tasks.map((el) =>
        el.id === key ? { ...el, category: "complete" } : el
      ),
    }));
    // console.log("handleComplete");
  };

  handleChange = (task) => {
    this.setState({
      tasks: [...this.state.tasks, { ...task }],
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();

    let newTask = {};
    newTask.name = e.target.name.value;
    newTask.description = e.target.description.value;
    newTask.category = e.target.category.value;

    // this.setState({
    //   tasks: [...this.state.tasks, { ...newTask }],
    // });

    // build new task here. update state with instanceof then continue with fetch
    fetch(TASKBASEURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        task: newTask,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          tasks: [...this.state.tasks, { ...data }],
        });
      });
  };

  render() {
    return (
      <Router>
        <Navbar user={this.state.user} />
        <div className="Main">
          <Route
            exact
            path="/"
            render={() => (
              <Home
                tasks={this.state.tasks}
                user={this.state.user}
                onComplete={this.handleComplete}
                onSubmit={this.handleSubmit}
              />
            )}
          />
          <Route
            exact
            path="/user"
            render={() => (
              <User user={this.state.user} tasks={this.state.tasks} />
            )}
          />
          <Route
            exact
            path="/newtask"
            render={() => (
              <NewTask
                user={this.state.user}
                tasks={this.state.tasks}
                count={this.state.tasks.length}
                onSubmit={this.handleSubmit}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
