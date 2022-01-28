import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";
import "./index.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <form id="search-form" className="mb-3">
              <div className="row">
                <div className="col-6">
                  <input
                    type="search"
                    placeholder="Enter a city"
                    className="form-control"
                    id="city-input"
                    autoComplete="off"
                  />
                </div>

                <div className="col-3">
                  <input
                    type="submit"
                    value="Search"
                    className="btn btn-success w-100"
                  />
                </div>

                <div className="col-3">
                  <button
                    className="btn btn-warning w-100 current-location-button"
                    id="current-location-button"
                  >
                    Current Location
                  </button>
                </div>
              </div>
            </form>

            <div className="overview">
              <h1 id="city"></h1>

              <ul>
                <li>
                  <strong>
                    {" "}
                    <em> Last updated: </em>
                  </strong>
                  <span id="date"></span>
                </li>
                <br />
                <li id="description"></li>
              </ul>
            </div>

            <div className="row">
              <div className="col-md-8">
                <div className="clearfix weather-temperature">
                  <img src="" alt="" id="icon" />

                  <strong id="temperature"></strong>

                  <span className="units">
                    <div
                      className="btn-group"
                      role="group"
                      aria-label="Basic example"
                    >
                      <button
                        type="button"
                        className="btn btn-danger active"
                        id="celsius-link"
                      >
                        ºC
                      </button>

                      <button
                        type="button"
                        className="btn btn-danger"
                        id="fahrenheit-link"
                      >
                        ºF
                      </button>
                    </div>
                  </span>
                </div>
              </div>

              <div className="col-4">
                <ul className="weather-details">
                  <li>
                    <strong>Humidity: </strong>
                    <span id="humidity"></span>%
                  </li>
                  <li>
                    <strong>Wind: </strong>
                    <span id="wind"></span> km/h
                  </li>
                </ul>
              </div>
            </div>

            <hr />

            <div className="weather-forecast" id="forecast"></div>
          </div>
          <br />
          <small>
            <a
              href="https://github.com/TizianaMancini/Weather-App"
              target="_blank"
            >
              Open-source code
            </a>
            by Tiziana Mancini
          </small>
        </div>
      </div>
      <Weather />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
