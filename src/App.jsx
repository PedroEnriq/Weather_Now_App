import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Search from './components/Search'
import MainContent from './components/MainContent'
import './Responsive.css'
import { Geocoding } from './APIs/Geocoding'
import { Forecasting } from './APIs/Forecasting'


function App() {
  const [units, setUnits] = useState({
    temp: 'metric', 
    wind: 'metric', 
    precip: 'metric' 
  });

  const [city, setCity] = useState([])

  const [selectedCity, setSelectedCity] = useState({
    name: '',
    country: '',
    lat: null,
    lon: null
  });

  const [system, setSystem] = useState('imperial')

  const [error, setError] = useState(false);

  const [weather, setWeather] = useState(null);

  // Função para mudar uma unidade específica
  const updateUnit = (category, value) => {
    setUnits(prev => ({ ...prev, [category]: value }));
  };

  const [loading, setLoading] = useState(false);

  
  const toggleSystem = () => {
    setSystem(system === 'metric' ? 'imperial' : 'metric');
    setUnits({
      temp: system,
      wind: system,
      precip: system
    });
  };

  const handleSearch = async (city) => {
    try {
      const data = await Geocoding(city);
      console.log(data.results.map(d=>d.name))
      setCity(data.results.map(d=>({ 
        name: d.name, 
        lat: d.latitude, 
        lon: d.longitude,
        country: d.country
      })));
      setError(false);
    }
    catch (error) {
      console.error('Erro ao buscar cidade:', error);
      setError(true);
      setCity([]);
    }
  }

  const getWeatherData = async (lat, lon, cityName, country) => {
    try {
      setLoading(true);
      console.log(`Buscando dados meteorológicos para ${cityName} (lat: ${lat}, lon: ${lon}), país: ${country})`);
      const weatherData = await Forecasting(lat, lon, units);
      setWeather(weatherData);
      console.log('Dados meteorológicos:', weatherData);
      setSelectedCity({ name: cityName, country: country, lat: lat, lon: lon });
    } catch (error) {
      console.error('Erro ao buscar dados meteorológicos:', error);
      setError(true);
      setSelectedCity({ name: '', country: '', lat: null, lon: null });
    }finally {
      setLoading(false);
    }
  
  };

  useEffect(() => {
  if (selectedCity.name && selectedCity.lat) {
    getWeatherData(selectedCity.lat, selectedCity.lon, selectedCity.name, selectedCity.country);
  }
}, [units]); 

  return (
    <div className='weatherApp'>
      <Header units={units} updateUnit={updateUnit} system={system} toggleSystem={toggleSystem} />
      <h1 className='main-title'>How's the sky looking today?</h1>
      <Search handleSearch={handleSearch} city={city} error={error} getWeatherData={getWeatherData}/>
      {error?(
        <h1 className="no-result-found">No search results found.</h1>
      ):(<>
        <MainContent weather={weather} selectedCity={selectedCity} isLoading={loading} />
      </>)}
    </div>
  );
}

export default App
