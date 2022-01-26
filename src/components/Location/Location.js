import React from 'react';

import './location.css';
import {Link} from "react-router-dom";

const Location = ({locationItem}) => {

    const {id, name, type, dimension} = locationItem;

    return (
        <div className={'location item'}>
            <div>
                <h2>{id}. <span>{name}</span></h2>
                <p>type: <span>{type}</span></p>
                <p>dimension: <span>{dimension}</span></p>
            </div>
            <Link to={id.toString()} state={locationItem}>Residents</Link>
        </div>
    );
};

export {Location};