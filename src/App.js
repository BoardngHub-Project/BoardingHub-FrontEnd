import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CreateUser from './Pages/CreateUser';
import 'bootstrap/dist/css/bootstrap.min.css';
// import ServiceProviderAccount from './Pages/ServiceProviderAccount';
import MealProvider1 from './Pages/MealProvider1';
import Footer from './Component/Footer';
import 



function App() {
  return (
    <div>
    <Router>
      <Switch>
       <Route path="/" element={<Home />} />
      
      </Switch>
   { <Footer/>}
    </Router>
      
    </div>
  );
}
import { Switch } from '@material-ui/core';

export default App;

