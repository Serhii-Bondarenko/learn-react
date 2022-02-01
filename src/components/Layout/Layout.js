import React from 'react';

import './layout.css';
import {Form} from '../Form/Form';
import {ToDoList} from '../ToDoList/ToDoList';
import {Info} from '../Info/Info';

const Layout = () => {
    return (
        <div className={'wrapper'}>
            <Info/>
            <div className={'main'}>
                <Form/>
                <ToDoList/>
            </div>
        </div>
    );
};

export {Layout};