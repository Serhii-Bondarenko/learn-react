import React from 'react';

import './photo.css';

const Photo = ({item}) => {

    const {albumId, id, title,thumbnailUrl} = item;

    return (
        <div className={'photo item'}>
            <p>albumId: {albumId}</p>
            <p>id: {id}</p>
            <img src={thumbnailUrl} alt="photo"/>
            <h4>{title}</h4>
        </div>
    );
};

export default Photo;