import React, { useEffect, useRef, useState } from "react";
import { REACT_APP_GOOGLE_MAPS_KEY } from "../Constant";

let autoComplete;

const loadScript = (url, callback) => {
  let script = document.createElement("script");
  script.type = "text/javascript";

  if (script.readyState) {
    script.onreadystatechange = function () {
      if (script.readyState === "loaded" || script.readyState === "complete") {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    script.onload = () => callback();
  }

  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
};

const SearchLocationInput = ({ setSelectedLocation }) => {
  const [query, setQuery] = useState("");
  const autoCompleteRef = useRef(null);

  const handleScriptLoad = (updateQuery, autoCompleteRef) => {
    autoComplete = new window.google.maps.places.Autocomplete(
      autoCompleteRef.current,
      {
        // types: ["(cities)"],
        componentRestrictions: { country: "LK" },
      }
    );

    autoComplete.addListener("place_changed", () => {
      handlePlaceSelect(updateQuery);
    });
  };

  const handlePlaceSelect = async (updateQuery) => {
    const addressObject = await autoComplete.getPlace();

    const query = addressObject.formatted_address;
    updateQuery(query);
    console.log({ query });

    const latLng = {
      lat: addressObject?.geometry?.location?.lat(),
      lng: addressObject?.geometry?.location?.lng(),
    };

    console.log({ latLng });
    setSelectedLocation(latLng);
  };

  useEffect(() => {
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=${REACT_APP_GOOGLE_MAPS_KEY}&libraries=places`,
      () => handleScriptLoad(setQuery, autoCompleteRef)
    );
  }, []);

  return (
    <div className="search-location-input">
      <label><b> &nbsp;&nbsp;Search by Area</b></label>
      <input
        ref={autoCompleteRef}
        className="form-control"
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search Places ..."
        value={query}
      />
    </div>
  );
};

export default SearchLocationInput;



























// import React, { useState } from 'react';
// import { Dropdown, Button } from 'react-bootstrap';

// const SearchBar = ({ onSearch }) => {
//   const [searchInput, setSearchInput] = useState('');

//   const handleChange = (event) => {
//     setSearchInput(event.target.value);
//   };

//   const handleSearch = () => {
//     onSearch(searchInput);
//   };

//   return (
//     <div className='SearchBar'>
//       <Dropdown>
//         <Dropdown.Toggle variant="success" id="dropdown-basic-button">
//           <b>Range</b>
//         </Dropdown.Toggle>
//         <Dropdown.Menu>
//           <Dropdown.Item href="#/action-1">1km</Dropdown.Item>
//           <Dropdown.Item href="#/action-2">2km</Dropdown.Item>
//           <Dropdown.Item href="#/action-3">3km</Dropdown.Item>
//         </Dropdown.Menu>
//       </Dropdown>

//       <input
//         id='searchInput'
//         type="text"
//         placeholder="Search Area"
//         value={searchInput}
//         onChange={handleChange}
//         style={{ width: 300, height: 50 }}
//       />

//       <Button className='SearchBtn' variant="contained" onClick={handleSearch}>
//         Search
//       </Button>
//     </div>
//   );
// };

// export default SearchBar;








// import React, {useState} from 'react';
// import Button from '@mui/material/Button';
// import Dropdown from 'react-bootstrap/Dropdown';
// import "../CSS/SearchBar.css"; 
// //import { Autocomplete } from 'react-google-autocomplete';


// const SearchBar = ({ onPlaceSelected }) => {

//     // <Autocomplete
//     //     apiKey="AIzaSyBp404rrSFge1-32ECVc5eAH_dCpNDHBIc"
//     //     onPlaceSelected={handlePlaceSelected}
//     //     types={['(regions)']}
//     //     style={{ width: '100%' }}
//     //     placeholder="Search for a location"
//     // />

//     const handlePlaceSelected = (place) => {
        
//         onPlaceSelected(place);
//       };

//   const [searchInput, setSearchInput] = useState('');

//   const handleChange = (event) => {
//     setSearchInput(event.target.value);
//   };

  

//     return (
//         <div className='SearchBar'>
//             <Dropdown>
//                 <Dropdown.Toggle variant="success" id="dropdown-basic-button">
//                     <b>Range</b>
//                 </Dropdown.Toggle>
//                 <Dropdown.Menu>
//                     <Dropdown.Item href="#/action-1">1km</Dropdown.Item>
//                     <Dropdown.Item href="#/action-2">2km</Dropdown.Item>
//                     <Dropdown.Item href="#/action-3">3km</Dropdown.Item>
//                 </Dropdown.Menu>
//             </Dropdown>

//             <input
//                 id='searchInput'
//                 type="text"
//                 placeholder="  Search Area"
//                 variant="outlined"
//                 style={{width: 1000, height:50}}
//                  onChange={handleChange}
//                  value={searchInput}
//             />

//             <Button className='SearchBtn' variant="contained">
//                 Search
//             </Button>
            
//         </div>

        
//     );
//     // const handleChange = (e) => {
//     //     e.preventDefault();
//     //     setSearchInput(e.target.value);
//     // };

//     // if(searchInput.length > 0){

//     // }
// }

// export default SearchBar;