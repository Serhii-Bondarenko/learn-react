import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

import css from './character.module.css';
import {charactersService} from "../../services";

const Character = ({character}) => {

    const {id, name, image, species, status, location, episode} = character;

    const [itemEpisode, setItemEpisode] = useState(null);

    useEffect(() => {
        charactersService.getByLink(episode[0])
            .then(response => setItemEpisode(response))
    }, [])

    return (
        <>
            <Link className={css.character} to={`/character/${id.toString()}`} state={character}>
                <img src={image} alt={name}/>
                <div>
                    <h3>{name}</h3>
                    <p>
                        <span>{status}</span> - <span>{species}</span>
                    </p>
                    <p>
                        <span>Last known location:</span> {location.name}
                    </p>
                    <p>
                        <span>First seen in:</span> {itemEpisode?.name}
                    </p>
                </div>
            </Link>
        </>
    );
};

export {Character};