import React from "react";
import '../CSS/GetJob.css';
import getjobImage from '../Assets/PartTimeJob/GetJob.png'
import Footer from "../Component/Footer";
import NavigationBar from "../Component/NavigationBar";


function GetJob() {
    return (
      <div className="body">
        <div className="flex-container">
          <NavigationBar/>

        <div className="left-side">
        <div className="titleGetJob">
                <h1><b>Get Your Job</b></h1>
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