import React, { useState } from "react";
import driver from "../Assets/Transpottion/driver.avif";
import "../CSS/TranHireRegistration.css";
import NavBar from "../Component/NavBar";


function TranHireRegistration() {
  
  const [selectedFile, setSelectedFile] = useState(null);

  return (
    <div class="container">
      <NavBar/>
      <div class="row">
        <div class="col">
          <img src={driver} alt=" " class="image" />
        </div>
        <div class="col">
          <div class="mb-3">
            {/* <label for="exampleFormControlInput1" class="form-label">Vehicle Type </label> */}
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Vehicle Type"
            />
          </div>
          <div class="mb-3">
            {/* <label for="exampleFormControlInput1" class="form-label">Vehicle Make</label> */}
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Vehicle Make"
            />
          </div>
          <div class="mb-3">
            {/* <label for="exampleFormControlInput1" class="form-label">Driver Name</label> */}
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Driver Name"
            />
          </div>
          <div class="mb-3">
            {/* <label for="exampleFormControlTextarea1" class="form-label">Description</label> */}
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Give additional details"
            ></textarea>
          </div>
          <label for="exampleFormControlTextarea1" class="form-label">
            Input Images Of Your Vehicle
          </label>

          <div className="mediaInput">
            <input type="file" accept="image/*, video/*" />
            {selectedFile && (
              <div>
                <p>Selected File: {selectedFile.name}</p>
                {selectedFile.type.startsWith("image/") && (
                  <img
                    src={URL.createObjectURL(selectedFile)}
                    alt="Selected"
                    style={{ maxWidth: "100%", maxHeight: "200px" }}
                  />
                )}
                {selectedFile.type.startsWith("video/") && (
                  <video controls width="100%" height="200px">
                    <source
                      src={URL.createObjectURL(selectedFile)}
                      type={selectedFile.type}
                    />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TranHireRegistration;

