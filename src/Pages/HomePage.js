import React, {useState} from 'react';

import {baseURL, urls} from "../config";
import css from './home.module.css';
import {Img} from "../components";

const HomePage = () => {

    const [url, setURL] = useState(baseURL);

    const updateImg = (URL) => setURL(URL);

    return (
        <div className={css.home}>
            <div className={css.buttons}>
                <button onClick={() => updateImg(baseURL + urls.cat)}>Cat</button>
                <button onClick={() => updateImg(baseURL + urls.dog)}>Dog</button>
                <button onClick={() => updateImg(baseURL + urls.girl)}>Girl</button>
                <button onClick={() => updateImg(baseURL + urls.car)}>Car</button>
                <button onClick={() => updateImg(baseURL + urls.notebook)}>Notebook</button>
            </div>

            <Img url={url} setURL={setURL}/>
        </div>
    );
};

export {HomePage};