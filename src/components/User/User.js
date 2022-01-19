import React from 'react';
import {Link} from "react-router-dom";

import './user.css';

const User = ({item}) => {

    const {id, name} = item;

    return (
        <>
            <div className={'user item'}>
                <Link to={id.toString()} state={item}>
                    <p>id: {id}</p>
                    <p>{name}</p>
                </Link>
                <Link to={`${id.toString()}/albums`}><button>Albums</button></Link>
            </div>
        </>
    );
};

export default User;