import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {getAllUsers} from '../../store';
import {Loader, User} from '../../components';

const UsersPage = () => {

    const dispatch = useDispatch();

    const {users, status, error} = useSelector(state => state['userReducer']);

    useEffect(() => {
       if(!users.length) dispatch(getAllUsers());
    }, [])

    return (
        <div className='wrap-list'>
            {status === 'loading' && <Loader/>}
            {error && <h2>Ooops something wrong...</h2>}
            <div className={'list'}>
                {users.map(user => <User key={user.id} user={user}/>)}
            </div>
        </div>
    );
};

export {UsersPage};