import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit] = useState("celsius");
  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celcius)}</span>
        <span className="unit">°C</span>
      </div>
    );
  }
}
