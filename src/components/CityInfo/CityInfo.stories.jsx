import React from 'react'
import CityInfo from './CityInfo'

// Titulo
export default {
    title: "CityInfo",
    component: CityInfo
}

// subitem
export const cityExample = () => <CityInfo city={"Buenos Aires"} country={"Argentina"}></CityInfo>