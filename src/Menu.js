import React from "react";
import "./App.css";


export default function Menu() {
  return (
    <div className="App">
      <div className="row explanations">
        <div className="col-3">Day</div>
        <div className="col-3">Weather</div>
        <div className="col-2">Wind</div>
        <div className="col-2">
          <span className="units">°C</span>
        </div>
      </div>
    </div>
  );
}
