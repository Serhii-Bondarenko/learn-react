import React from 'react';
import {Link} from "react-router-dom";

import './album.css';

const Album = ({item}) => {

    const {userId, id, title} = item;

    return (
        <Link to={`${id.toString()}/photos`}>
            <div className={'album item'}>
                <p>userId: {userId}</p>
                <p>id: {id}</p>
                <h4>{title}</h4>
            </div>
        </Link>
    );
};

export default Album;