// import React, { Component } from "react";
// import Counter from "./counter";

// class Counters extends Component {
//   state = {
//     counters: [
//       { id: 1, value: 4 },
//       { id: 2, value: 3 },
//       { id: 3, value: 0 },
//       { id: 4, value: 0 },
//     ],
//   };

//   handleDelete = (counterId) => {
//     // console.log("handleDelete Clicked", counterId);
//     const counters = this.state.counters.filter(
//       (item) => item.id !== counterId
//     );
//     this.setState({ counters });
//   };
//   handleReset = () => {
//     const counters = this.state.counters.map((c) => {
//       c.value = 0;
//       return c;
//     });
//     this.setState({ counters });
//   };
//   render() {
//     return (
//       <div>
//         <button onClick={this.handleReset} className="btn btn-primary btn-sm">
//           Reset
//         </button>

//         {this.state.counters.map((counter) => (
//           <Counter
//             key={counter.id}
//             value={counter.value}
//             id={counter.id}
//             onDelete={this.handleDelete}
//             selected={true}
//           ></Counter>
//         ))}
//       </div>
//     );
//   }
// }

// export default Counters;

import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
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
      <div>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={this.handleReset2}
        >
          Reset
        </button>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            value={counter.value}
            id={counter.id}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            counter={counter}
            onReset={this.handleReset}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
