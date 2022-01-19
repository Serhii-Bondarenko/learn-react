import React from 'react';

import './userPost.css';

const UserPost = ({item}) => {
    const {userId, id, title, body} = item
    return (
        <div className={'post item'}>
            <p>userId: {userId}</p>
            <p>id: {id}</p>
            <p>title: {title}</p>
            <p>body: {body}</p>
        </div>
    );
};

export default UserPost;