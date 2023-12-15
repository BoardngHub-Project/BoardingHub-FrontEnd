import '../CSS/EditProfile.css';
import React, { useState } from 'react';
import axios from "axios";

function EditProfile() {

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");

    async function save(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:3000/", {
        firstName: firstname,
        lastName:lastname,
        email: email,
        address: address,
      });
      alert("Details Updated Successfully");
    } catch (err) {
      alert(err);
    }
  }

    return (
        <div>
            <div className='profile'>
                <div><h2><u>Edit Your Info</u></h2></div>
                <div className='profilePic'>
                    <img id="profilePicture" src={require('./Assets/profile_user.jpg')}
                     height="300px" width="300px"
                     alt='ProfilePicture'/>
                </div>
                <div className='infoBox'>
                    <div className='variableBox'>
                        <div>
                            <b>First Name : </b><input id="firstName" value={firstname}
                                                onChange={(event) => {
                                                setFirstname(event.target.value);
                                                }}/>
                        </div>
                        <br/>
                        <div>
                            <b>Last Name : </b><input id="lastName" value={lastname}
                                                onChange={(event) => {
                                                setLastname(event.target.value);
                                                }}/>
                        </div>
                        <br/>
                        <div>
                            <b>Email : </b><input id="email" value={email}
                                                onChange={(event) => {
                                                setEmail(event.target.value);
                                                }}/>
                        </div>
                        <br/>
                        <div>
                            <b>Address : </b><input id="address" value={address}
                                                onChange={(event) => {
                                                setAddress(event.target.value);
                                                }}/>
                        </div> 
                    </div>
                    <button class="submitBtn" type="submit" onClick={save}><b>Submit</b></button> 
                </div>
            </div>
            
           
        </div>
    )


}

export default EditProfile