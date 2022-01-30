import React, {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import {joiResolver} from '@hookform/resolvers/joi';

import css from './carsForm.module.css';
import {createCar, updateCar} from '../../store';
import {carValidator} from '../../validator';

const CarsForm = () => {

    const dispatch = useDispatch();

    const {selectedCar} = useSelector(state => state['carReducer']);
    const {id, model, year, price} = selectedCar;

    const [btn, setBtn] = useState(true);

    const {
        handleSubmit,
        register,
        reset,
        setValue,
        formState: {errors}
    } = useForm({resolver: joiResolver(carValidator), mode: 'onTouched'});

    useEffect(() => {
        setValue('model', model);
        setValue('year', year);
        setValue('price', price);
    }, [selectedCar]);

    useEffect(() => {
        btn && reset();
    }, [btn])

    const submit = (data) => {
        if (!btn) {
            dispatch(updateCar({id, data}));
            reset();
            return;
        }

        dispatch(createCar({data}))
        reset();
    }

    return (
        <>
            <div className={css.formWrap}>
                <form className={css.form} onSubmit={handleSubmit(submit)}>
                    <label>Model:<input type='text' {...register('model')}/></label>
                    {errors.model && <span>{errors.model.message}</span>}

                    <label>Year:<input type='text' {...register('year')}/></label>
                    {errors.year && <span>{errors.year.message}</span>}

                    <label>Price:<input type='text' {...register('price')}/></label>
                    {errors.price && <span>{errors.price.message}</span>}
                    <div>
                        <label>
                            Update
                            <input type='checkbox' checked={!btn} onChange={() => setBtn(!btn)}/>
                        </label>
                    </div>
                    <button type={'submit'}>{btn ? 'Create' : 'Update'}</button>
                </form>
            </div>
            <hr/>
        </>
    );
};

export {CarsForm};