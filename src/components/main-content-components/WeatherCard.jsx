import { WeatherIcons } from "../../utilities/WeatherIcons";  

function WeatherCard({ weather, selectedCity}) {
  

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }

  return (
    <div className="weather-card">
      {weather && (
        <>
          <div className="location">
            <h2>{selectedCity.name}, {selectedCity.country}</h2>
            <h3>{new Date().toLocaleDateString('en-US', options)}</h3>
          </div>
          
          <div className="temperature">
            <img className="weather-icon" src={WeatherIcons(weather.current?.weather_code)} alt="Weather icon" />
            <h1>{Math.round(weather.current?.temperature_2m)}°</h1>
          </div>
        </>
      )}
    </div>
  )
}
export default WeatherCard;