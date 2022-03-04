import React, { Component } from "react";
class Counter extends Component {
  render() {
    return (
      <div>
        <span>{this.formatCount()}</span>
        <button onClick={() => this.props.onIncrement(this.props.counter)}>
          increment
        </button>
        <button onClick={() => this.props.onDelete(this.props.counter.id)}>
          Delete
        </button>
      </div>
    );
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "zero" : value;
  }
}

export default Counter;
