import React from 'react';

const Post = ({post}) => {

    const {userId, id, title, body} = post;

    return (
        <div className='item'>
            <p>user id: {userId}</p>
            <p>id: {id}</p>
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    );
};

export {Post};