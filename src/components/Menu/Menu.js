import React from 'react';

import css from "./menu.module.css";
import {baseURL, urls} from "../../config";

const Menu = ({selectImg}) => {

    return (
        <div className={css.buttons}>
            <button onClick={() => selectImg(baseURL + urls.dog)}>Dog</button>
            <button onClick={() => selectImg(baseURL + urls.cat)}>Cat</button>
            <button onClick={() => selectImg(baseURL + urls.girl)}>Girl</button>
            <button onClick={() => selectImg(baseURL + urls.car)}>Car</button>
            <button onClick={() => selectImg(baseURL + urls.notebook)}>Notebook</button>
        </div>
    );
};

export {Menu};