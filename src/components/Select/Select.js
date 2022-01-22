import React, {useState} from 'react';
import {baseURL, urls} from "../../config";

const Select = ({url, setURL}) => {

    // const [endPoint, setEndPoint] = useState('');

    // const handler = (e) => {
    //     setURL(e.target.value);
    // }

    return (
        <>
            <div>
                {/*<form onSubmit={(e) => e.preventDefault() }>*/}
                {/*    <select name={'select'} value={url} onChange={handler}>*/}
                {/*        <option value={baseURL+urls.cat}>CAT</option>*/}
                {/*        <option value={baseURL+urls.dog}>DOG</option>*/}
                {/*        <option value={baseURL+urls.girl}>GIRL</option>*/}
                {/*    </select>*/}
                {/*</form>*/}
                {/*<div onClick={setURL(baseURL+urls.cat)}>CAT</div>*/}
                {/*<div onClick={setURL(baseURL+urls.dog)}>DOG</div>*/}
                {/*<div onClick={setURL(baseURL+urls.girl)}>GIRL</div>*/}
            </div>
        </>
    );
};

export {Select};