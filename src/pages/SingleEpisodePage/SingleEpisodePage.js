import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";

import css from './singleEpisode.module.css';
import {charactersService} from "../../services";
import {multipleCharacters} from "../../helperFunctions";
import {Character} from "../../components";
import {Loader} from "../../components/Loader/Loader";


const SingleEpisodePage = () => {

    const [loading, setLoading] = useState(true);

    const {state} = useLocation();
    const {name, characters} = state;

    const [chousenCharacters, setChousenCharacters] = useState([]);

    useEffect(() => {
        charactersService.getPart(multipleCharacters.getByLinksArr(characters))
            .then(response => {
                setChousenCharacters(response)
                setLoading(!loading);
            });
    }, [])

    return (
        <>
            {loading ?
                <Loader/> : <div className={css.singleEpisode}>
                    <h2>Characters of <span>{name}</span> episode</h2>
                    <div className={'characters-list'}>
                        {chousenCharacters.map(item => <Character key={item.id} character={item}/>)}
                    </div>
                </div>}
        </>
    );
};

export {SingleEpisodePage};