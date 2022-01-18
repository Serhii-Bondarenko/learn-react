import React from 'react';
import {Link} from "react-router-dom";

import './Post.css';

const Post = ({item}) => {

    const {userId, id, title} = item;

    return (
        <Link to={id.toString()} state={item}>
            <div className={'post item'}>
                <p>userId: {userId}</p>
                <p>id: {id}</p>
                <p>{title}</p>
            </div>
        </Link>
    );
};

export default Post;