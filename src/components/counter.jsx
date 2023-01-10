import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
    tag: ["tag1", "tag2", "tag3"],
    //tag: [],
  };

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

  handleIncrement = (products) => {
    console.log(products);
    this.setState({ value: this.state.value + 1 });
  };

  handleDecrement = (products) => {
    console.log(products);
    this.setState({ value: this.state.value - 1 });
  };

  handleReset = (products) => {
    console.log(products);
    this.setState({ value: (this.state.value = 0) });
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <h4>Counter #{this.props.id}</h4>

        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={this.handleDecrement}
          className="btn btn-primary btn-sm m-2"
        >
          Decrement
        </button>
        {this.state.tag.length === 0 && "please create new tags!"}
        {this.renderTags()}
        <button
          onClick={() => this.props.onDelete(this.props.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 text-bg-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
