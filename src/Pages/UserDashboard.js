import React from 'react';
import Footer from '../Component/Footer';
import '../CSS/UserDashboard.css';
import NavigationBarLoggedIn from '../Component/NavigationBarLoggedIn';
import { useNavigate } from 'react-router-dom';

function UserDashboard() {
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
                <button id='boardingPlace' onClick={() => handleClick('/BoardingPlaceOne')}><b>Boarding Place</b></button>
                <button id='mealProviders' onClick={() => handleClick('/MealProvider1')}><b>Meal Providers</b></button>
                <button id='transportProviders' onClick={() => handleClick('/TranspotationLanding')}><b>Transport Providers</b></button>
                <button id='partTimeJobs' onClick={() => handleClick('/GetJob')}><b>Part-Time Jobs</b></button>
            
            </div>
        
            <Footer/>
        </div>
    )
  }
  
  export default UserDashboard

  