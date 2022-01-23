import React, {useState} from 'react';

import css from './home.module.css';
import {baseURL} from "../config";
import {Img, Menu} from "../components";

const HomePage = () => {

    const [url, setURL] = useState(baseURL);

    const selectImg = URL => setURL(URL);

    return (
        <div className={css.home}>
            <Menu selectImg={selectImg}/>
            <Img url={url} setURL={setURL}/>
        </div>
    );
};

export {HomePage};