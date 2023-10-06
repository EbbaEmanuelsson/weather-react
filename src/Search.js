import React, { useState } from "react";
import "./App.css";
import Menu from "./Menu"; 
import axios from "axios";

export default function Search() {
  let [city, setCity] = useState("");
  let [temperature, setTemperature] = useState({});

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "b9ba0314a93083136d968577c718e31d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemperature);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function showTemperature(response) {
    setTemperature({
      temp: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }
  if (temperature){
  return (
    <div className="App">
      <h1>
        {city} {temperature.description}
      </h1>
      <form id="search-form" className="Search" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-3">
            <button type="button" className="btn btn-light">
              📍
            </button>
          </div>
          <div className="col-2"></div>
          <div className="col-5">
            <div className="input-group">
              <input
                type="search"
                onChange={updateCity}
                placeholder="Search for a city"
                autocomplete="off"
                id="search-text-input"
                className="form-control"
              />
            </div>
          </div>
          <div className="col-2">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <Menu />
      <div className="row menu">
        <div className="col-3">
          <p>
            <strong className="day" id="day">
              Friday
            </strong>
            <br />
            <small className="wind-time-temp" id="time">
              13:44
            </small>
          </p>
        </div>
        <div className="col-3">
          <img
            src={temperature.icon}
            alt={temperature.description}
            id="icon"
            class="icon"
          />
        </div>
        <div className="col-2 wind-time-temp" id="wind">
          {Math.round(temperature.wind)}km/h
        </div>
        <div className="col-2 wind-time-temp" id="temperature">
          {Math.round(temperature.temp)}°C
        </div>
        <div className="col-1"></div>
        <div className="col-1">
          <button type="button" className="btn btn-light">
            »
          </button>
        </div>
      </div>
    </div>
  );};
}

