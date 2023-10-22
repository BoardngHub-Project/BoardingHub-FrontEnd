

import React from "react";
import '../CSS/GetJob.css';
import NavBar from "../Component/NavBar";
import Footer from "../Component/Footer";



function GetJob() {
    return (
        <div>
          <NavBar/>
          <div className="flex-container">

            <div className="left-side">
              <br/><br/><br/><br/><br/><br/>
              <div className="title">
                      <h1>Choose Your Job</h1>
              </div>
              
                <button>Online</button>
                <button>Give and Take</button>
                <button>Go To Place</button>
            </div>
        
          </div>
          <Footer/>
        </div>
    );

}


export default GetJob;

