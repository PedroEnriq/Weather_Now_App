import drizzle from '../assets/images/icon-drizzle.webp';
import rain from '../assets/images/icon-rain.webp';
import snow from '../assets/images/icon-snow.webp';
import fog from '../assets/images/icon-fog.webp';
import sunny from '../assets/images/icon-sunny.webp';
import storm from '../assets/images/icon-storm.webp';
import overcast from '../assets/images/icon-overcast.webp';
import partlyCloudy from '../assets/images/icon-partly-cloudy.webp';

export const WeatherIcons = (code) => {
    switch (true) {
        case (code === 0):
            return sunny;
        case (code >= 1 && code <= 2):
            return partlyCloudy;
        case (code === 3):
            return overcast;
        case (code >= 45 && code <= 48):
            return fog;
        case (code >= 51 && code <= 55):
            return drizzle;
        case (code >= 61 && code <= 67):
            return rain;
        case (code >= 71 && code <= 77):
            return snow;
        case (code >= 80 && code <= 82):
            return rain;
        case (code >= 85 && code <= 86):
            return snow;
        case (code >= 95 && code <= 99):
            return storm;
        default:
            return sunny;

    }
}
