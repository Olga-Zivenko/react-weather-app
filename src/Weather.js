import React, {useState} from "react";
import axios from "axios";
import  "./Weather.css";

export default function Weather(props) {
     const [weatherData, setWeatherData]=useState({ready:false});
    
    
    function handleResponse (response){
       console.log (response.data); 
       setWeatherData({
        ready:true,
        temperature: response.data.main.temp,
        wind: response.data.wind.speed,
        city: response.data.name,
        humidity: response.data.main.humidity,
        icon:response.data.weather[0].icon,
        date:"Sunday",
        description: response.data.weather[0].description,
    });
       
    }
if (weatherData.ready) {
    return(
        <div className="Weather">
            <form>
               <div className="row">
                <div className="col-9">
                <input type="search" 
                placeholder="Enter a city.." 
                className="form-enterCity"
                autoFocus="on" />
                </div>
                <div className="col-3">
                <input type="submit" value="Search" className="button-search w-100" />
               </div>
               </div>
            </form>
           <h1>
            {weatherData.city}
           </h1>
           <ul>
            <li>{weatherData.date}</li>
            <li>{weatherData.description}</li>
           </ul>
           <div className="row">
            <div className="col-6">
                <img src={weatherData.icon} alt={weatherData.description} />
                <span className="temperature">{Math.round(weatherData.temperature)}</span>
                <span className="units">°C</span> 
            </div>
            <div className="col-6">
                <ul>
                    <li>Wind: {Math.round(weatherData.wind)} m/h</li>
                    <li>Humidity: {weatherData.humidity}%</li>
                </ul>
                </div>
           </div>
        </div>
           )

} else { const apiKey="2fe0053212ae691bfbd1ef61151dca30";
let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);
return "Loading"}

   
   
}