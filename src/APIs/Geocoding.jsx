import React from 'react'

export async function Geocoding(city) {
    const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=4&language=en&format=json`);
    const data = await response.json();
    return data;
}
