import React from "react"
import '../CSS/Login.css';

export const Login = () => {
    
    return(
        <div className="container">
            <div className="auth-form-container">
                
                <div className="LeftHalf">
                    <h1 className="loginHeader"><b>Login To Your Account</b></h1>
                    <hr className="hRule"></hr>
                    
                    <form className="LogIn-Form" >
                        <div className="emailInput">
                            <input type="email" className="emailIn" placeholder="email" id="email" name="email"/>
                        </div>
                        <br></br>
                        <div>
                            <input type="password" className="passwordIn" placeholder="password" id="password" name="password"/>
                        </div>
                        <div>
                            <p className="forgotPassword"><b>Forgot Password?</b></p>
                        </div>
                        <button className="loginButton" type="Submit"><b>Log In</b></button>
                    </form>
                </div>

                <div className="RightHalf">
                    <h3 className="SignUpText1"><b>New Here?</b></h3>
                    <p className="SignUpText2">Sign up and get massive<br></br> opportunities</p>
                    <button className="SignUpButton"><b>Sign Up</b></button>
                </div>
            </div>
        </div>
    )

}