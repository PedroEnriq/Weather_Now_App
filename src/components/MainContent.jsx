import '../stylecomponents/MainContent.css'
import WeatherCard from './main-content-components/WeatherCard';
import StatsgridCard from './main-content-components/StatsgridCard';
import DailyForecast from './main-content-components/DailyForecast';
import HourlyForecast from './main-content-components/HourlyForecast';

function MainContent({ weather, selectedCity, isLoading }) {

  if (!weather && !isLoading) {
    return null;
  }

  return (
    <div className='main-content'>
      {isLoading ? (
        <>
          <div className="main-loading-container">
            <p className='dots'>
              <span>.</span>
              <span>.</span>
              <span>.</span>
            </p>
            <p className="loading-text">Loading...</p>
          </div>
          <div className="skeleton-stats stats-grid">
            <div className="stats-card skeleton"></div>
            <div className="stats-card skeleton"></div>
            <div className="stats-card skeleton"></div>
            <div className="stats-card skeleton"></div>
          </div>
          
          <DailyForecast weather={weather} isLoading={isLoading} />
          <HourlyForecast weather={weather} isLoading={isLoading} />
        </>
      ) : (
        <>
          <WeatherCard weather={weather} selectedCity={selectedCity} />
          <StatsgridCard weather={weather} />
          <DailyForecast weather={weather} isLoading={isLoading} />
          <HourlyForecast weather={weather} isLoading={isLoading} />
        </>
      )}
    </div>
  )
}

export default MainContent;