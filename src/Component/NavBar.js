import { Component } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="nav-logo">BoardingHib</h1>
        <ul className="menu-items">
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default NavBar;
