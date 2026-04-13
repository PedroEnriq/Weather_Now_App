import '../../stylecomponents/main-content-styles/DailyForecast.css'
import Day from './Day'

function DailyForecast({ weather, isLoading }) {
    if (isLoading) {
        return (
            <div className='daily-forecast'>
                <p className='title-daily'>Daily forecast</p>
                <div className='date-weather'>
                    {[...Array(7)].map((_, index) => (
                        <Day key={index} isLoading={true} />
                    ))}
                </div>
            </div>
        );
    }

    if (!weather || !weather.daily) return null;

    const { time, temperature_2m_max, temperature_2m_min, weather_code } = weather.daily;

    return (
        <div className='daily-forecast'>
            <p className='title-daily'>Daily forecast</p>
            <div className='date-weather'>
                 {time.map((date, index) => (
                <Day
                    key={date}
                    date={date}
                    max={temperature_2m_max[index]}
                    min={temperature_2m_min[index]}
                    code={weather_code[index]}
                    unit={weather.daily_units.temperature_2m_max}
                    isLoading={false}
                />
            ))}
            </div>
        </div>
    )
}

export default DailyForecast