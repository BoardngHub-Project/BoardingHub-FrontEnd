import React from 'react';
//import { useHistory } from 'react-router-dom';
import '../CSS/RegisterChoice.css';


function RegisterChoice() {
    // const history = useHistory();

    //  const handleClick = (route) => {
    //      // Navigate to the specified route
    //      history.push(route);
    //    };

  return (
    <div>
        <div className='title'><h1><b>Please Select Your Role</b></h1></div>
        <div className='DashboardSelections'>
        <div id='userDiv'><button id='user' ></button><div className='buttonName'><b>User</b></div></div>
        <div id='serviceProviderDiv'><button id='serviceProvider' ></button><div className='buttonName'><b>Service Provider</b></div></div>
        </div>
    </div>
  )
}

export default RegisterChoice

//onClick={() => handleClick('/src/Pages/CreateUser.js')}
//onClick={() => handleClick('/src/Pages/ServiceProviderAccount.js')}