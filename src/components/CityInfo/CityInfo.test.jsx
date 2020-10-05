import React from 'react';
import {render} from '@testing-library/react';
import CityInfo from "./CityInfo";  // SUT: Subject under testing (objeto del testing)
import { ExpansionPanelActions } from '@material-ui/core';

test("CityInfo render", async () => {
    //AAA
    //Arrange
    //Act
    const city = "Buenos Aires"
    const country = "Argentina"
    
    // PErmite encontrar compnentes por rol
    const {findAllByRole} = render(<CityInfo city={city} country={country}/>)

    // FindAllByRole nos va a buscar (en este caso) los componentes
    // que sean "heading => h1 h2 h3"
    // El resultado es un array de componentes
    const CityAndCountryComponents = await findAllByRole("heading")

    //Assert
    expect(CityAndCountryComponents[0]).toHaveTextContent(city)   
    expect(CityAndCountryComponents[1]).toHaveTextContent(country)   

    // Si ambas condiciones existen el test está ok
})