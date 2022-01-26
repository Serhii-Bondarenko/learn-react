import React, {useEffect, useState} from 'react';

import './characters.css';

import {charactersService} from "../../services";

import {Loader} from "../Loader/Loader";
import {Character} from "../Character/Character";
import {multipleCharacters} from "../../helperFunctions";

const Characters = () => {

    const [loading, setLoading] = useState(true);

    let depsArr = multipleCharacters.getRandom(6);

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        charactersService.getPart(depsArr)
            .then(response => {
                setCharacters([...response])
                setLoading(!loading);
            })
    }, [])

    return (
        <>
            {loading ?
                <Loader/> : <div className='characters-list'>
                    {characters.map(character => <Character key={character.id} character={character}/>)}
                </div>}
        </>
    );
};

export {Characters};