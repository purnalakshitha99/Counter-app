import React, { Component } from "react";

import "./App.css";
import Counters from "./components/counters";
import NavBar from "./components/navbar";
import Counter from "./components/counter";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 3 },
      { id: 3, value: 2 },
      { id: 4, value: 0 },
    ],
  };

  handleDelete = (counterId) => {
    console.log(counterId);
    const counters = this.state.counters.filter(
      (item) => item.id !== counterId
    );
    this.setState({ counters });
  };

  handleReset2 = () => {
    const counters = this.state.counters.map((item) => {
      item.value = 0;
      return item;
    });
    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    console.log(this.state.counters[index]);
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    console.log(this.state.counters[index]);
    this.setState({ counters });
  };

  handleReset = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value = 0;
    console.log(this.state.counters[index]);
    this.setState({ counters });
  };
  render() {
    return (
      <>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onReset={this.handleReset}
            counters={this.state.counters}
            onReset2={this.handleReset2}
          />
        </main>
      </>
    );
  }
}

export default App;
