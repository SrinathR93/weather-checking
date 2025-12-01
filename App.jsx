import { useState } from 'react'
import './App.css'
import Tamil from './components/Tamil.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import Locdetails from './components/Locadetails.jsx'
import Current1 from './components/Current1.jsx'
import Forecast from './components/Forecast.jsx'
import "../node_modules/bootstrap/dist/js/bootstrap.js"




function App() {
  const [cityName, setCityName] = useState('')
  const [location, setLocation] = useState({})
  const [current, setCurrent] = useState({})
  const [forecast, setForecast] = useState({})

  const handleCity = (e) => {
    setCityName(e.target.value)
  }

  const handleFetch = async () => {
    console.log("clicked")
    if (!cityName.trim()) {
      alert("Please enter a valid city name")
      return
    }

    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=83c0b17cb2774eac95723527231501&q=${cityName}&days=7&aqi=no&alerts=no`
      )
      const result = await response.json()
      console.log(result)

      if (result.location) setLocation(result.location)
      if (result.current) setCurrent(result.current)
      if (result.forecast) setForecast(result.forecast)

    } catch (error) {
      console.error("Fetch error:", error)
    }
  }

  return (
    <div className="container bg-primary p-5 mt-5 rounded border border-dark">
      <div className="row">
        {/* search area */}
        <div className="col-1"></div>
        <div className="col-6 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Enter city name"
            onChange={handleCity}
          />
        </div>

        {/* search button */}
        <div className="col-2">
          <button type="button" className="btn btn-light"  style={{ width: "150px" }} onClick={handleFetch}>
            Search
          </button>
        </div>
      </div>
      {/* Weather Display */}
{
      location.name && <Locdetails location={location}/>
}
{
  current && <Current1 current={current}/>

}
{
  forecast && <Forecast forecast={forecast} location={location}/>
}

  </div>
  )
}

export default App
