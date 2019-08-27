import React from "react";

const Footer = () => {
  return (
    <div>
      <footer class="page-footer pt-2 border-top">
        <div class="container-fluid text-center text-md-left" />

        <div class="footer-copyright text-center py-1">
          AQI Data Provided by <a href="https://aqicn.org/">aqicn.org</a>
        </div>
        <div class="footer-copyright text-center py-1">
          Weather Data Provided by{" "}
          <a href="https://openweathermap.org">OpenWeatherMap.org</a>
        </div>
        <div class="footer-copyright text-center py-1">
          Created by <i className="fab fa-twitter" />{" "}
          <a href="https://twitter.com/dvtShea">Shea de Vries-Thomas</a>
        </div>
        <div className="footer-copyright text-center py-1">
          <button type="button" class="btn btn-secondary btn-sm">
            <i className="fab fa-github" /> View Source Code on Github
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
