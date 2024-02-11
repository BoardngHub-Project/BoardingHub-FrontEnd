import React, { useEffect, useState } from "react";
import NavBar from "../Component/NavBar";
import Footer from "../Component/Footer";
import '../CSS/ServiceProviderProfile.css';
import axios from "axios";


const RentVehicleGig = () => {
  const [vehicles, setVehicles] = useState([]);
  const [user,setUser] = useState();

  // useEffect(() => {
  //   axios
  //     .get("",{
  //     headers: {
  //       'Access-Control-Allow-Origin': '*',
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //     .then((response) => {
  //       setVehicles(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error: ", error);
  //     });
  // }, []);

    useEffect(() => {
      axios.get("http://localhost:8080/api/service-provider/{serviceProviderType}")
    })
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error("Error :",error);
      });
  return (
    <div>
      <NavBar />
      <div className="profile">
        <div>
          <h3>
            <u>Transportation Provider Profile Page</u>
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
                {user.firstname}
            </div>
            <br />
            <div>
              <b>Last Name : </b>
                {user.lastname}
            </div>
            <br />
            <div>
              <b>Email : </b>
                {user.email}
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
      {/* {vehicles.map((vehicle) => (
        <div className="card" key={vehicle.vehicleId}>
          <img
            className="card-img-top"
            src={vehicle.image}
            alt={vehicle.vehicleType}
          />

          <div className="card-body">
            <h5 className="card-title">{vehicle.vehicleType}</h5>

            <p className="card-text">{vehicle.description}</p>

            <p className="card-text">
              <strong>Price per day:</strong> ${vehicle.pricePerDay}
            </p>

            <p className="card-text">
              <strong>Availability:</strong> {vehicle.availability}
            </p>

            <p className="card-text">
              <strong>Vehicle make:</strong> {vehicle.vehicleMake}
            </p>
          </div>
        </div>
      ))} */}
      </div>
      <Footer />
    </div>
  );
};


export default RentVehicleGig;
