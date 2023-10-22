import React from "react";
import '../CSS/PartTimeMain.css';
import jobImage from '../Assets/PartTimeJob/PartTimeMain.png'


function PartTimeMain() {
    return (
        
        <div className="flex-container">
        <div className="left-side">
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



