import React, { useState } from "react";
import Driver from "../Assets/Transpottion/driver.avif";
import "../CSS/VehicleHireRegistration.css";
import NavBar from "../Component/NavBar";
import ImageUploader from "../Component/ImageUploader";


const VehicleHireRegistration = () => {
  const[make,setMake] = useState("");
  const[type,setType] = useState("");
  const[driverName,setDriverName] = useState("");
  const[description,setDescription] = useState("");
  const[images,setImages] = useState([]);

  const handleMakeChange = (event) => setMake(event.target.value);
  const handleTypeChange = (event) => setType(event.target.value);
  const handleDriverNameChange = (event) => setDriverName(event.target.value);
  const handleDescriptionChange = (event) => setDescription(event.target.value);
  const handleImageUpload = (newImages) => setImages([...images, ...newImages])

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send data to backend
    console.log({ make, type, driverName, images });
  };

  return (
    <div class="flex-container">
      {/* <NavBar/> */}
      <div class="container">
        <img src={Driver} alt="..." />
      </div>
      <div class="container">
        <h3>Create Your Ad</h3>
        <form onSubmit={handleSubmit}>
     
            {/* <label for="exampleFormControlInput1" class="form-label">Vehicle Type </label> */}
            <input
              type="text"
              id="type"
              name="type"
              value={type}
              onChange={handleTypeChange}
              placeholder="Vehicle Type"
            />
    
    
            {/* <label for="exampleFormControlInput1" class="form-label">Vehicle Make</label> */}
            <input
              type="text"
              id="make"
              name="make"
              value={make}
              onChange={handleMakeChange}
              placeholder="Vehicle Make"
            />
      
            {/* <label for="exampleFormControlInput1" class="form-label">Driver Name</label> */}
            <input
              type="text"
              id="driverName"
              name="driverName"
              value={driverName}
              onChange={handleDriverNameChange}
              placeholder="Driver Name"
            />
            {/* <label for="exampleFormControlTextarea1" class="form-label">Description</label> */}
            <textarea
              class="form-control"
              id="description"
              name="description"
              value={description}
              onChange={handleDescriptionChange}
              rows="3"
              placeholder="Give additional details"
            ></textarea>
            
       

   
          <ImageUploader onUpload={handleImageUpload} />

          <button type="submit">Register Vehicle</button>
        </form>
      </div>
    </div>
  );
}

export default VehicleHireRegistration;


