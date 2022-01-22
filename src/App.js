import React, {useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import {Img, Select} from "./components";
import {baseURL} from "./config";
import {HomePage} from "./Pages/HomePage";

const App = () => {

    // const [url, setURL] = useState(baseURL);

    return (
        <div className={'wrapper'}>
            {/*<Select url={url} setURL={setURL}/>*/}
            {/*<Img url={url} setURL={setURL}/>*/}
            <Routes>
                <Route path={'/'} element={<HomePage/>}/>
            </Routes>
        </div>
    );
};

export default App;