import React from "react";
import rent from "../Assets/Transpottion/rent car.webp";
import hire from "../Assets/Transpottion/taxi.jpeg";
import "../CSS/transpotation.css";
import NavigationBar from "../Component/NavigationBar";
import Footer from "../Component/Footer";
import { useNavigate } from "react-router-dom";

function TranspotationLanding() {
  // const navigate = useNavigate();
  return (
    <div>

      <NavigationBar/>
    <div className="app-container">
      <button className="left-button">


        <img src={rent} alt="Left Button" class="image" />
      </button>
    </div>

    <div class ="col">      
        <button class="right-button">
        <img src={hire} alt="Right Button" class="image" />
        </button>
    </div>
    {/* onClick={()=> navigate('/transpotationhire')} Need to use navigate*/}

    </div>
    {/* <Footer/> */}
    </div>
  );
}

export default TranspotationLanding;
