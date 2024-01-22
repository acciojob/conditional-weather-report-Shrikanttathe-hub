import React from "react";
import ReactDOM from "react-dom";
import WeatherReport from "./components/App";

const weatherInput = { temperature: 25, conditions: 'Sunny' }

ReactDOM.render(
    <WeatherReport temperature={weatherInput.temperature}  conditions={weatherInput.conditions}/>,
     document.getElementById('root')
     );
