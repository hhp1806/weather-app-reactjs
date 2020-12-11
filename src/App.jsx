import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import getImageForWeather from './utils/getImageForWeather.js'
import { fetchWeather } from './utils/api.js'

function App() {
  const [city, setCity] = useState('')
  const [data, setData] = useState({
    location: 'Danang',
    weather: 'Clear',
    temperature: 25,
  });

  function handleInputChange(e) {
    setCity(e.target.value)
  }

  function handleButtonClick(e) {
    console.log('Search', city)
    handleGetData()
  }

  function handleKeyPress(e){
    if(e.key === 'Enter'){
      handleGetData()
    }
  }

  async function handleGetData(e){
    const response = await fetchWeather(city.toLowerCase())
    if(!response){
      alert('Location not found!')
      return
    } 
    console.log('response', response)
    setData(response)
    setCity('')
  }

  return (
    <div className="App">
      <img src={getImageForWeather(data.weather)} alt="weather" ></img>
      <p>{data.location}</p>
      <p>{data.weather}</p>
      <p>{data.temperature}&#176;C</p>

      <div>
        <input placeholder="Search City" value={city} onChange={handleInputChange} onKeyPress={handleKeyPress}></input>
        <button onClick={handleButtonClick}>Search</button>
      </div>
    </div>
  );
}

export default App;

// class component
// lifecircle methods
