import React from 'react';
import {Link} from "react-router-dom";

import './user.css';

const User = ({item}) => {

    const {id, name} = item

    return (
        <Link to={id.toString()} state={item}>
            <div className={'user item'}>
                <p>id: {id}</p>
                <p>{name}</p>
            </div>
        </Link>
    );
};

export default User;