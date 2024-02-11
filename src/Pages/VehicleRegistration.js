import axios from "axios";
import "../CSS/VehicleRegistration.css";
import ImageUploader from "../Component/ImageUploader";
import React, { useState } from "react";

export const VehicleRegistration = () => {
  const [vehicletype, setVehicletype] = useState("");
  const [vehiclemake, setVehiclemake] = useState("");
  const [priceperday, setPriceperday] = useState("");
  const [availability, setAvailability] = useState("");
//   const [images, setImages] = useState([]);
  const [description, setDescription] = useState("");

//   const handleImageUpload = (newImages) => {
//     setImages((prevImages) => [...prevImages, ...newImages]);
//   };

  // const handleChange = (event) => {
  //     setAvailability(event.target.checked);
  //   };

  async function save(event) {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/vehicle/create",
        {
          vehicleType: vehicletype,
          vehicleMake: vehiclemake,
          pricePerDay: priceperday,
          availability: availability,
        }
      );
      console.log(response);
      alert("Vehicle Register Succesfuly")
    } catch (error) {
      if (!error.response) {
        // network error

        console.error(
          "Network Error: Please check your internet connection and try again."
        );
      } else if (error.response.status === 400) {
        // bad request error

        console.error(
          "Bad Request Error: Please check your request data and try again."
        );
      } else if (error.response.status === 500) {
        // server error

        console.error("Server Error: Please try again later.");
      } else {
        // other error

        console.error("An error occurred: " + error.message);
      }
    }
  }
  return (
    <div class="container">
      <div class="sub-container1 ">
        <div class="col">
          <label for="vehicletype" class="form-label ">
            Vehicle Type
          </label>
          <input
            type="text"
            class="form-control"
            id="vehicletype"
            value={vehicletype}
            onChange={(event) => {
              setVehicletype(event.target.value);
            }}
          />
        </div>
        <div class="col">
          <label for="vehiclemake" class="form-label ">
            Vehicle Make
          </label>
          <input
            type="text"
            class="form-control"
            id="vehiclemake"
            value={vehiclemake}
            onChange={(event) => {
              setVehiclemake(event.target.value);
            }}
          />
        </div>
        <div class="col">
          <label for="priceperday" class="form-label ">
            Price per Day
          </label>
          <input
            type="text"
            class="form-control"
            id="priceperday"
            value={priceperday}
            onChange={(event) => {
              setPriceperday(event.target.value);
            }}
          />
        </div>

        <div class="col">
          <label for="availability" class="form-label ">
            Vehicle Available
          </label>
          <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="availabilityYes"
              value="yes"
              checked={availability === "yes"}
              onChange={(event) => setAvailability(event.target.value)}
            />

            <label for="availabilityYes" class="form-check-label">
              Yes
            </label>
          </div>

          <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="availabilityNo"
              value="no"
              checked={availability === "no"}
              onChange={(event) => setAvailability(event.target.value)}
            />

            <label for="availabilityNo" class="form-check-label">
              No
            </label>
          </div>
        </div>

        {/* <div class="col">
          <ImageUploader onUpload={handleImageUpload} />
        </div>
            */}
        <div class="col">
          <label for="description" class="form-label ">
            Description
          </label>
          <input
            type="textarea"
            class="form-control"
            id="description"
            value={description}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
        </div> 

        <div class="col-12 d-flex justify-content-center">
          <button
            class="btn btn-primary btn-block"
            type="submit"
            onClick={save}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};
