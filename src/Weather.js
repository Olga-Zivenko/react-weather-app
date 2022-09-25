import React from "react";
import  "./Weather.css";

export default function Weather() {
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
            Kyiv
           </h1>
           <ul>
            <li>Sunday 14:40</li>
            <li>Partly cloudy</li>
           </ul>
           <div className="row">
            <div className="col-6">
                <img src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png" alt="Partly Cloudy" />
                <span className="temperature">17</span>
                <span className="units">°C</span> 
            </div>
            <div className="col-6">
                <ul>
                    <li>Wind: 5 m/h</li>
                    <li>Humidity: 50%</li>
                </ul>
                </div>
           </div>
        </div>
       

    )
}