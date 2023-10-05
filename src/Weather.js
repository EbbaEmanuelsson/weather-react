import React from "react";
import axios from "axios";

export default function Weather(props){

    function showTemperature(response){
        alert(`It is ${response.data.main.temp}°C in ${response.data.name}`);
    }

    let apiKey ="b9ba0314a93083136d968577c718e31d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemperature)
    return(
        <h4>Hello from weather</h4>
    )
}