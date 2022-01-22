import React from 'react';
import {Routes, Route} from 'react-router-dom';

import './App.css';
import {HomePage} from "./Pages/HomePage";

const App = () => {
    return (
        <div className={'wrapper'}>
            <Routes>
                <Route path={'/'} element={<HomePage/>}/>
            </Routes>
        </div>
    );
};

export default App;