import React from "react";
import signup from "./Assets/signup.avif";

function ServiceProviderAccount() {
  return (
    <div class="container">
      <div class="row justify-content-md-center">
        <div class="col col-lg-5">
          <p class="text-start">
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
          {/* check box */}
          <p class="text-start">Service Type</p>
          <div class="row">
            <div class="col-md-6">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="checkbox1"
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
                  id="checkbox3"
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
                  id="checkbox4"
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

          <div class="col-12">
            <button class="btn btn-primary btn-block" type="submit">
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
