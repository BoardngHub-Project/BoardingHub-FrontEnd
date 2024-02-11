import React from "react";
import rent from "../Assets/Transpottion/rent car.webp";
import hire from "../Assets/Transpottion/taxi.jpeg";
import "../CSS/transpotation.css";
import NavigationBar from "../Component/NavigationBar";
import Footer from "../Component/Footer";

function TranspotationLanding() {
  return (
    <div>
      <NavigationBar/>
    <div className="app-container">
      <button className="left-button">
        <img src={rent} alt="Left Button" class="image" />
      </button>


      <button className="right-button">
        <img src={hire} alt="Right Button" class="image" />
      </button>
    </div>
    <Footer/>
    </div>
  );
}

export default TranspotationLanding;
