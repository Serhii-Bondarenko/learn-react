import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {userService} from "../../services/user.service";
import User from "../../components/User/User";
import './UsersPage.css';
import '../../App.css';

const UsersPage = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        userService.getAll()
            .then(response => setUsers(response))
    }, [])

    return (
        <>
            <div className={'users info-arr'}>
                {users.map(user => <User key={user.id} item={user}/>)}
            </div>

            <div className={'target-info'}>
                <Outlet/>
            </div>
        </>
    );
};

export default UsersPage;