import React from 'react';
import Footer from '../Component/Footer';
import '../CSS/SelectService.css';
import NavigationBarLoggedIn from '../Component/NavigationBarLoggedIn';
import { useNavigate } from 'react-router-dom';

function SelectService() {
    //let history = useHistory();
    const navigate = useNavigate();

    const handleClick = (path) => {
        // Navigate to the dynamically provided path
        navigate(path);
    };

    return (
        <div>
            <NavigationBarLoggedIn/>
            <div className='Servicetitle'>
                <h1><b>Welcome Back...!</b></h1>
            </div>
            <div className='ServiceSelections'>
                <button id='boardingService' onClick={() => handleClick('/BoardingPlaceGigForm')}><b>Boarding Place</b></button>
                <button id='mealService' onClick={() => handleClick('/BoardingPlaceOne')}><b>Meal Service</b></button>
                <button id='transportService' onClick={() => handleClick('/BoardingPlaceOne')}><b>Transport Service</b></button>
                <button id='partTimeJobService' onClick={() => handleClick('/BoardingPlaceOne')}><b>Part-Time Job</b></button>
            
            </div>
        
            <Footer/>
        </div>
    )
  }
  
  export default SelectService

  