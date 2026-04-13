import '../stylecomponents/DropdownMenu.css'
import iconcheck from '../assets/images/icon-checkmark.svg'
import Button from './Button'

function DropdownMenu({ open, units, updateUnit,system, toggleSystem }) {
  
  if (!open) return null;

  const isTempMetric = units.temp === 'metric';
  const isWindMetric = units.wind === 'metric';
  const isPrecipMetric = units.precip === 'metric';

  return (
    <div className='dropdown-container'>
      <div className='dropdown-menu'>
        <Button variant='switch' onClick={toggleSystem}>
          {system === 'imperial' ? 'Switch to Imperial' : 'Switch to Metric'}
        </Button>


        <ul className='medida'>
          <span>Temperature</span>
          <li>
            <Button 
              variant={`medida-opt ${isTempMetric ? 'active' : ''}`} 
              onClick={() => updateUnit('temp', 'metric')}
            >
              <p>Celsius (°C)</p>
              {isTempMetric && <img src={iconcheck} alt="selected" />}
            </Button>
          </li>
          <li>
            <Button 
              variant={`medida-opt ${!isTempMetric ? 'active' : ''}`} 
              onClick={() => updateUnit('temp', 'imperial')}
            >
              <p>Fahrenheit (°F)</p>
              {!isTempMetric && <img src={iconcheck} alt="selected" />}
            </Button>
          </li>
        </ul>
        <ul className='medida'>
          <span>Wind Speed</span>
          <li>
            <Button 
              variant={`medida-opt ${isWindMetric ? 'active' : ''}`} 
              onClick={() => updateUnit('wind', 'metric')}
            >
              <p>km/h</p>
              {isWindMetric && <img src={iconcheck} alt="selected" />}
            </Button>
          </li>
          <li>
            <Button 
              variant={`medida-opt ${!isWindMetric ? 'active' : ''}`} 
              onClick={() => updateUnit('wind', 'imperial')}
            >
              <p>mph</p>
              {!isWindMetric && <img src={iconcheck} alt="selected" />}
            </Button>
          </li>
        </ul>
        <ul className='medida precipitation'>
          <span>Precipitation</span>
          <li>
            <Button 
              variant={`medida-opt ${isPrecipMetric ? 'active' : ''}`} 
              onClick={() => updateUnit('precip', 'metric')}
            >
              <p>Millimeters (mm)</p>
              {isPrecipMetric && <img src={iconcheck} alt="selected" />}
            </Button>
          </li>
          <li>
            <Button 
              variant={`medida-opt ${!isPrecipMetric ? 'active' : ''}`} 
              onClick={() => updateUnit('precip', 'imperial')}
            >
              <p>Inches (in)</p>
              {!isPrecipMetric && <img src={iconcheck} alt="selected" />}
            </Button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default DropdownMenu