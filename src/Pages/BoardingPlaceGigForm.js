
import Footer from '../Component/Footer';
import NavigationBarLoggedIn from '../Component/NavigationBarLoggedIn';
import '../CSS/BoardingPlaceGigForm.css';
import React, { useState } from 'react';

function BoardingPlaceGigForm() {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    };

    return (
        <div>
            <NavigationBarLoggedIn />
            <div className="boardingPlaceGigFormImage">
                <img src={require('../Pages/Assets/boardingHouse1.jpg')}
                height={500}
                width='100%'
                alt='BoardingPlaceGigForm'
                />
            </div>
            <div className="formHeading">
                <h2><b>Please Fill the Form Below</b></h2>
            </div>
            <div className="gigForm">
               
                    <input type="text" id="formTitle" placeholder="  Title"/>
                    <input id="name" placeholder="  Name"/>
                    <input id="Accomadation_Type" placeholder="  Accomadation Type"/>
                    <input type="number" step="any" id="PricePerRoom" placeholder="  Price per Room" />           
                    {/* to get various decimal number inputs we need to use step="any" inside input tag */}
                    <input id="Availability" placeholder="  Availability"/>             
                    <input type="text" id="Description" placeholder="  Description"/>
                    <input type="number" id="Longitudes" placeholder="  Longitudes" />
                    <input type="number" id="Latitudes" placeholder="  Latitudes" />

                    <div className='mediaInput'>
                        <input type="file" onChange={handleFileChange} accept="image/*, video/*" />
                        {selectedFile && (
                            <div>
                                <p>Selected File: {selectedFile.name}</p>
                                {selectedFile.type.startsWith('image/') && (
                                    <img src={URL.createObjectURL(selectedFile)} alt="Selected" style={{ maxWidth: '100%', maxHeight: '200px' }} />
                                )}
                                {selectedFile.type.startsWith('video/') && (
                                    <video controls width="100%" height="200px">
                                    <source src={URL.createObjectURL(selectedFile)} type={selectedFile.type} />
                                    Your browser does not support the video tag.
                                    </video>
                                )}
                            </div>
                        )}
                    </div>
                
                <div>
                    <button className="submitBtn" name="Submit" type="submit" formMethod="get">Submit</button>
                </div>
            </div>
            <Footer />
        </div>

    )

}

export default BoardingPlaceGigForm