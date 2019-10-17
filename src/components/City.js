import React, { useState } from "react";

import CityModal from "./modal/CityModal";
import PropTypes from "prop-types";

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
    if (aqi >= 150 && aqi < 200) {
      return "bg-danger text-white";
    }
    if (aqi >= 200 && aqi < 300) {
      return "bg-purple text-white";
    }
    if (aqi >= 300) {
      return "bg-darkred text-white";
    }
  };

  return (
    <React.Fragment className="aqi-scale">
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
  );
};

// To be used for testing
City.propTypes = {
  station: PropTypes.shape({
    aqi: PropTypes.string,
    station: PropTypes.shape({
      geo: PropTypes.arrayOf(PropTypes.number),
      name: PropTypes.string,
      url: PropTypes.string
    }),
    time: PropTypes.shape({
      stime: PropTypes.string,
      tz: PropTypes.string,
      vtime: PropTypes.number
    }),
    uid: PropTypes.number
  }).isRequired
};

export default City;
