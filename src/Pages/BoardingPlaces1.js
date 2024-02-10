
import Footer from '../Component/Footer';
import NavigationBarLoggedIn from '../Component/NavigationBarLoggedIn';
import '../CSS/BoardingPlaces1.css';
import { useNavigate } from 'react-router-dom';

function BoardingPlaces1() {
   
    let nav = useNavigate()

    async function back(event) {
        event.preventDefault();
        try {
          nav('/BoardingPlaceOne')
        } catch (err) {
          alert(err);
        }
  
      }

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
                <h2><b>Two Room Appartment for Boys</b></h2>
            </div>
            <div className="gigForm">
                <div>
                <button className="submitBtnBack" name="SubmitBack" onClick={back}>Back</button>
                </div>
                <div className='Accomodation'>
                    <p><b>&nbsp;Accomodation Type :</b> Rooms</p>
                </div>
                <div className='Price'>
                    <p><b>&nbsp;Price per Room :</b> Rs.10,000</p>
                </div>
                <div className='Availability'>
                    <p><b>&nbsp;Availability :</b> 2 Rooms</p>
                </div>
                <div className='Address'>
                    <p><b>&nbsp;Address :</b> 31/7, Hindagala-Naranwita-Gampola Rd, Hindagala</p>
                </div>
                <div className='ContactNo'>
                    <p><b>&nbsp;Contact Number :</b> 012-3456789</p>
                </div>
                <div className='Description'>
                    <h3><b><br/>&nbsp;Description :</b></h3><br/>
                    <p>&nbsp;This house suitable for university boys.one km away from peradeniya university. Can stay more than 10pax.<br/><br/>
                            <b>&nbsp;Featues available</b><br/>
                            &nbsp;&nbsp;Fan-NoneA/C<br/>
                            &nbsp;&nbsp;NoFurniture-Yes<br/>
                            &nbsp;&nbsp;Bed rooms-2<br/>
                            &nbsp;&nbsp;Bath rooms-2<br/>
                            &nbsp;&nbsp;Kitchen-Medium<br/>
                            &nbsp;&nbsp;No of Floors available-1</p>
                </div>
            </div>
                <div className='Photo1'>
                    <img src={require('../Pages/Assets/Room1_1.jpeg')}
                        height={400}
                        width={1200}
                        alt='BoardingPlaceGigForm'
                        
                    />
                </div>
                <div className='Photo2'>
                    <img src={require('../Pages/Assets/Room1_2.jpg')}
                        height={400}
                        width={1200}
                        alt='BoardingPlaceGigForm'
                        
                    />
                </div>
                    <div className='Photo3'><img src={require('../Pages/Assets/Room1_3.jpg')}
                        height={400}
                        width={1200}
                        alt='BoardingPlaceGigForm'
                        
                    />
                </div>
            <Footer />
        </div>

    )

}

export default BoardingPlaces1