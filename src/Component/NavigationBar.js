import { Component } from "react";
import "./NavbarStyles.css";
import "../CSS/NavigationBar.css";
import { Link } from "react-router-dom";



class NavigationBar extends Component {
    render() {
        return (
            <div>
                
                    <nav className="NavbarItems">
                        <div id="nav-logo">
                            <h1><b>BoardingHub</b></h1>
                        </div>

                        <div id="nav-options">
                            
                            <span>
                                <Link to="/" className="nav-links">Home</Link>
                            </span>
                            <span>
                                <Link to="/AboutUs" className="nav-links">About Us</Link>
                            </span>
                            <span>
                                <Link to="/ContactUs" className="nav-links">Contact Us</Link>
                            </span>
                            <span>
                                <Link to="/Login" className="nav-links">Login</Link>
                            </span>
                            

                        </div>
                    </nav>
                
            </div>

        );
    }
}
    
    export default NavigationBar;