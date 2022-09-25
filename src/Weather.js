import React, {useState} from "react";
import axios from "axios";
import  "./Weather.css";

import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
     const [weatherData, setWeatherData]=useState({ready:false});
    const [city,setCity]=useState(props.defaultCity);
    
    function handleResponse (response){
       console.log (response.data); 
       setWeatherData({
        ready:true,
        temperature: response.data.main.temp,
        wind: response.data.wind.speed,
        city: response.data.name,
        humidity: response.data.main.humidity,
        iconUrl:`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
        date:new Date(response.data.dt*1000),
        description: response.data.weather[0].description,
    });
      
    }
function search(){
    const apiKey="2fe0053212ae691bfbd1ef61151dca30";
    let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading"
}

    function handleSubmit(event){
        event.preventDefault();
        search();
       }

       function handleCityChange (event){
        event.preventDefault();
        setCity(event.target.value);
       }
if (weatherData.ready) {
    return(
        <div className="Weather">
            <form onSubmit={handleSubmit}>
               <div className="row">
                <div className="col-9">
                <input type="search" 
                placeholder="Enter a city.." 
                className="form-enterCity"
                autoFocus="on" 
                onChange={handleCityChange}
                />
                </div>
                <div className="col-3">
                <input type="submit" value="Search" className="button-search w-100"  />
               </div>
               </div>
            </form>
          <WeatherInfo data={weatherData}/>
           
        </div>
           )

} else { search()
return "Loading..."}

   
   
}