import React from 'react';
//import { useHistory } from 'react-router-dom';
import '../CSS/RegisterChoice.css';
import NavigationBar from '../Component/NavigationBar';
import { useNavigate } from 'react-router-dom';

function RegisterChoice() {

  let nav = useNavigate()
    
  async function user(event) {
    event.preventDefault();
    try {
      nav('/CreateUser')
    } catch (err) {
      alert(err);
    }

  }

  async function serviceProvider(event) {
    event.preventDefault();
    try {
      nav('/ServiceProviderAccount')
    } catch (err) {
      alert(err);
    }

  }

  return (
    <div>
      <NavigationBar/>
        <div className='title'><h1><b>Please Select Your Role</b></h1></div>
        <div className='DashboardSelections'>
        <div id='userDiv'><button id='user' onClick={user}></button><div className='buttonName'><b>User</b></div></div>
        <div id='serviceProviderDiv'><button id='serviceProvider' onClick={serviceProvider}></button><div className='buttonName'><b>Service Provider</b></div></div>
        </div>
    </div>
  )
}

export default RegisterChoice

