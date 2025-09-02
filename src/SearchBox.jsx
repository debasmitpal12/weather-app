import { useState } from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import './SearchBox.css';

export function SearchBox({ updateWeatherInfo }) {  
  let [city, setCity] = useState("");

  const API_URL = "http://api.weatherapi.com/v1/current.json";
  const API_KEY = "3935c4b0f811401cad0142702250209"; // your WeatherAPI key

  let fetchWeather = async (city) => {
    try {
      let response = await fetch(`${API_URL}?key=${API_KEY}&q=${city}`);
      let data = await response.json();
      console.log(data);

      if (data.error) {
        alert("City not found!");
        return null;
      } else {
        // 
        const info = {
          city: data.location.name,
          temp_c: data.current.temp_c,
          heatindex_c: data.current.feelslike_c, 
          wind_kph: data.current.wind_kph,
          humidity: data.current.humidity,
          condition: data.current.condition.text,
        };

        // 
        updateWeatherInfo(info);

        return info;
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  let handleChange = (e) => {
    setCity(e.target.value);
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    await fetchWeather(city);
    setCity(""); // clear input after submit
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="City Name"
          value={city}
          variant="outlined"
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <Button type="submit" variant="contained" endIcon={<SendIcon />}>
          Submit
        </Button>
      </form>
    </div>
  );
}

export default SearchBox;
