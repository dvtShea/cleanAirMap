import React, { useState, useEffect } from "react";

let owmKey;

if (process.env.NODE_ENV !== "production") {
  owmKey = process.env.REACT_APP_OWM_KEY;
} else {
  owmKey = process.env.OWM_KEY;
}

const ModalWeather = props => {
  const { info } = props;

  const [lat] = useState(info.city.geo[0]);
  const [lng] = useState(info.city.geo[1]);

  const [placeName, setPlaceName] = useState("");
  const [temp, setTemp] = useState("");
  const [weather, setWeather] = useState("");

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&id=524901&APPID=${owmKey}`
      );
      res.json().then(res => {
        setPlaceName(res.name);
        setTemp((res.main.temp - 273.15).toFixed(1));
        setWeather(res.weather[0].main);
      });
    }
    fetchData();
  }, [lat, lng]);

  return (
    <div>
      <h3>Weather for {placeName}:</h3>
      <h4>{weather}</h4>
      <h4>Temperature: {temp} °C</h4>
    </div>
  );
};

export default ModalWeather;
