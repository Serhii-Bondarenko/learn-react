import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";

import css from './singleCharacterPage.module.css';
import {charactersService} from "../../services";

const SingleCharacterPage = () => {

    const {id} = useParams();
    const {state} = useLocation();

    const [chousenCharacter, setChousenCharacter] = useState(null);

    useEffect(() => {

        if (state) {
            setChousenCharacter(state);
            return;
        }

        charactersService.getByID(id)
            .then(response => setChousenCharacter(response))

    }, [id])

    return (
        <>
            {chousenCharacter && <div className={css.wrapSingleItem}>
                <h2>{chousenCharacter.name}</h2>
                <div className={css.singleItem}>
                    <img src={chousenCharacter.image} alt={chousenCharacter.name}/>
                    <div>
                        <p><span>status:</span> {chousenCharacter.status}</p>
                        <p><span>species:</span> {chousenCharacter.species}</p>
                        <p><span>gender:</span> {chousenCharacter.gender}</p>
                        <p><span>origin:</span> {chousenCharacter.origin.name}</p>
                        <p><span>location:</span> {chousenCharacter.location.name}</p>
                    </div>
                </div>
            </div>}
        </>
    );
};

export {SingleCharacterPage};