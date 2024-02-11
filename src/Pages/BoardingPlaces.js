import React, { useState, useEffect } from "react";
import axios from "axios";

const GigDetails = () => {
  const [gigDetails, setGigDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch gig details from backend
    axios.get("http://localhost:8080/api/boardingHubGigs")
      .then(response => {
        setGigDetails(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>Gig Details</h2>
      <p>Title: {gigDetails.title}</p>
      <p>Description: {gigDetails.description}</p>
      {/* Display other gig details here */}
    </div>
  );
};

export default GigDetails;





// import Footer from '../Component/Footer';
// import NavigationBarLoggedIn from '../Component/NavigationBarLoggedIn';
// import '../CSS/BoardingPlaces.css';
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from "axios";

// function BoardingPlaces() {
//     const [Title] = useState("");
//     const [Name] = useState("");
//     const [Type] = useState("");
//     const [Price] = useState("");
//     const [Availability] = useState("");
//     const [Description] = useState("");

    
//     let nav = useNavigate()
    

//         try {
//             axios.get("http://localhost:8080/api/login", {
//             Title: Title,
//             Name: Name,
//             Type: Type,
//             Price: Price,
//             Availability: Availability,
//             Description: Description,
//           }).then((res) =>{
//             console.log(res.data);
//           })
          
//         } catch (err) {
//           alert(err);
//         }
    
      

//     return (
//         <div>
//             <NavigationBarLoggedIn />
//             <div className="boardingPlaceGigFormImage">
//                 <img src={require('../Pages/Assets/boardingHouse1.jpg')}
//                 height={500}
//                 width='100%'
//                 alt='BoardingPlaceGigForm'
//                 />
//             </div>
//             <div className="gigForm">
               
//                     <input type="text" id="formTitle" value={res.data.Title} placeholder="  Title"/>
//                     <input id="name" value={Name} placeholder="  Name"/>
//                     <input id="Accomadation_Type" value={Type} placeholder="  Accomadation Type"/>
//                     <input type="number" value={Price} step="any" id="PricePerRoom" placeholder="  Price per Room" />           
//                     {/* to get various decimal number inputs we need to use step="any" inside input tag */}
//                     <input id="Availability" value={Availability} placeholder="  Availability"/>             
//                     <input type="text" id="Description" value={Description} placeholder="  Description"/>

//                     <div className='mediaInput'>
                        
//                     </div>
                
//                 <div>
//                     <button className="submitBtn" name="Submit" type="submit" onClick={nav('/BoardingPlaceOne')}>Back</button>
//                 </div>
//             </div>
//             <Footer />
//         </div>

//     )

// }

// export default BoardingPlaces