import React, { useState } from "react";

const ModalInfo = props => {
  const { info } = props;

  const [aqi] = useState(info.aqi);

  // const [attributions] = useState(info.attributions); //array

  ////////// IAQI
  // const [pm25] = useState(info.iaqi.pm25.v);
  // const [pm10] = useState(info.iaqi.pm10.v);
  // const [o3] = useState(info.iaqi.o3.v);
  // const [no2] = useState(info.iaqi.no2.v);
  // const [co] = useState(info.iaqi.co.v);
  // const [temperature] = useState(info.iaqi.t.v);
  // const [humidity] = useState(info.iaqi.h.v);

  // useEffect(() => {
  //   console.log(pm25);
  // });

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
    <div>
      <h3>
        AQI: <span className={pollutionLevel(aqi)}>{aqi}</span>
      </h3>
    </div>
  );
};

export default ModalInfo;
