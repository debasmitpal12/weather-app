import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from 'react'
export function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState(
        {city: "Delhi",
        temp_c: "24.8",
        heatindex_c: "24.8",
        wind_kph: "90kmph",
        humidity: "mild",
        condition: "dusty",}
    );
    let updateWeatherInfo=(result)=>{
        setWeatherInfo(result);
    }
  return (
    <div>
        <h1>Weather App</h1>
        <SearchBox updateWeatherInfo={updateWeatherInfo}/>
        <br />
        <br />
        <InfoBox info={weatherInfo}/>
    </div>
  )
}
