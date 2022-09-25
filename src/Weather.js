import React from "react";
import  "./Weather.css";

export default function Weather() {
    return(
        <div className="Weather">
            <form>
               <div className="row">
                <div className="col-4">
                <input type="search" 
                placeholder="Enter a city.." 
                className="form-enterCity" />
                </div>
                <div className="col-2">
                <input type="submit" value="Search" className="button-search" />
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
                17°C
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