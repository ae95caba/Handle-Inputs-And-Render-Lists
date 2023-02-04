import React from "react";

export class Overview extends React.Component {
  render() {
    return (
      <ul>
        {this.props.arr.map((value) => {
          return (
            <li key={value}>
              {this.props.arr.indexOf(value) + 1}-
              <span id={`${value}-span`}>{value}</span>{" "}
              <input style={{ display: "none" }} id={`${value}-input`} />
              <button id={value} onClick={this.props.deleteItem}>
                Delete
              </button>
              <button
                onClick={this.props.editItem}
                className={value}
                id={`${value}-edit-button`}
              >
                Edit
              </button>
              <button
                className={value}
                onClick={this.props.confirmEdit}
                style={{ display: "none" }}
                id={`${value}-confirm-button`}
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
