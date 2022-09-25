import React from "react";
import FormatedDate from "./FormatedDate";

export default function WeatherInfo(props){
    return(
        <div className="WeatherInfo">
<h1>
            {props.data.city}
           </h1>
           <ul>
            <li>
                <FormatedDate date={props.data.date} /> </li>
            <li>{props.data.description}</li>
           </ul>
           <div className="row">
            <div className="col-6">
                <img src={props.data.icon} alt={props.data.description} />
                <span className="temperature">{Math.round(props.data.temperature)}</span>
                <span className="units">°C</span> 
            </div>
            <div className="col-6">
                <ul>
                    <li>Wind: {Math.round(props.data.wind)} m/h</li>
                    <li>Humidity: {props.data.humidity}%</li>
                </ul>
                </div>
           </div>


        </div>
    )
}