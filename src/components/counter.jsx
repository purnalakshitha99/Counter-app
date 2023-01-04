import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tag: ["tag1", "tag2", "tag3"],
    //tag: [],
  };

  // styles = {
  //   fontSize: 12,
  //   fontWeight: "bold",
  // };

  renderTags() {
    if (this.state.tag.length === 0) return <p>there are no tags!</p>;
    return (
      <ul>
        {this.state.tag.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {this.state.tag.length === 0 && "please create new tags!"}
        {this.renderTags()}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 text-bg-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
