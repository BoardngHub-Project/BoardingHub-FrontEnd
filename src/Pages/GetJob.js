

import React from "react";
import '../CSS/GetJob.css';
import getjobImage from '../Assets/PartTimeJob/GetJob.png'


function GetJob() {
    return (
        
        <div className="flex-container">

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
    );

}


export default GetJob;



