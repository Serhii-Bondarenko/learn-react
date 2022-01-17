import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi/dist/joi";

import {carValidator} from "../../validator/carValidator";
import {carService} from "../../services/car.service";

const UpdateForm = ({chousenCar, setUpdatedCar}) => {

    const [patchCar, setPatchCar] = useState(null)

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm({resolver: joiResolver(carValidator), mode: "onTouched"});

    const updateCar = async (car) => {
        const refreshCar = await carService.updateById(chousenCar.id, car);
        await setUpdatedCar(refreshCar);
        await setPatchCar(refreshCar);
        reset();
    }

    return (
        <div className={'update-form'}>

            {patchCar && <div className={'updated-car'}>
                Оновлено car:
                <p>id: {patchCar.id}</p>
                <p>model: {patchCar.model}</p>
            </div>}

            {chousenCar ? <div>
                Машина для модифікації <span className={'chousenCarID'}>id: {chousenCar.id}</span>
            </div> : <h3>Оберіть машину для модифікації</h3>}

            <form className={'form'} onSubmit={handleSubmit(updateCar)}>
                <label>
                    {chousenCar ? `${chousenCar.model}:` : ''}
                    <input type="text" placeholder={'New model'} defaultValue={''} {...register('model')}/>
                </label>
                {/*{formError.model && <span className={'error'}>{formError.model[0]}</span>}*/}
                {errors.model && <span className={'error'}>{errors.model.message}</span>}

                <label>
                    {chousenCar ? `${chousenCar.year}:` : ''}
                    <input type="text" placeholder={'New year'} defaultValue={''} {...register('year')}/>
                </label>
                {/*{formError.year && <span className={'error'}>{formError.year[0]}</span>}*/}
                {errors.year && <span className={'error'}>{errors.year.message}</span>}

                <label>
                    {chousenCar ? `${chousenCar.price}:` : ''}
                    <input type="text" placeholder={'New price'} defaultValue={''} {...register('price')}/>
                </label>
                {/*{formError.price && <span className={'error'}>{formError.price[0]}</span>}*/}
                {errors.price && <span className={'error'}>{errors.price.message}</span>}

                <button className={'update'}>Update Car</button>
            </form>
        </div>
    );
};

export default UpdateForm;