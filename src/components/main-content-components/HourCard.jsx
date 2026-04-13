import { WeatherIcons } from "../../utilities/WeatherIcons";

function HourCard({ time, temp, code, unit }) {
 
  const formattedTime = new Date(time).toLocaleTimeString('en-US', {
    hour: 'numeric',
    hour12: true
  });

  return (
    <div className="hour-card">
      < div className="hour-info">
        <img
          src={WeatherIcons(code)}
          alt="Weather icon"
          className="hour-icon"
        />
        <p className="hour-time">{formattedTime}</p>
      </div>

      <p className="hour-temp">{Math.round(temp)}{unit}</p>
    </div>
  )
}

export default HourCard