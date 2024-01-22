// App.js
import React from 'react';

const WeatherReport = ({ temperature, conditions }) => {
  const isAboveThreshold = temperature > 20;
  const colorStyle = isAboveThreshold ? 'red' : 'blue';

  return (
    <div style={{ color: colorStyle }}>
      <h1>Weather Report</h1>
      <p>Temperature: {temperature}°C</p>
      <p>Conditions: {conditions}</p>
    </div>
  );
};

export default WeatherReport;
