import React from 'react';

const Comment = ({comment}) => {

    const {postId, id, name, email, body} = comment;

    return (
        <div className='item'>
            <p>post id: {postId}</p>
            <p>id: {id}</p>
            <h3>{name}</h3>
            <p>e-mail: {email}</p>
            <p>{body}</p>
        </div>
    );
};

export {Comment};