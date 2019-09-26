import React, { useState, useEffect } from "react";

const owmKey = process.env.REACT_APP_OWM_KEY;

const ModalWeather = props => {
  const { info } = props;

  const [lat] = useState(info.city.geo[0]);
  const [lng] = useState(info.city.geo[1]);

  const [placeName, setPlaceName] = useState("");
  const [temp, setTemp] = useState("");
  const [weather, setWeather] = useState("");

  useEffect(() => {
    // memory leak cleanup
    const abortController = new AbortController();
    const signal = abortController.signal;

    async function fetchData() {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&id=524901&APPID=${owmKey}`,
        { signal: signal }
      );
      res
        .json()
        .then(res => {
          setPlaceName(res.name);
          setTemp((res.main.temp - 273.15).toFixed(1));
          setWeather(res.weather[0].main);
        })
        .catch(err => {
          console.log(err);
        });
    }
    fetchData();

    return function cleanup() {
      abortController.abort();
    };
  }, [lat, lng]);

  return (
    <div className="card">
      <div className="card-body">
        <h3>Weather for {placeName}:</h3>
        <h4>{weather}</h4>
        <h4>Temperature: {temp} °C</h4>
      </div>
    </div>
  );
};

export default ModalWeather;
