import React from 'react';
import {render, fireEvent} from '@testing-library/react'
import App from './App';
import AddPlayerForm from './components/AddPlayerForm'

test ("renders correctly", () => {
    render(<App />);
});

test ("renders correctly", () => {
    render(<AddPlayerForm />);
});

test("add a new player form accepts and processes the inputted info", () =>{
    const {getByLabelText,getByText} = render (<App/>);

    const nameInput = getByLabelText(/name/i);
    const countryInput = getByLabelText(/country/i);
    const searchesInput = getByLabelText(/searches/i);


    fireEvent.change(nameInput,{
        target: {name: "name", value: "djon"}
    });
    fireEvent.change(countryInput,{
        target: {name: "country", value: "Mexico"}
    });
    fireEvent.change(searchesInput,{
        target: {name: "searches", value: "3"}
    });

    const submitButton = getByText(/submit/i);
    fireEvent.click(submitButton)
});