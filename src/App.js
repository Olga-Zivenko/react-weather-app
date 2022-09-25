import React from "react";
import './App.css';
import Weather from "./Weather";

function App () {
  return (<div className="container">
    <Weather />
    <footer>
      This project was coded by Olga Zivenko and is  
        <a
          className="App-link"
          href="https://github.com/Olga-Zivenko/react-weather-app"
          target="_blank"
          rel="noopener noreferrer"
        >
            open-soursed on GitHub</a>
     
    </footer>
    </div>
  );
}

export default App;
