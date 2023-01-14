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
  render() {
    return (
      <div>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={this.props.onReset2}
        >
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            value={counter.value}
            id={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            counter={counter}
            onReset={this.props.onReset}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
