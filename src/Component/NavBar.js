import { Component } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";

class NavBar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="nav-logo"><b>BoardingHub</b></h1>
        <div className="icon-menu" onClick={this.handleClick}>
          <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={this.state.clicked ? "menu-items active" : "menu-items"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
          <button>Login</button>
        </ul>
      </nav>
    );
  }
}

export default NavBar;



// import React,{useState} from 'react';

// import { Link } from 'react-router-dom';
// import "./NavbarStyles.css"; // Import your Navbar styles if you have any



// const NavBar = () => {

//   const [menuVisible, setMenuVisible] = useState(false);

//   const toggleMenu = () => {
//     setMenuVisible(!menuVisible);
//   };
 
//   return (
//     <nav className="navbar">

//       <div className="navbar-container">
//         <Link to="/" className="navbar-logo">
//         <h1 className="nav-logo"><b>BoardingHub</b></h1>
//         </Link>

//         <ul className="nav-menu">

//           <li className="nav-item">
//             <Link to="/" className="nav-links">
//               Services 
//             </Link>

//           </li>
//           <li className="nav-item">
//             <Link to="/Services" className="nav-links">
//               Services
//             </Link>
//           </li>

//           <li className="nav-item">
//             <Link to="/ContactUs" className="nav-links">
//               ContactUs
//             </Link>
//           </li>

//           <li className='nav-item'>
//             <Link to="/AboutUs"  className="nav-links">
//               AboutUs 
//               </Link>
//           </li>

//           <li className="nav-item">
//             <Link to="/Login" className="nav-links">
//               Login
//             </Link>
//           </li>
 
//         </ul>
//         </div>
      
//       </nav>
//     );
//   };
  
//   export default NavBar;