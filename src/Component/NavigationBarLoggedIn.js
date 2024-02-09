import { Component } from "react";
import "./NavbarStyles.css";
import "../CSS/NavigationBarLoggedIn.css";
import { Link } from "react-router-dom";



class NavigationBarLoggedIn extends Component {
    render() {
        return (
            <div>
                
                    <nav className="NavbarItems">
                        <div id="nav-logo">
                            <h1><b>BoardingHub</b></h1>
                        </div>

                        <div id="nav-options">
                            <span>
                                {/* <button className="nav-links"> Services</button> */}
                                <Link to="/AboutUs" className="nav-links">About Us</Link> 
                            </span>
                            <span>
                                <Link to="/AboutUs" className="nav-links">About Us</Link>
                            </span>
                            <span>
                                <Link to="/ContactUs" className="nav-links">Contact Us</Link>
                            </span>
                            <span>
                                <Link to="/" className="nav-links">Logout</Link>
                            </span>
                            

                        </div>
                    </nav>
                
            </div>

        );
    }
}
    
    export default NavigationBarLoggedIn;