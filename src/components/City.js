import React, { useState } from "react";

import CityModal from "./modal/CityModal";

const City = props => {
  const { station } = props;

  const [location] = useState(station);

  // useEffect(() => {
  //   console.log(station);
  // }, [station]);
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
    <div className="card">
      <h3 className="my-auto">{location.station.name}</h3>
      <hr className="mt-auto" />

      <h2>
        AQI:{" "}
        <span className={pollutionLevel(location.aqi)}>{location.aqi}</span>
      </h2>
      <p>Station ID: {location.uid}</p>
      <CityModal location={location.station.name} uid={location.uid} />
    </div>
  );
};

export default City;
