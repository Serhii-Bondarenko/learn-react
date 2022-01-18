import React, {useEffect, useState} from 'react';
import {useLocation, useParams, Link, Outlet} from "react-router-dom";

import {userService} from "../../services/user.service";
import './singleUserPage.css'

const SingleUserPage = () => {

    const [user, setUser] = useState(null);
    const {id} = useParams();
    const {state} = useLocation();

    useEffect(() => {
        if (state) {
            setUser(state);
            return;
        }
        userService.getById(id)
            .then(response => setUser(response))

    }, [id])

    return (
        <>
            {user && <div className={'user item'}>
                <div>
                    <p>id: {id}</p>
                    <p>{user.name}</p>
                    <p>nickname: {user.username}</p>
                    <p>email: {user.email}</p>
                </div>
                <ul>
                    ADDRESS
                    <li>street: {user.address.street}</li>
                    <li>suite: {user.address.suite}</li>
                    <li>city: {user.address.city}</li>
                    <li>zipcode: {user.address.zipcode}</li>
                    <ol>
                        GEO
                        <li>lat: {user.address.geo.lat}</li>
                        <li>lng: {user.address.geo.lng}</li>
                    </ol>
                    <div>
                        <p>phone: {user.phone}</p>
                        <p>website: {user.website}</p>
                    </div>
                </ul>
                <div>
                    COMPANY
                    <h3>{user.company.name}</h3>
                    <p>catchPhrase: <i>"{user.company.catchPhrase}"</i></p>
                    <p>bs: <i>"{user.company.bs}"</i></p>
                </div>

                <Link to={'posts'}><button>Posts</button></Link>
            </div>}

            <Outlet/>
        </>
    );
};

export default SingleUserPage;