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
    let arr = this.state.tasks;
    const index = arr.indexOf(e.target.id);
    arr.splice(index, 1);
    this.setState({ tasks: arr });
  };

  editItem = (e) => {
    document.getElementById(`${e.target.className}-span`).style.display =
      "none";
    document.getElementById(`${e.target.className}-input`).style.display =
      "inline";
    document.getElementById(
      `${e.target.className}-confirm-button`
    ).style.display = "inline";
    e.target.style.display = "none";
  };

  confirmEdit = (e) => {
    document.getElementById(`${e.target.className}-span`).style.display =
      "inline";
    document.getElementById(`${e.target.className}-input`).style.display =
      "none";
    document.getElementById(`${e.target.className}-edit-button`).style.display =
      "inline";
    e.target.style.display = "none";
    /////
    const index = this.state.tasks.indexOf(e.target.className);
    const arr = this.state.tasks;
    arr[index] = document.getElementById(`${e.target.className}-input`).value;

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
