import React from "react";

export class Overview extends React.Component {
  render() {
    return (
      <ul>
        {this.props.arr.map((task) => {
          return (
            <li key={task.id} id={task.id}>
              {this.props.arr.indexOf(task) + 1}-<span>{task.tittle}</span>{" "}
              <input style={{ display: "none" }} />
              <button onClick={this.props.deleteItem}>Delete</button>
              <button onClick={this.props.editItem} className="edit-button">
                Edit
              </button>
              <button
                className="confirm-button"
                onClick={this.props.confirmEdit}
                style={{ display: "none" }}
              >
                Confirm
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}
