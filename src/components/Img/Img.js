import {useRef} from "react";

import css from './img.module.css';

const Img = ({url, setURL}) => {

    const newImg = useRef(url);

    const updateImg = () => {
        setURL(`${newImg.current}?random=${Math.floor(Math.random() * (10 - 1 + 1)) + 1}`);
    }
    
    return (
        <div className={css.img}>
            <img src={url} alt="img"/>
            <button onClick={()=>updateImg()}>Update</button>
        </div>
    );
};

export {Img};