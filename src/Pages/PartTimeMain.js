import React from "react";
import '../CSS/PartTimeMain.css';
import jobImage from '../Assets/PartTimeJob/PartTimeMain.png';
import Footer from '../Component/Footer';
import NavBar from '../Component/NavBar';
//import { Link } from "react-router-dom";

function PartTimeMain() {
    return (
        <div>
        <NavBar/>
          <div className="flex-container">
            <div className="left-side">
            <div className="title">
                <h1>   Give and Get the Perfect Job</h1>
           </div>

           {/* <Link to="/get-job"> */}
                <button>Get Job</button>
              {/* </Link> */}
              <button>Give Job</button>
            </div>
            <div className="right-side">
              <img src={jobImage} height={200} />
            </div>
          </div>
          <Footer/>
        </div>
    );

}


export default PartTimeMain;