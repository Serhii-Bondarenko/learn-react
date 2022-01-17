import React from 'react';

import './car.css'

const Car = ({car: {id, model, price, year}, deleteCar, selectCar}) => {

    return (
        <div className={"car"}>
            <p>id: {id}</p>
            <p>model: {model}</p>
            <p>price: {price} $</p>
            <p>year: {year}</p>

            <button className={'btn-danger'} onClick={()=>deleteCar(id)}>Delete</button>
            <button onClick={()=> selectCar(id)}>Select for update</button>
        </div>
    );
};

export default Car;