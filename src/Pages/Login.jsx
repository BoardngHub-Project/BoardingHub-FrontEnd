import React, { useState } from "react";
//import { useNavigate } from 'react-router-dom';
import "../CSS/Login.css";
import axios from "axios";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 // const navigate = useNavigate();

  async function submit(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/login", {
        email: email,
        password: password,
      }).then((res) =>
      {
        console.log(res.data);
        if(res.data === "Account not found")
        {
          alert("Account not found");
        }
        else if(res.data === "Logged in Successfully!...")
        {
          alert("Logged in Successfully!...");
          //navigate('/src/Pages/Home.js');
        }
        else{
          alert("Incorrect email or password");
        }
      }, 
      );

    } catch (err) {
      alert(err);
    }

  }
  return (
    <div className="container">
      <div className="auth-form-container">
        <div className="LeftHalf">
          <h1 className="loginHeader">
            <b>Login To Your Account</b>
          </h1>
          <hr className="hRule"></hr>

          <form className="LogIn-Form">
            <div className="emailInput">
              <input
                type="email"
                className="emailIn"
                placeholder="email"
                id="email"
                name="email"
                value={email}
                onChange={(event) => 
                  setEmail(event.target.value)
                }
              />
            </div>
            <br></br>
            <div>
              <input
                type="password"
                className="passwordIn"
                placeholder="password"
                id="password"
                name="password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </div>
            <div>
              <p className="forgotPassword">
                <b>Forgot Password?</b>
              </p>
            </div>
            <button className="loginButton" type="Submit" onClick={submit}>
              <b>Log In</b>
            </button>
          </form>
        </div>

        <div className="RightHalf">
          <h3 className="SignUpText1">
            <b>New Here?</b>
          </h3>
          <p className="SignUpText2">
            Sign up and get massive<br></br> opportunities
          </p>
          <button className="SignUpButton" onClick={submit}>
            <b>Sign Up</b>
          </button>
        </div>
      </div>
    </div>
  );
};
