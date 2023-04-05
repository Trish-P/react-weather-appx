import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by{" "}
          <a href=" " target="_blank">
            Trish Patel
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
