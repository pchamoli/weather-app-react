import React from 'react'
import Weather from './Weather';

export default {
    title: "Weather",
    component: Weather
}

export const WeatherCloudy = () => <Weather temperature={10} state={"cloud"}/>
export const WeatherSunny = () => <Weather temperature={30} state={"sunny"}/>