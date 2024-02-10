
import Footer from '../Component/Footer';
import NavigationBarLoggedIn from '../Component/NavigationBarLoggedIn';
import '../CSS/BoardingHouseOne.css';
import MapComponent from "../Component/MapComponent";
import SearchLocationInput from "../Component/SearchBar";
import React, { useState } from "react";


function BoardingPlaceOne() {

    const [selectedLocation, setSelectedLocation] = useState({
        lat: 6.927079,
        lng: 79.861244,
      });

    return (
        <div>
            <NavigationBarLoggedIn />
            <div className="boardingHouseOneImage">
                {/* <div className="searchBar"><SearchBar/></div> */}
                <img src={require('../Pages/Assets/boardingHouse1.jpg')}
                height={500}
                width='100%'
                alt='BoardingHouse1Image'
                
                />
            </div>
            <div className="searchBar"style={{ height: "100vh", width: "100%" }}>
                <SearchLocationInput setSelectedLocation={setSelectedLocation} />
            </div>
            <div className='map'>
                <MapComponent selectedLocation={selectedLocation} />
            </div>

            <Footer />
        </div>

    )

}

export default BoardingPlaceOne



// let map;
// let service;
// let infowindow;

// function initMap() {
//   const sydney = new google.maps.LatLng(-33.867, 151.195);

//   infowindow = new google.maps.InfoWindow();
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: sydney,
//     zoom: 15,
//   });

//   const request = {
//     query: "Museum of Contemporary Art Australia",
//     fields: ["name", "geometry"],
//   };

//   service = new google.maps.places.PlacesService(map);
//   service.findPlaceFromQuery(request, (results, status) => {
//     if (status === google.maps.places.PlacesServiceStatus.OK && results) {
//       for (let i = 0; i < results.length; i++) {
//         createMarker(results[i]);
//       }

//       map.setCenter(results[0].geometry.location);
//     }
//   });
// }

// function createMarker(place) {
//   if (!place.geometry || !place.geometry.location) return;

//   const marker = new google.maps.Marker({
//     map,
//     position: place.geometry.location,
//   });

//   google.maps.event.addListener(marker, "click", () => {
//     infowindow.setContent(place.name || "");
//     infowindow.open(map);
//   });
// }

// window.initMap = initMap;