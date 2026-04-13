import Button from "../Button"
import iconDropdown from "../../assets/images/icon-dropdown.svg"
import HourCard from "./HourCard"
import '../../stylecomponents/main-content-styles/HourlyForecast.css'
import { useState } from "react"

function HourlyForecast({ weather, isLoading }) {
  const [open, setOpen] = useState(false);
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);

  if (!isLoading && (!weather || !weather.hourly)) return null;

  const getDayName = (dateString) => {
    if (!dateString) return "";
    return new Date(dateString + 'T00:00:00').toLocaleDateString('en-US', { weekday: 'long' });
  };

  if (isLoading) {
    return (
      <div className="hourly-forecast is-loading">
        <div className="hourly-header">
          <p className="title-hourly">Hourly forecast</p>
          <Button variant='day-button day-button-loading'>
            <div className="skeleton-pill">--</div>
            <img className="dropicon" src={iconDropdown} alt="" />
          </Button>
        </div>

        <div className="hourly-cards-container">

          {[...Array(8)].map((_, i) => (
            <div key={i} className="hour-card hour-card-loading">
              <div className="hour-info">
                <div className="skeleton-circle"></div>

                <div className="skeleton-text-small"></div>
              </div>

              <div className="skeleton-text-medium"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const { time } = weather.daily;
  const startIndex = selectedDayIndex * 24;
  const endIndex = (selectedDayIndex + 1) * 24;
  const hourlyTimes = weather.hourly.time.slice(startIndex, endIndex);
  const hourlyTemps = weather.hourly.temperature_2m.slice(startIndex, endIndex);
  const hourlyCodes = weather.hourly.weather_code.slice(startIndex, endIndex);
  const unit = weather.hourly_units.temperature_2m;

  return (
    <div className="hourly-forecast">
      <div className="hourly-header">
        <p className="title-hourly">Hourly forecast</p>
        <Button variant='day-button' onClick={() => { setOpen(!open) }}>
          {getDayName(time[selectedDayIndex])}
          <img className="dropicon" src={iconDropdown} alt="" />
        </Button>
      </div>

      {open && (
        <ul className="hourly-dropdown-list">
          {time.map((date, index) => (
            <li key={date} className="results-filter" onClick={() => { setSelectedDayIndex(index); setOpen(false); }}>
              {getDayName(date)}
            </li>
          ))}
        </ul>
      )}

      <div className="hourly-cards-container">
        {hourlyTimes.map((hTime, index) => (
          <HourCard key={hTime} time={hTime} temp={hourlyTemps[index]} code={hourlyCodes[index]} unit={unit} />
        ))}
      </div>
    </div>
  )
}

export default HourlyForecast;