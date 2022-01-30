import React from 'react';
import {useDispatch} from 'react-redux';

import {selectForUpdate, removeCar} from '../../store';

const Car = ({car}) => {

    const {id, model, year, price} = car;

    const dispatch = useDispatch();

    const select = () => {
        dispatch(selectForUpdate({car}))
    }

    return (
        <div className='item'>
            <h3>{model}</h3>
            <p>Year: {year}</p>
            <p>Price: {price}</p>
            <div>
                <button onClick={() => dispatch(removeCar({id}))}>Delete</button>
                <button onClick={select}>Select</button>
            </div>
        </div>
    );
};

export {Car};