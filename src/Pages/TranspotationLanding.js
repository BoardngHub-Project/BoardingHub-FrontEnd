import React from "react";
import rent from "../Assets/Transpottion/rent car.webp";
import hire from "../Assets/Transpottion/taxi.jpeg";
import "../CSS/transpotation.css";
import NavBar from "../Component/NavBar";

function TranspotationLanding() {
  return (
    <div className="app-container">
      <button className="left-button">
        <img src={rent} alt="Left Button" class="image" />
      </button>

      {/* Your main content goes here */}

      <button className="right-button">
        <img src={hire} alt="Right Button" class="image" />
      </button>
    </div>
  );
}

export default TranspotationLanding;
