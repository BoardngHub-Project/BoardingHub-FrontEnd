import React from "react";
import '../CSS/PartTimeMain.css';
import jobImage from '../Assets/PartTimeJob/PartTimeMain.png'


function PartTimeMain() {
    return (
        
        <div className="flex-container">
            
        <div className="left-side">
        <div className="title">
                <h1>   Give and Get the Perfect Job</h1>
            </div>
          <button>Get Job</button>
          <button>Give Job</button>
        </div>
        <div className="right-side">
          <img src={jobImage} height={200} />
        </div>
      </div>
    );

}


export default PartTimeMain;