import React from 'react';
import {Link} from "react-router-dom";

import './episode.css';

const Episode = ({episodeItem}) => {

    const {id, name, air_date, episode} = episodeItem;

    return (
        <div className={'episode item'}>
            <div>
                <h2>{id}. <span>{name}</span></h2>
                <p>date: <span>{air_date}</span></p>
                <p>episode: <span>{episode}</span></p>
            </div>
            <Link to={id.toString()} state={episodeItem}>characters</Link>
        </div>
    );
};

export {Episode};