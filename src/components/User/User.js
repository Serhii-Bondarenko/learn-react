import React from 'react';

const User = ({user}) => {

    const {id, name, username, phone, email, website} = user;

    return (
        <div className='item'>
            <h2>{id}). {name}</h2>
            <h4>nick-name: {username}</h4>
            <ul>
                <li>phone: {phone}</li>
                <li>e-mail: {email}</li>
                <li>website: {website}</li>
            </ul>
        </div>
    );
};

export {User};