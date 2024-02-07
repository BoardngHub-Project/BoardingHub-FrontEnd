import React, { useEffect, useState } from "react";
import SliderComponent from "../Component/SliderComponent";
import NavBar from "../Component/NavBar";
import Footer from "../Component/Footer";
import '../CSS/ServiceProviderProfile.css';


const RentVehicleGig = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("") //api request path in backend
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div>
      <NavBar />
      <div className="profile">
        <div>
          <h3>
            <u>Service Provider Profile</u>
          </h3>
        </div>
        <div className="editInfoBtn">
          <button className="editInfo" name="EditInfo">
            Edit Info
          </button>
        </div>
        <div className="profilePic">
          <img
            id="profilePicture"
            src={require("./Assets/profile_user.jpg")}
            height="300px"
            width="300px"
            alt="ProfilePicture"
          />
        </div>
        <div className="infoBox">
          <div className="variableBox">
            <div>
              <b>First Name : </b>
              <input id="firstName" />
            </div>
            <br />
            <div>
              <b>Last Name : </b>
              <input id="lastName" />
            </div>
            <br />
            <div>
              <b>Email : </b>
              <input id="email" />
            </div>
            <br />
            <div>
              <b>Address : </b>
              <input id="address" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <SliderComponent products={products} />
      </div>
      <Footer />
    </div>
  );
};
//   return (
//     <div>
//       <h2>Product List</h2>
//       <SliderComponent products={products} />
//     </div>
//   );

export default RentVehicleGig;
