import React, {useState} from "react";

export default function WeatherTemperature(props){
    const[unit,setUnit]=useState("celsius");

    function ShowFahrenheit(event){
        event.preventDefault();
        setUnit("fahrenheit");
    }
    function ShowCelsius(event){
        event.preventDefault();
        setUnit("celsius");
  }
function Fahrenheit(){
    return Math.round(((props.celsius)*9)/5+32);
}

    if (unit === "celsius"){
        return(
            <div className="WeatherTemperature">
                <span className="temperature">
                    {Math.round(props.celsius)}
                </span>
                <span className="units">
                °C |{" "}
                <a href="/" onClick={ShowFahrenheit}>
                °F
                </a>
                </span>
            </div>);
              } else{return(
                <div className="WeatherTemperature">
                    <span className="temperature">
                        {Fahrenheit()}
                    </span>
                    <span className="units">
                    <a href="/" onClick={ShowCelsius}>°C{" "}</a>|{" "}
                     °F
                     </span>
                </div>);
                     }
}