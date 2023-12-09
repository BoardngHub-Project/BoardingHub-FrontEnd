import { Button } from 'bootstrap';
import Footer from '../Component/Footer';
import NavBar from '../Component/NavBar';
import '../CSS/ServiceProviderProfile.css';
import React, { useState } from 'react';

function ServiceProviderProfile() {

    return (
        <div>
            <NavBar/>
            <div className='profile'>
                <div><h3><u>Service Provider Profile</u></h3></div>
                <div className='editInfoBtn'><button className="editInfo" name="EditInfo">Edit Info</button></div>
                <div className='profilePic'>
                    <img id="profilePicture" src={require('./Assets/profile_user.jpg')} height="300px" width="300px" alt='ProfilePicture'/>
                </div>
                <div className='infoBox'>
                    <div className='variableBox'>
                        <div>
                            <b>First Name : </b><input id="firstName"/>
                        </div>
                        <br/>
                        <div>
                            <b>Last Name : </b><input id="lastName"/>
                        </div>
                        <br/>
                        <div>
                            <b>Email : </b><input id="email"/>
                        </div>
                        <br/>
                        <div>
                            <b>Address : </b><input id="address"/>
                        </div> 
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    )


}

export default ServiceProviderProfile

