import React from 'react';
import Footer from '../Component/Footer';
import NavBar from '../Component/NavBar';
import '../CSS/Home.css';


function Home() {
  return (
    <div>
      <br/><br/><br/><br/><br/><br/>
      <NavBar/>
      <div>
        <img src={require('../Assets/Welcome1.jpg')} height={460} width='100%' alt='WelcomeImage'/>
      </div>
      <br/><br/>
      <div className="HomeTextBox">
        <p className='HomeText'>Lorem ipsum dolor sit amet consectetur. Amet augue arcu volutpat velit.
           Nec id in nunc sed porttitor morbi enim nibh. Arcu nulla condimentum sit 
           condimentum blandit. Fermentum et nisi vulputate eu viverra sed interdum.</p>
      </div>
      <br/><br/><br/>
      <Footer/>   
    </div>
  )
}

export default Home

