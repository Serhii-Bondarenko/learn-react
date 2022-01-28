import React, {useReducer} from "react";
import {useForm} from "react-hook-form";

import "./App.css";
import {Cat, Dog, Form} from "./components";

const initialState = {
    catId: 0,
    dogId: 0,
    cats: [],
    dogs: [],
    errors: {
        emptyInput: ''
    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case "addCat":
            return {...state, catId: state.catId + 1, cats: [...state.cats, {id: state.catId, name: action.payload}]}
        case "addDog":
            return {...state, dogId: state.dogId + 1, dogs: [...state.dogs, {id: state.dogId, name: action.payload}]}
        case "deletePet":
            return {...state, [action.key]: action.payload}
        case "emptyInput":
            return {...state, errors: {...state.errors, emptyInput: action.payload}}
        case "errorClear":
            return {...state, errors: {...state.errors, emptyInput: ""}}
        default:
            return state
    }
}

const App = () => {

    const [formState, dispatch] = useReducer(reducer, initialState);

    const {cats, dogs, errors} = formState;

    const {
        register,
        getValues,
        resetField
    } = useForm();

    const createPet = (field, type) => {
        if (!getValues(field)) {
            dispatch({
                type: "emptyInput",
                payload: "Заповніть поле!"
            })

            return;
        }

        dispatch({
            type,
            payload: getValues(field)
        });

        resetError();

        resetField(field);
    }

    const deletePet = (petName, petArr, key) => {
        const filter = petArr.filter(pet => pet.name !== petName);
        dispatch({
            type: "deletePet",
            key,
            payload: filter
        })
    }

    function resetError() {
        dispatch({
            type: "errorClear"
        })
    }

    return (
        <>
            <div className={"wrap"}>
                <Form createPet={createPet} register={register} errors={errors} resetError={resetError}/>
                <div className={"pets"}>
                    <div>
                        {cats.length && <p>Cats: {cats.length}</p>}
                        {cats.map(cat => <Cat key={cat.id} cats={cats} item={cat} deletePet={deletePet}/>)}
                    </div>
                    <div>
                        {dogs.length && <p>Dogs: {dogs.length}</p>}
                        {dogs.map(dog => <Dog key={dog.id} dogs={dogs} item={dog} deletePet={deletePet}/>)}
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;