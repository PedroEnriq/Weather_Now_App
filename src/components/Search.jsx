import Button from "./Button";
import DefeautDropdown from "./DefeautDropdown";
import '../stylecomponents/Search.css'
import iconSearch from '../assets/images/icon-search.svg'
import { useState } from "react";
import iconLoading from '../assets/images/icon-loading.svg'

function Search({ handleSearch, city, error, getWeatherData }) {
  const [value, setValue] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [loading, setLoading] = useState(false);

  const executeSearch = async () => {
    if (value.trim() !== '') {
      setLoading(true);
      setShowDropdown(true);
      try {
        await handleSearch(value);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      executeSearch();
    }
  };

  const selectCity = (cityName, lat, lon, country) => {
    setValue(cityName);      
    setShowDropdown(false); 
    getWeatherData(lat, lon, cityName, country);
  };

  return (
    <div className="search">
      <div className="input-box">
        <img className="icon-search" src={iconSearch} alt="search" />
        <input
          type="text"
          placeholder="Search for a place..."
          onChange={(event) => {
            setValue(event.target.value);
            if (event.target.value === "") setShowDropdown(false);
          }}
          value={value}
          onKeyDown={handleKeyDown}
        />
        {error?(
          <></>
        ):showDropdown && (
          <DefeautDropdown>
            {loading ? (
              <div className="loading-container">
                <img src={iconLoading} alt="loading" className="loading-icon" />
                <p>Search in Progress...</p>
              </div>
            ) : (
              <ul>
                {city.map((c, index) => (
                  <li className="results-filter" key={index} onClick={() => selectCity(c.name, c.lat, c.lon, c.country)}>
                    <p>{c.name}</p>
                  </li>
                ))}
              </ul>
            )}
          </DefeautDropdown>
        )}
      </div>
      <Button onClick={executeSearch} variant="search-btn">Search</Button>
    </div>
  );
}

export default Search;