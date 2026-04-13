import '../../stylecomponents/main-content-styles/StatsCard.css'

function StatsgridCard({ weather }) {
    return (
        <div className="stats-grid">
            <div className="stats-card">
                <span>Feels like: </span>
                <p>{Math.round(weather?.current?.apparent_temperature)}{weather?.current_units?.apparent_temperature}</p>
            </div>
            <div className="stats-card">
                <span>Humidity: </span>
                <p>{Math.round(weather?.current?.relative_humidity_2m)}{weather?.current_units?.relative_humidity_2m}</p>
            </div>
            <div className="stats-card">
                <span>Wind: </span>
                <p>{Math.round(weather?.current?.wind_speed_10m)} {weather?.current_units?.wind_speed_10m}</p>
            </div>
            <div className="stats-card">
                <span>Precipitation: </span>
                <p>{Math.round(weather?.current?.precipitation)} {weather?.current_units?.precipitation}</p>
            </div>
        </div>
    )
}

export default StatsgridCard;