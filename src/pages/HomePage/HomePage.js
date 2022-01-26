import React from 'react';

import css from './home.module.css';
import {Characters} from "../../components";

const HomePage = () => {

    return (
        <div className={css.home}>
            <h1>The Rick and Morty</h1>
            <Characters/>
        </div>
    );
};

export {HomePage};