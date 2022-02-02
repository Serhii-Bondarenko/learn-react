import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import css from './form.module.css';
import {catchCopy, getData, handleData} from '../../store';

const Form = () => {

    const dispatch = useDispatch();

    const {inputValue, toDoList, iterateTask} = useSelector(state => state['toDoReducer']);

    const submit = (e) => {
        e.preventDefault();

        if (inputValue) {

            if (toDoList.find(task => task.title.toLowerCase().trim() === inputValue.toLowerCase().trim())) {
                dispatch(catchCopy(inputValue));
                return;
            }

            dispatch(handleData({inputValue: inputValue.trim()}));
        }
    }

    return (
        <>
            <form className={css.form} onSubmit={submit}>
                <div>
                    <input type='text' name={'toDo'} placeholder={'to do...'} value={inputValue}
                           onChange={(e) => dispatch(getData(e.target.value))}/>
                    <button>Add</button>
                </div>
                {iterateTask && <span>A "{iterateTask}" already exists</span>}
            </form>
        </>
    );
};

export {Form};