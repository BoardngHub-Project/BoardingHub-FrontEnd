import React from 'react';
import Footer from '../Component/Footer';
import NavigationBar from '../Component/NavigationBar';
import '../CSS/Home.css';


function Welcome() {
  return (
    <div>
      <br/><br/><br/><br/><br/><br/>
      <NavigationBar/>
      <div>
        <img src={require('../Assets/Welcome1.jpg')} height={460} width='100%' alt='WelcomeImage'/>
      </div>
      <br/><br/>
      <div className="HomeTextBox">
        <p className='HomeText'><h1>Welcome to BoardingHub!</h1><br/><br/>
        BoardingHub is your ultimate destination for simplifying student life. Whether you're searching for accommodation, 
        craving a delicious meal, planning your commute, or seeking part-time job opportunities, BoardingHub has you covered.
        Our innovative online platform connects college students with essential amenities and services within close proximity 
        to their university campus. With user-friendly search tools and seamless booking options, you can streamline your daily 
        tasks and focus on what truly matters – your academic journey.Discover convenience, efficiency, and peace of mind with 
        BoardingHub. Start exploring now and make the most of your college experience!</p>
      </div>
      <br/><br/><br/>
        <Footer/>
    </div>
  )
}

export default Welcome

