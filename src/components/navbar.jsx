import React, { Component } from "react";

// class NavBar extends Component {
//   render() {
//     return (
//       <nav className="navbar bg-body-tertiary">
//         <div className="container-fluid">
//           <a className="navbar-brand h1" href="#">
//             Navbar{" "}
//             <span className="badge text-bg-secondary">
//               {this.props.totalCounters}
//             </span>
//           </a>
//         </div>
//       </nav>
//     );
//   }
// }

// export default NavBar;

//stateless functional components
const NavBar = (props) => {
  //methana props dana nisa yata this. eka ain kranw //this.props.totalCounters kiyan eka
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand h1" href="#">
          Navbar{" "}
          <span className="badge text-bg-secondary">{props.totalCounters}</span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
