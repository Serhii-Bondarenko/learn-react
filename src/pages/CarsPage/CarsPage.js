import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {getAllCars} from '../../store';
import {Car, CarsForm, Loader} from '../../components';

const CarsPage = () => {

    const {cars, status, error, updatedCar} = useSelector(state => state['carReducer']);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCars())
    }, [updatedCar]);

    return (
        <div className='wrap-list'>
            <CarsForm/>
            {status === 'loading' && <Loader/>}
            {status === 'creating' && <h2>Creating...</h2>}
            {status === 'rejected' && <div><h3>Ooops something wrong</h3><h4>{error}</h4></div>}
            {status === 'removeError' && <h3>This car has been removed</h3>}
            {status === 'updateError' && <h3>Updating car has been removed</h3>}
            <div className={'list'}>
                {cars.map(car => <Car key={car.id} car={car}/>)}
            </div>
        </div>
    );
};

export {CarsPage};