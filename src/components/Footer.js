import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="page-footer pt-2 text-center border-top">
        <p className="mt-3">Search for any city's Air Quality Index.</p>
        <p>
          Try searching for Toronto, Paris, Beijing, New Delhi, or anywhere in
          between.
        </p>
        <hr className="w-25" />

        <div className="footer-copyright text-center py-1">
          AQI Data Provided by <a href="https://aqicn.org/">aqicn.org</a>
        </div>
        <div className="footer-copyright text-center py-1">
          Weather Data Provided by{" "}
          <a href="https://openweathermap.org">OpenWeatherMap.org</a>
        </div>
        <div className="footer-copyright text-center py-1">
          Created by <i className="fab fa-twitter" />{" "}
          <a href="https://twitter.com/dvtShea">Shea de Vries-Thomas</a>
        </div>
        <div className="footer-copyright text-center py-1">
          <a
            href="https://github.com/dvtShea/cleanAirMap"
            className="btn btn-secondary btn-sm"
          >
            <i className="fab fa-github" /> View Source Code on Github
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
