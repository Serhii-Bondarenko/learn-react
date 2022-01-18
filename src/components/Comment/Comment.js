import React from 'react';

import './comment.css';

const Comment = ({item}) => {

    const {postId, id, name, email, body} = item;

    return (
        <div className={'comment item'}>
            <p>postId: {postId}</p>
            <p>Id: {id}</p>
            <p>name: {name}</p>
            <p>emeil: {email}</p>
            <p>{body}</p>
        </div>
    );
};

export default Comment;