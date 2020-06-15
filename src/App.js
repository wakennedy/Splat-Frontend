import React, { Component } from "react";
import "./App.css";
import "./css/taskTable.css";
import Navbar from "./components/Navbar.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import User from "./pages/User";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

const TASKBASEURL = "http://localhost:3000/tasks";
const USERBASEURL = "http://localhost:3000/users";

class App extends Component {
  state = {
    tasks: [],
    user: {},
  };
  componentDidMount() {
    const userId = localStorage.user_id;
    // console.log(localStorage);

    fetch(TASKBASEURL)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          tasks: data,
        });
      });
    fetch(`${USERBASEURL}/${userId}`)
      .then((res) => res.json())
      // .then((data) => console.log(data))
      .then((data) => {
        this.setState({
          user: data,
        });
      });
  }

  login = (loginuser) => {
    // this.setState({ currentUser: user })
    localStorage.setItem("user_id", loginuser.id);
    this.setState({ user: loginuser });
  };
  handleComplete = (info) => {
    let key = info.id;
    this.setState((prevState) => ({
      tasks: prevState.tasks.map((el) =>
        el.id === key ? { ...el, category: "complete" } : el
      ),
    }));
  };
  handleSubmit = (e) => {
    e.preventDefault();

    let newTask = {};
    newTask.name = e.target.name.value;
    newTask.description = e.target.description.value;
    newTask.category = e.target.category.value;

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

  handleDelete = (info) => {
    let tasksarray = [...this.state.tasks];
    let index = tasksarray.indexOf(info);
    tasksarray.splice(index, 1);

    // fetch(TASKBASEURL, {
    //   method: "DELETE",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json",
    //   },
    //   body: JSON.stringify({
    //     task: info,
    //   }),
    // });
    this.setState({
      tasks: tasksarray,
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
                onDelete={this.handleDelete}
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
            path="/signup"
            render={(props) => <SignUp {...props} onLogin={this.login} />}
          />
          <Route
            exact
            path="/login"
            render={(props) => <Login {...props} onLogin={this.login} />}
          />
        </div>
      </Router>
    );
  }
}

export default App;
