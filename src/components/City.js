import React, { useState } from "react";

import CityModal from "./modal/CityModal";

const City = props => {
  const { station } = props;

  const [location] = useState(station);

  const pollutionLevel = aqi => {
    if (aqi < 50) {
      return "bg-success";
    }
    if (aqi >= 50 && aqi < 100) {
      return "bg-warning";
    }
    if (aqi >= 100 && aqi < 150) {
      return "bg-orange";
    }
    if (aqi >= 150) {
      return "bg-danger";
    }
  };

  return (
    <React.Fragment>
      {location.aqi !== "-" && (
        <div className={`card my-3 mx-3 ${pollutionLevel(location.aqi)}`}>
          <h2 className="card-header">{location.station.name}</h2>
          <div className="card-body">
            <h3 className="card-title">
              AQI:{" "}
              <span className={pollutionLevel(location.aqi)}>
                {location.aqi}
              </span>
            </h3>
            <p className="card-text">Station ID: {location.uid}</p>
            <CityModal location={location.station.name} uid={location.uid} />
          </div>
        </div>
      )}
    </React.Fragment>

    // <div className="card" style={{ width: "50rem" }}>
    //   <h3 className="my-auto">{location.station.name}</h3>
    //   <hr className="mt-auto" />
    //   <div className="card-body">
    //     <h2>
    //       AQI:{" "}
    //       <span className={pollutionLevel(location.aqi)}>{location.aqi}</span>
    //     </h2>
    //     <p>Station ID: {location.uid}</p>
    //     <CityModal location={location.station.name} uid={location.uid} />
    //   </div>
    // </div>
  );
};

export default City;
