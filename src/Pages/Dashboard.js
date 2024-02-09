import React from 'react';
import Footer from '../Component/Footer';
import '../CSS/Dashboard.css';
import NavigationBarLoggedIn from '../Component/NavigationBarLoggedIn';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    //let history = useHistory();
    const navigate = useNavigate();

    const handleClick = (path) => {
        // Navigate to the dynamically provided path
        navigate(path);
    };

    return (
        <div>
            <NavigationBarLoggedIn/>
            <div className='title'>
                <h1><b>Welcome Back...!</b></h1>
            </div>
            <div className='DashboardSelections'>
                <button id='profile' onClick={() => handleClick('/ServiceProviderProfile')}><b>Profile</b></button>
                <button id='addService' onClick={() => handleClick('/BoardingPlaceGigForm')}><b>Add Service</b></button>
                <button id='editService' onClick={() => handleClick('/EditProfile')}><b>Edit Service</b></button>
            
            </div>
        
            <Footer/>
        </div>
    )
  }
  
  export default Dashboard

  