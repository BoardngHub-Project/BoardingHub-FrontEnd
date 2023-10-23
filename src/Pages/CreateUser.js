import React, { useState } from "react";
import "./CreateUser.css";
import signup from "../Assets/signup.avif";
import axios from "axios";

function CreateUser() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");

  async function save(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/register/account", {
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
              id="email"
              placeholder="name@example.com"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
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
            <button
              class="btn btn-primary btn-block"
              type="submit"
              onClick={save}
            >
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

export default CreateUser;
