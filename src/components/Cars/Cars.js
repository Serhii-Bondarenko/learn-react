import React, {useEffect, useState} from 'react';

import './cars.css'
import {carService} from "../../services/car.service";
import Car from "../Car/Car";

const Cars = ({newCar, selectCar, updatedCar}) => {

    const [cars, setCars] = useState([]);
    const [deletedCar, setDeletedCar] = useState(null);

    const deleteCar = async (id) => {

        try {
            const ownCar = await carService.deleteById(id)
            setDeletedCar(ownCar);

        } catch (e) {
            console.log(e);
        }
    }


    useEffect(()=> {
        carService.getAll().then(response => setCars([...response]))
    }, [newCar, deletedCar, updatedCar])

    return (
        <div className={"cars__list"}>
            {cars.map(car => <Car key={car.id} car={car} deleteCar={deleteCar} selectCar={selectCar}/>).reverse()}
        </div>
    );
};

export default Cars;