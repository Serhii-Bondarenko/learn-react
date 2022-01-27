import React, {useReducer} from "react";
import {useForm} from "react-hook-form";

import "./App.css";
import {Cat, Dog, Form} from "./components";

const initialState = {
    cats: [],
    dogs: []
}

const reducer = (state, action) => {
    switch (action.type) {
        case "addCat":
            return {...state, cats: [...state.cats, action.payload]}
        case "addDog":
            return {...state, dogs: [...state.dogs, action.payload]}
        case "deletePet":
            return {...state, [action.key]: action.payload}
        default:
            return state
    }
}

const App = () => {

    const [formState, dispatch] = useReducer(reducer, initialState);

    const {cats, dogs} = formState;

    const {
        register,
        getValues,
        resetField
    } = useForm();

    const createPet = (field, type) => {
        if (!getValues(field)) {
            console.log("Заповніть поле!");
            return;
        }

        dispatch({
            type,
            payload: getValues(field)
        })

        resetField(field);
    }

    const deletePet = (petName, petArr, key) => {
        const filter = petArr.filter(pet => pet !== petName);
        dispatch({
            type: "deletePet",
            key,
            payload: filter
        })
    }

    return (
        <>
            <div className={"wrap"}>
                <Form createPet={createPet} register={register}/>
                <div className={"pets"}>
                    <div>
                        {cats.length && <p>Cats: {cats.length}</p>}
                        {cats.map(cat => <Cat key={cat} cats={cats} item={cat} deletePet={deletePet}/>)}
                    </div>
                    <div>
                        {dogs.length && <p>Dogs: {dogs.length}</p>}
                        {dogs.map(dog => <Dog key={dog} dogs={dogs} item={dog} deletePet={deletePet}/>)}
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;