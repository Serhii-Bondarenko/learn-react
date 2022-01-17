import React, {useState} from 'react';

import './App.css';
import Form from "./components/Form/Form";
import Cars from "./components/Cars/Cars";
import UpdateForm from "./components/Form/UpdateForm";
import {carService} from "./services/car.service";

const App = () => {

    const [newCar, setNewCar] = useState(null);
    const [chousenCar, setChousenCar] = useState(null);
    const [updatedCar, setUpdatedCar] = useState(null)

    const selectCar = (id) => {
        carService.geyById(id)
            .then(value => {
                setChousenCar(value)
            })
    }

    return (
        <div className={'wrapper'}>
            <div className={'forms'}>
                <Form setNewCar={setNewCar} newCar={newCar}/>
                <UpdateForm chousenCar={chousenCar} setUpdatedCar={setUpdatedCar}/>
            </div>
            <Cars newCar={newCar} selectCar={selectCar} updatedCar={updatedCar}/>
        </div>
    );
};

export default App;