import { useState, useEffect } from "react";
import axios from "axios";

export const TransportationRent = () => {
  const [vehicles, setVehicle] = useState([]);
  const [searchType,setSearchType] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/type/"+ searchType,{
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        setVehicle(response.data);
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  }, [searchType]);

  return (
    <div class="container">
        TransportationRent
        <input class = "searchBar " placeholder="Search By Type" value={searchType} onChange={(event) => setSearchType(event.target.value)}/>
      {vehicles.map((vehicle) => (
        <div className="card" key={vehicle.vehicleId}>
          <img
            className="card-img-top"
            src={vehicle.image}
            alt={vehicle.vehicleType}
          />

          <div className="card-body">
            <h5 className="card-title">{vehicle.vehicleType}</h5>

            <p className="card-text">{vehicle.description}</p>

            <p className="card-text">
              <strong>Price per day:</strong> ${vehicle.pricePerDay}
            </p>

            <p className="card-text">
              <strong>Availability:</strong> {vehicle.availability}
            </p>

            <p className="card-text">
              <strong>Vehicle make:</strong> {vehicle.vehicleMake}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
