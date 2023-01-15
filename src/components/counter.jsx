import React, { Component } from "react";
import App from "../App";

class Counter extends Component {
  // styles = {
  //   fontSize: 12,
  //   fontWeight: "bold",
  // };

  renderTags() {
    if (this.state.tag.length === 0) return <p>there are no tags!</p>;
    // return (
    //   <ul>
    //     {this.state.tag.map((tag) => (
    //       <li key={tag}>{tag}</li>
    //     ))}
    //   </ul>
    // );
  }

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // handleIncrement = () => {
  //   this.setState({ value: this.state.value + 1 });
  // };

  // handleDecrement = (products) => {
  //   this.setState({ value: this.state.value - 1 });
  // };

  // handleReset = (products) => {
  //   console.log(products);
  //   this.setState({ value: (this.state.value = 0) });
  // };

  render() {
    console.log("counter-Renderd");
    return (
      <div>
        <h4>Counter #{this.props.id}</h4>

        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-primary btn-sm m-2"
        >
          Decrement
        </button>
        {/* {this.state.tag.length === 0 && "please create new tags!"}
        {this.renderTags()} */}
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        <button
          onClick={() => this.props.onReset(this.props.counter)}
          className="btn btn-danger btn-sm m-2"
        >
          Reset
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 text-bg-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
