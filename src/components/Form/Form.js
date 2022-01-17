import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import './form.css'
import {carService} from "../../services/car.service";
import {carValidator} from "../../validator/carValidator";

const Form = ({setNewCar, newCar}) => {

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm({resolver: joiResolver(carValidator), mode: "onTouched"});


    const submit = async (car) => {
        const carWithId = await carService.create(car);
        await setNewCar(carWithId);
        reset();
    }

    return (
        <div className={'create-form'}>

            {newCar && <div className={'new-car'}>модель <h3>"{newCar.model}"</h3> збережена успішно !</div>}

            <form className={'form'} onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder="Модель" defaultValue={''} {...register('model')} />
                {/*{formError.model && <span className={'error'}>{formError.model[0]}</span>}*/}
                {errors.model && <span className={'error'}>{errors.model.message}</span>}

                <input type="text" placeholder="Рік виробництва" defaultValue={''} {...register('year')}/>
                {/*{formError.year && <span className={'error'}>{formError.year[0]}</span>}*/}
                {errors.year && <span className={'error'}>{errors.year.message}</span>}

                <input type="text" placeholder="Ціна" defaultValue={''} {...register('price')}/>
                {/*{formError.price && <span className={'error'}>{formError.price[0]}</span>}*/}
                {errors.price && <span className={'error'}>{errors.price.message}</span>}

                <button className={'save'}>Save</button>
            </form>
        </div>
    );
};

export default Form;