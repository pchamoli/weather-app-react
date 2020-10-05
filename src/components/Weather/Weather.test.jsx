import React from 'react'
import Weather from './weather';
import {render} from '@testing-library/react'


test("Weather render", async () => {
    const {findByRole} = render(<Weather temperature={10}/>)
    const temp = await findByRole("heading")

    expect(temp).toHaveTextContent("10")
})