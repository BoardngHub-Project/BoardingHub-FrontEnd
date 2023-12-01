

import React from "react";
import '../CSS/GetJob.css';
import getjobImage from '../Assets/PartTimeJob/GetJob.png'
import Footer from "../Component/Footer";
import NavBar from "../Component/NavBar";


function GetJob() {
    return (
      <div className="body">
        <div className="flex-container">
          <NavBar/>

        <div className="left-side">
        <div className="title">
                <h1>Get Your Job</h1>
            </div>
          <button>Part Time</button>
          <button>Full Time</button>
        </div>
        <div className="right-side">
          <img src={getjobImage} height={200} />
        </div>

       
      </div>
      <div> <Footer/></div>
      </div>
    );

}


export default GetJob;