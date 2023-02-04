import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Overview } from "./components/Overview";
import uniqid from "uniqid";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [] };
  }

  addTask = (e) => {
    this.setState((prevState) => ({
      tasks: [
        ...this.state.tasks,
        { tittle: document.getElementById("input").value, id: uniqid() },
      ],
    }));
  };

  preventDefault(e) {
    console.log("submit prevented");
    e.preventDefault();
    document.getElementById("input").value = "";
  }

  deleteItem = (e) => {
    const taskId = e.target.parentElement.id;

    let arr = this.state.tasks;
    const index = arr.findIndex((x) => x.id === taskId);

    arr.splice(index, 1);
    this.setState({ tasks: arr });
  };

  editItem = (e) => {
    const taskId = e.target.parentElement.id;
    console.log(document.querySelector(`#${taskId} span`));
    document.querySelector(`#${taskId} span`).style.display = "none";
    document.querySelector(`#${taskId} input`).style.display = "inline";
    document.querySelector(`#${taskId} .confirm-button`).style.display =
      "inline";
    e.target.style.display = "none";
  };

  confirmEdit = (e) => {
    const taskId = e.target.parentElement.id;
    document.querySelector(`#${taskId} span`).style.display = "inline";
    document.querySelector(`#${taskId} input`).style.display = "none";
    document.querySelector(`#${taskId} .edit-button`).style.display = "inline";

    e.target.style.display = "none";
    /////

    const arr = this.state.tasks;
    const index = arr.findIndex((x) => x.id === taskId);
    arr[index].tittle = document.querySelector(`#${taskId} input`).value;

    this.setState({ tasks: arr });
  };

  render() {
    console.log(this.state.tasks);

    return (
      <div className="App">
        <form action="" onSubmit={this.preventDefault}>
          <label>Tarea</label>
          <input id="input" />
          <button onClick={this.addTask}>Add</button>
        </form>

        <Overview
          arr={this.state.tasks}
          deleteItem={this.deleteItem}
          editItem={this.editItem}
          confirmEdit={this.confirmEdit}
        />
      </div>
    );
  }
}

export default App;
