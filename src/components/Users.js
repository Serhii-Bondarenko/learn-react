import React, {useEffect, useState} from "react";

import User from "./User";
import FilterForm from "./FilterForm";
import {services} from "../services/user.servise";

const Users = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {

        services.getAll().then(response => {setUsers(response.data)})

    }, [])

    return (
        <div className='user-list'>
            <FilterForm set={setUsers}/>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export default Users;