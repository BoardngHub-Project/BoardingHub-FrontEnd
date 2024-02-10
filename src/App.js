import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Component/Footer";
import { Login } from "./Pages/Login";
import ContactUs from "./Component/ContactUs";
import AboutUs from "./Pages/AboutUs";
import Welcome from "./Pages/Welcome";
import NavigationBar from "./Component/NavigationBar";
import  Dashboard from "./Pages/Dashboard";
import  ServiceProviderProfile from "./Pages/ServiceProviderProfile";
import  BoardingPlaceGigForm from "./Pages/BoardingPlaceGigForm";
import  EditProfile from "./Pages/EditProfile";
import UserDashboard from "./Pages/UserDashboard";
import BoardingPlaceOne from "./Pages/BoardingPlaceOne";
import BoardingPlaces1 from "./Pages/BoardingPlaces1";

function App() {
  return (
    <div>
      <Router>

        <NavigationBar/>
        
        <Routes>
          <Route path="/" element={<Welcome/>} />
          <Route path="/AboutUs" element={<AboutUs/>} />
          <Route path="/ContactUs" element={<ContactUs/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path='/Dashboard' element={<Dashboard/>}/>
          <Route path='/UserDashboard' element={<UserDashboard/>}/>
          <Route path='//ServiceProviderProfile' element={<ServiceProviderProfile/>}/>
          <Route path='/BoardingPlaceGigForm' element={<BoardingPlaceGigForm/>}/>
          <Route path='/EditProfile' element={<EditProfile/>}/>
          <Route path='/BoardingPlaceOne' element={<BoardingPlaceOne/>}/>
          <Route path='/BoardingPlaces1' element={<BoardingPlaces1/>}/>
          
        </Routes>
        
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
