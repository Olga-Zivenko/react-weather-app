import React from "react";
import './App.css';
import Weather from "./Weather";

function App () {
  return (
  <div className="App">
  <div className="container">
    <Weather defaultCity="Kyiv"/>
    <footer>
      This project was coded by Olga Zivenko and is {" "}  
        <a
          className="App-link"
          href="https://github.com/Olga-Zivenko/react-weather-app"
          target="_blank"
          rel="noopener noreferrer"
        >
            open-sourced on GitHub {""}</a>{""}
            and {""}
            <a
          className="App-link"
          href="https://voluble-unicorn-31ad17.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
            hosted on Netlify</a>
    </footer>
    </div>
    </div>
  );
}

export default App;
