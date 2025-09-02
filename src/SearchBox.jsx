import { useState } from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import './SearchBox.css';

export function SearchBox({ updateWeatherInfo }) {
  const [city, setCity] = useState("");

  const API_URL = "http://api.weatherapi.com/v1/current.json";
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  const fetchWeather = async (cityName) => {
  try {
    if (!cityName) return;
    const response = await fetch(`${API_URL}?key=${API_KEY}&q=${cityName}`);
    const data = await response.json();

    if (data.error) {
      alert("City not found!");
      return;
    }

    const info = {
      city: data.location.name,
      temp_c: data.current.temp_c,
      heatindex_c: data.current.feelslike_c,
      wind_kph: data.current.wind_kph,
      humidity: data.current.humidity,
      condition: data.current.condition.text,
    };

    updateWeatherInfo(info); // Pass data to parent
  } catch (error) {
    console.error(error);
  }
};


  const handleChange = (e) => setCity(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    await fetchWeather(city);
    setCity(""); // Optionally clear the input field
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
