import {useEffect, useState} from "react";

import User from "./user/User";

const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(response => setUsers(response))

    }, [])

    return (
        <div className={'Users-list'}>
            {
                users.map(user =>
                    <User
                        key={user.id}
                        user={user}
                    />)
            }
        </div>
    );
};

export default Users;