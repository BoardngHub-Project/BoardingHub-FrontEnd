import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Component/Footer";
import { Switch } from "@material-ui/core";
import NavBar from "./Component/NavBar";
import Home from "./Pages/Home";
import CreateUser from "./Pages/CreateUser";
import { Login } from "./Pages/Login";

function App() {
  return (
    <div>
      {/* <Router>
      <Switch>
       <Route path="/" element={<Home/>} />
       
      </Switch>
   { <Footer/>}
    </Router>
      <NavBar/> */}
      {/* <CreateUser /> */}
      <Login />
    </div>
  );
}

export default App;
