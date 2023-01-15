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

//uda class ekak widihata gaththa eka yata eke widihata stateless functional components ekk widihata use karann puluwan
//
//
//
//
//
//

//stateless functional components
const NavBar = ({ totalCounters }) => {
  console.log("NavBar-Rendered");

  //methana props dana nisa yata this. eka ain kranw //this.props.totalCounters kiyan eka
  //methana awasya eka warahan athule dapuwam aya hamathanama this.this. use karann one na ona eka ()athule dammama athi
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand h1" href="#">
          Navbar{" "}
          <span className="badge text-bg-secondary">{totalCounters}</span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
