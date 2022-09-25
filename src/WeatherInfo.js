import React from "react";
import FormatedDate from "./FormatedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

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
           <div className="row mt-2">
                <div className="col-6">
                    <div className="d-flex">
                         <WeatherIcon code={props.data.icon} />
                        <WeatherTemperature celsius={props.data.temperature} />
                    </div>
                </div>
            <div className="col-6">
                <ul>
                    <li>Wind: {Math.round(props.data.wind)} km/h</li>
                    <li>Humidity: {props.data.humidity}%</li>
                </ul>
                </div>
           </div>


        </div>
    )
}