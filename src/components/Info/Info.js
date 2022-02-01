import React from 'react';
import {useSelector} from 'react-redux';

import css from './info.module.css';

const Info = () => {

    const {toDoList} = useSelector(state => state['toDoReducer']);

    return (
        <>
            <div className={css.wrap}>
                <div>
                    <h2>All: {toDoList.length}</h2>
                </div>
                <div>
                    <h2>Completed: {toDoList.filter(task => task.completed).length}</h2>
                </div>
            </div>
            <hr/>
        </>
    );
};

export {Info};