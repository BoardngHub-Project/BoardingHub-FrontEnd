import React, { useState } from "react";

import signup from '../Assets/signup.avif';
import axios from "axios";


import './CreateUser.css';


function ServiceProviderAccount() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [boardingProvider, setBoardingProvider] = useState(false);
  const [mealProvider, setMealProvider] = useState(false);
  const [transportationProvider, setTransportationProvider] = useState(false);
  const [jobProvider, setJobProvider] = useState(false);

  async function save(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8080//api/service-provider", {
        firstName: firstname,
        lastName:lastname,
        email: email,
        password: password,
        confirmPassword: confirmpassword,
        
      });
      alert("Employee Registation Successfully");
    } catch (err) {
      alert(err);
    }
  }
  return (
    <div class="container">
      <div class="row justify-content-md-center">
        <div class="col col-lg-5">
          <p class="text-start large-text">
            <b>Create Account</b>
          </p>
          <div class="row">
            <div class="col">
              <label for="lastnameController" class="form-label">
                First Name
              </label>
              <input
                type="text"
                class="form-control"
                placeholder="First name"
                aria-label="First name"
                id="firstname"
                value={firstname}
                onChange={(event) => {
                  setFirstname(event.target.value);
                }}
              />
            </div>
            <div class="col">
              <label for="lastnameController" class="form-label">
                Last Name
              </label>
              <input
                type="text"
                class="form-control"
                placeholder="Last name"
                aria-label="Last name"
                id="lastname"
                value={lastname}
                onChange={(event) => {
                  setLastname(event.target.value);
                }}
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
              id="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>
          {/* check box */}
          <p class="text-start">Service Type</p>
          <div class="row">
            <div class="col-md-6">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="boardingProvider"
                  value = {boardingProvider}
                  onChange = {(event) => {
                    setBoardingProvider(event.target.value);
                  }}
                />
                <label class="form-check-label" for="boardingprovider">
                  Boarding Place Provider
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="mealprovider"
                  value = {mealProvider}
                  onChange = {(event) => {
                    setMealProvider(event.target.value);
                  }}
                />
                <label class="form-check-label" for="mealprovider">
                  Meal Provider
                </label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="transportationProvider"
                  value = {transportationProvider}
                  onChange = {(event) => {
                    setTransportationProvider(event.target.value);
                  }}
                />
                <label class="form-check-label" for="transportationprovider">
                  Transportation Provider
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="jobProvider"
                  value = {jobProvider}
                  onChange = {(event) => {
                    setJobProvider(event.target.value);
                  }}
                />
                <label class="form-check-label" for="jobprovider">
                  Part-Time-Job Provider
                </label>
              </div>
            </div>
          </div>

          <div class="mb-3">
            <label for="inputPassword5" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              placeholder="Password"
              id="password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
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
              id="confirmpassword"
              value={confirmpassword}
              onChange={(event) => {
                setConfirmpassword(event.target.value);
              }}
            />
          </div>

          <div class="col-12 d-flex justify-content-center">
            <button class="btn btn-primary btn-block" type="submit" onClick={save}>
              Sign Up
            </button>
          </div>
        </div>
        <div class="col-md-auto">
          <div class="text-center">
            <img src={signup} class="rounded" alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceProviderAccount;
