import React, { useState } from "react";

const ModalInfo = props => {
  const { info } = props;

  const [aqi] = useState(info.aqi);
  const [link] = useState(info.city.url);

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
    <div className="d-flex flex-column justify-content-between w-100 h-100">
      <h3>
        AQI: <span className={pollutionLevel(aqi)}>{aqi}</span>
      </h3>
      <a
        href={link}
        className="btn btn-success mb-4"
        target="_blank"
        rel="noopener noreferrer"
      >
        View more air quality data at aqicn.org
      </a>
    </div>
  );
};

export default ModalInfo;
