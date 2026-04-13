// Forecasting.jsx
export async function Forecasting(lat, lon, units) {
    const tempUnit = units.temp === 'metric' ? 'celsius' : 'fahrenheit';
    const windUnit = units.wind === 'metric' ? 'kmh' : 'mph';
    const precipUnit = units.precip === 'metric' ? 'mm' : 'inch';

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}` +
    `&current=temperature_2m,weather_code,apparent_temperature,relative_humidity_2m,precipitation,wind_speed_10m` + 
    `&daily=weather_code,temperature_2m_max,temperature_2m_min` + // Adicionado daily
    `&hourly=temperature_2m,weather_code` +
    `&timezone=auto` + // Importante para as datas virem no fuso horário correto
    `&temperature_unit=${tempUnit}` +
    `&wind_speed_unit=${windUnit}` +
    `&precipitation_unit=${precipUnit}`;

    const response = await fetch(url);
    const data = await response.json();
    return data;
}