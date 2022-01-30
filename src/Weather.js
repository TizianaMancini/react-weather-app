import React, { useState } from "react";
import axios from "axios";
import "./index.css";

export default function Weather(props) {
  let [weather, setWeather] = useState({});
  let [city, setCity] = useState();
  let [load, setLoad] = useState(false);

  function showTemperature(response) {
    setLoad(true);
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      image: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fc792abbce83245fb7f94d72bd9f905d&units=metric`;
    axios.get(url).then(showTemperature);
  }

  let display = (
    <form onSubmit={handleSubmit} className="mb-3">
      <div className="container">
        <div class="weather-app-wrapper">
          <div className="row">
            <div className="col-6">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                autoComplete="off"
                onChange={updateCity}
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
              <input
                type="submit"
                value="Current Location"
                className="btn btn-warning w-100 current-location-button"
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );

  let currentTemp = (
    <div className="current-temperature">
      <div class="overview">
        <h1 id="city">{city}</h1>

        <ul>
          <li>
            <strong>
              <em> Last updated: </em>
            </strong>
            <span id="date"></span>
          </li>
          <br />
          <li id="description">{weather.description}</li>
        </ul>
      </div>

      <div class="row">
        <div class="col-md-8">
          <div class="clearfix weather-temperature">
            <img src={weather.image} alt={weather.description} id="icon" />

            <strong id="temperature">{Math.round(weather.temperature)}</strong>

            <span class="units">
              <div class="btn-group" role="group" aria-label="Basic example">
                <button
                  type="button"
                  class="btn btn-danger active"
                  id="celsius-link"
                >
                  ºC
                </button>

                <button
                  type="button"
                  class="btn btn-danger"
                  id="fahrenheit-link"
                >
                  ºF
                </button>
              </div>
            </span>
          </div>
        </div>

        <div class="col-4">
          <ul class="weather-details">
            <li>
              <strong>Humidity: </strong>
              <span id="humidity"></span>
              {weather.humidity}%
            </li>
            <li>
              <strong>Wind: </strong>
              <span id="wind"></span> {Math.round(weather.wind)} km/h
            </li>
          </ul>
        </div>
      </div>
      <hr />
    </div>
  );

  if (load) {
    return (
      <div className="container">
        <div class="weather-app-wrapper">
          <div className="weather-app">
            <div className="search-form">{display}</div>
            <div className="current-temperature">{currentTemp}</div>

            <div class="weather-forecast" id="forecast"></div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <div class="weather-app-wrapper">
          <div className="weather-app">
            <div className="search-form">{display}</div>
          </div>
        </div>
      </div>
    );
  }
}
