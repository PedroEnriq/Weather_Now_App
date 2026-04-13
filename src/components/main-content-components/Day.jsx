import { WeatherIcons } from "../../utilities/WeatherIcons";

function Day({ date, max, min, code, unit, isLoading }) {
    
    if (isLoading) {
        return (
            <div className='forecast-day is-loading'>
                <div className="skeleton-box skeleton-text"></div>
                <div className="skeleton-box skeleton-icon"></div>
                <div className="skeleton-box skeleton-temp"></div>
            </div>
        );
    }

    const dayName = new Date(date + 'T00:00:00').toLocaleDateString('en-US', { weekday: 'short' });

    return (
        <div className='forecast-day'>
            <p className="day-name">{dayName}</p>
            <img src={WeatherIcons(code)} alt="weather" className="forecast-icon" />
            <div className="forecast-temps">
                <span className="max-temp">{Math.round(max)}{unit}</span>
                <span className="min-temp">{Math.round(min)}{unit}</span>
            </div>
        </div>
    )
}

export default Day