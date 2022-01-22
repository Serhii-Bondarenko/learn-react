import {useState} from "react";
import {baseURL, urls} from "../../config";
import {useLocation} from "react-router-dom";

import css from './img.module.css';

const Img = ({url, setURL}) => {

    const xxx = () => {
        setURL(`${url}?random=1`);
    }

    return (
        <div className={css.img}>
            <img src={url} alt="img"/>
            <button onClick={()=>xxx()}>Update</button>
        </div>
    );
};

export {Img};