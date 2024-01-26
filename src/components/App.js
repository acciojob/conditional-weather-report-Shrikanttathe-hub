// // App.js
// import React from 'react';

// const WeatherReport = ({ temperature, conditions }) => {
//   const isAboveThreshold = temperature > 20;
//   const colorStyle = isAboveThreshold ? 'red' : 'blue';

//   return (
//     <div style={{ color: colorStyle }}>
//       <h1>Conditional Weather Report</h1>
//       <p>Temperature: {temperature}</p>
//       <p>Conditions: {conditions}</p>
//     </div>
//   );
// };

// export default WeatherReport;
import React from 'react';
import '../styles/App.css'; // Create this file for additional styling

function WeatherApp({ weather }) {
  const temperatureColor = weather.temperature > 20 ? 'red' : 'blue';

  return (
    <div className="weather-container">
      <h2>Weather Report</h2>
      <div className="temperature" style={{ color: temperatureColor }}>
        Current Temperature: {weather.temperature}°C
      </div>
      <div className="conditions">
        Weather Conditions: {weather.conditions}
      </div>
    </div>
  );
}

function App() {
  const weatherInput = { temperature: 25, conditions: "Sunny" };

  return (
    <div className="App">
      <WeatherApp weather={weatherInput} />
    </div>
  );
}

export default App;
