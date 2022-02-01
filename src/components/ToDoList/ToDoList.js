import React from 'react';
import {useSelector} from 'react-redux';

import css from './toDoList.module.css';
import {Task} from '../Task/Task';

const ToDoList = () => {

    const {toDoList} = useSelector(state => state['toDoReducer']);

    return (
        <div>
            <ol className={css.list}>
                {toDoList.map(task => <Task key={task.id} task={task}/>).reverse()}
            </ol>
        </div>
    );
};

export {ToDoList};