import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../CSS/hire.css";
import passenger from "../Assets/Transpottion/passenger.avif";
import NavBar from "../Component/NavBar";

function Transpotationhire() {
  const [formData, setFormData] = useState({
    currentLocation: "",
    van: false,
    car: false,
    bike: false,
    threeWheel: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  //handlling form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", formData);
  };

  const handleReset = () => {
    setFormData({
      currentLocation: "",
      van: false,
      car: false,
      bike: false,
      threeWheel: false,
    });
  };

  return (
    <div class="container1">
      <NavBar />
      <div class="container text-center">
        <div class="row">
          <div class="col">
            <img src={passenger} alt="...." class="image" />
          </div>

          <div class="col">
            <form onSubmit={handleSubmit}>
              <label>
                Current Location:
                <input
                  type="text"
                  name="currentLocation"
                  value={formData.currentLocation}
                  onChange={handleChange}
                  class="currentLocation"
                />
              </label>

              <label class="check">
                <input
                  type="checkbox"
                  name="van"
                  checked={formData.van}
                  onChange={handleChange}
                />
                Van
              </label>

              <label class="check">
                <input
                  type="checkbox"
                  name="car"
                  checked={formData.car}
                  onChange={handleChange}
                />
                Car
              </label>

              <label class="check">
                <input
                  type="checkbox"
                  name="bike"
                  checked={formData.bike}
                  onChange={handleChange}
                />
                Bike
              </label>

              <label class="check">
                <input
                  type="checkbox"
                  name="threeWheel"
                  checked={formData.threeWheel}
                  onChange={handleChange}
                />
                Three Wheel
              </label>
              <div class="container overflow-hidden text-center">
                <div class="row gx-5">
                  <div class="col">
                    <div class="p-3">
                      <button type="submit">Filter</button>
                    </div>
                  </div>
                  <div class="col">
                    <div class="p-3">
                      <button type="button" onClick={handleReset}>
                        Reset
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Vehicle</th>
      <th scope="col">Driver Name</th>
      <th scope="col">Rating</th>
      <th scope="col">Contact Number</th>
    </tr>
  </thead>

      </table>
      </div>
    </div>
  );
}

export default Transpotationhire;
