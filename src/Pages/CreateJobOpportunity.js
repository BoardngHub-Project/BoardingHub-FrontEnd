import React from "react";

import './CreateJobOpportunity.css';



function CreateJobOpportunity() {
  return (
    <div class="container">
      <div class="row justify-content-md-center">
        <div class="col col-lg-5">
          <p class="text-start large-text">
            <b>Create Job Opportunity</b>
          </p>
          <div class="row">
            <div class="col">
              <label for="lastnameController" class="form-label">
                Company Name
              </label>
              <input
                type="text"
                class="form-control"
                placeholder="Company Name"
                aria-label="Company Name"
              />
            </div>
            <div class="col">
              <label for="lastnameController" class="form-label">
                Number Of Opportunity
              </label>
              <input
                type="number"
                class="form-control"
                placeholder="Number Of Opportunity"
                aria-label="Number Of Opportunity"
              />
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          
          </div>

          <div class="mb-3">
            <label for="inputPassword5" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              placeholder="Password"
            />
          </div>
          <div class="mb-3">
            <label for="confirmPasswordController" class="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              class="form-control"
              placeholder="Confirm Password"
            />
          </div>

          <div class="col-12 d-flex justify-content-center">
            <button class="btn btn-primary btn-block" type="submit">
              Sign Up
            </button>
          </div>
        </div>
        <div class="col-md-auto">
          <div class="text-center">
            <img src={confirm} class="rounded" alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceProviderAccount;

import React, { useState } from 'react';
import "../CSS/CreateJobOpportunity.css";

function CreateJobOpportunity() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={togglePopup}>Create Job Opportunity</button>
      {isOpen && (
        <div className="popup">
          <div className="popup-content">
            <h2>Create Job Opportunity</h2>
            <form>
              <label htmlFor="companyName">Company Name:</label>
              <input type="text" id="companyName" name="companyName" />

              <label htmlFor="contactNumber">Contact Number:</label>
              <input type="text" id="contactNumber" name="contactNumber" />

              <label htmlFor="numberOfOpportunity">Number Of Opportunity:</label>
              <input type="text" id="numberOfOpportunity" name="numberOfOpportunity" />

              <label htmlFor="salary">Salary:</label>
              <input type="text" id="salary" name="salary" />

              <label htmlFor="jobTitle">Title Of The Job:</label>
              <input type="text" id="jobTitle" name="jobTitle" />

              <label htmlFor="time">Time:</label>
              <input type="text" id="time" name="time" />

              <label htmlFor="businessType">Business Type:</label>
              <input type="text" id="businessType" name="businessType" />

              <label htmlFor="address">Address (Go To Place Type):</label>
              <input type="text" id="address" name="address" />

              <label htmlFor="online">Online:</label>
              <select id="online" name="online">
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>

              <label htmlFor="giveAndTake">Give And Take:</label>
              <input type="text" id="giveAndTake" name="giveAndTake" />

              <label htmlFor="cv">CV:</label>
              <input type="text" id="cv" name="cv" />

              <label htmlFor="goToPlace">Go To Place:</label>
              <select id="goToPlace" name="goToPlace">
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>

              <label htmlFor="description">Description:</label>
              <textarea id="description" name="description"></textarea>

              <button type="button" onClick={togglePopup}>Sign Up</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

// export default CreateJobOpportunity;
