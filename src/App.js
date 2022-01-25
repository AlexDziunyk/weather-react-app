import {useState, useEffect} from 'react'
import WeatherItem from './Components/WeatherItem.js'
import {Routes, Route} from 'react-router-dom'
import WeatherDetails from './Components/WeatherDetails.js'
import  './App.css'


  function App() 
  {
  
    const [weatherData, setWeatherData] = useState([])
    const [infoCity, setInfoCity] = useState([])
    const [inputText, setInputText] = useState('Lviv')


    useEffect(() => {
      fetch(`http://api.weatherapi.com/v1/forecast.json?key=9f8b6bcc1139454182d232952222201&q=${inputText}&days=3`)
      .then(response => response.json())
      .then(data => {
        setWeatherData(data.forecast.forecastday)
        setInfoCity(data.location)
        // console.log(data.forecast.forecastday)
        // console.log(data.location)
        
      })
    }, [inputText])

    

    
    

  

  return (
    <div>
      
      
     
      <Routes>
        
        <Route path="/weather-react-app" element={<div>
          <input className="inputClass" value={inputText} onChange={((event) => setInputText(event.target.value))}></input>
          <WeatherItem  city={infoCity.name} country={infoCity.country} weather={weatherData}></WeatherItem>
        </div>}>
        
        </Route>
      
        
        {weatherData.map((data, index) => {
          return (
          <Route  key={index} path={`/${data.date}`} element={<WeatherDetails weather={data}  country={infoCity.country} city={infoCity.name} />}></Route>
        )
        })}
          
      </Routes>
    
      </div>
  );
}

export default App;
