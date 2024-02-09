import { Component } from "react";
import "./NavbarStyles.css";
import "../CSS/NavigationBar.css";
import { Link } from "react-router-dom";



class NavigationBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            showItems : false
        };
    }

    toggleDown = () =>{
        this.setState({showItems : !this.state.showItems})
    };

    render() {
        return (
            <div>
                
                    <nav className="NavbarItems">
                        <div id="nav-logo">
                            <h1><b>BoardingHub</b></h1>
                        </div>

                        <div id="nav-options">

                            <span>
                                <button className="nav-links" onClick={this.toggleDown}> Services</button>
                                {this.state.showItems && (
                                    <div className="dropdown-content">

                                    <Link to="/TranspotationLanding" className="dropdown-links">Service 1</Link>

                                    <Link to="/MealProvider1" className="dropdown-links">Service 2</Link>

                                   <Link to="/Service3" className="dropdown-links">Service 3</Link> 

                                </div>
                                )}
                                
                            </span>
                            
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