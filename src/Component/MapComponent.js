import React, { useState, useEffect } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { REACT_APP_GOOGLE_MAPS_KEY } from "../Constant";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const MapComponent = ({ selectedLocation }) => {
  let nav = useNavigate()
  const [locations, setLocations] = useState([]);
  const [selectedLoc, setSelectedLoc] = useState(null);
  const boardingPlace1 = { lat: 7.26344, lng: 80.591361 };
  const boardingPlace2 = { lat: 7.2411667, lng: 80.6036944 };
  const boardingPlace3 = { lat: 7.26780556, lng: 80.59011111 };
  const boardingPlace4 = { lat: 7.2675, lng: 80.5874 };
  const boardingPlace5 = { lat: 7.2568, lng: 80.6075 };

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: REACT_APP_GOOGLE_MAPS_KEY,
  });

  useEffect(() => {
    // Fetch locations from the database using axios
    axios.get('http://localhost:8080/api/MapComponent')
      .then(response => {
        const mappedLocations = response.data.map(location => ({
            lat: parseFloat(location.latitude), // Assuming latitude is stored as a string
            lng: parseFloat(location.longitude), // Assuming longitude is stored as a string
            id: location.id.toString() // Assuming id is stored as a string
          }));
          setLocations(mappedLocations);
        })
      .catch(error => {
        console.error('Error fetching locations:', error);
      });
  }, []); // Fetch locations only once when the component mounts


  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);
  if (loadError) return "Error";
  if (!isLoaded) return "Maps";

  return (
    <div style={{ marginTop: "50px" }}>
      <GoogleMap
        mapContainerStyle={{
          height: "800px",
        }}
        center={selectedLocation}
        zoom={14}
        onLoad={onMapLoad}
      >
        {/* {locations.map(location => (
          <Marker
            key={location.id}
            position={{ lat: location.lat, lng: location.lng }}
            onClick={() => setSelectedLoc({ lat: location.lat, lng: location.lng })}
          />
        ))}
        {selectedLocation && (
          <Marker
            position={selectedLoc}
            icon={{
              url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
              scaledSize: new window.google.maps.Size(50, 50), // Adjust marker size
            }}
          />
        )} */}

        <MarkerF
          position={boardingPlace1}
          icon={"http://maps.google.com/mapfiles/ms/icons/green-dot.png"}
          onClick={() => nav('/UserDashboard')}
        />

        <MarkerF
          position={boardingPlace2}
          icon={"http://maps.google.com/mapfiles/ms/icons/green-dot.png"}
          onClick={() => nav('/UserDashboard')}
        />

        <MarkerF
          position={boardingPlace3}
          icon={"http://maps.google.com/mapfiles/ms/icons/green-dot.png"}
          onClick={() => nav('/UserDashboard')}
        />
        <MarkerF
          position={boardingPlace4}
          icon={"http://maps.google.com/mapfiles/ms/icons/green-dot.png"}
          onClick={() => nav('/UserDashboard')}
        />
        <MarkerF
          position={boardingPlace5}
          icon={"http://maps.google.com/mapfiles/ms/icons/green-dot.png"}
          onClick={() => nav('/UserDashboard')}
        />

      </GoogleMap>
    </div>
  );
};

export default MapComponent;



// const onMapClick = (event) => {
//     setSelectedLoc({
//       lat: event.latLng.lat(),
//       lng: event.latLng.lng()
//     });
//   };


//AIzaSyD0_bSYvCxUntxksosDYbxcrz9LFeWHGHQ