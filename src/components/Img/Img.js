import {UncachedImage} from "react-uncached-image";

import css from './img.module.css';

const Img = ({url, setURL}) => {

    const updateImg = () => {

        if (url.includes('?random=1')) {
            setURL(url.replaceAll('?random=1', ''));

        } else {
            setURL(`${url}?random=1`);

        }

    }

    return (
        <div className={css.img}>
            <UncachedImage src={url} alt="img"/>
            <button onClick={() => updateImg()}>Update</button>
        </div>
    );
};

export {Img};