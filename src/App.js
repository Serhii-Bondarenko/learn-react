import React from 'react';
import {Route, Routes} from 'react-router-dom';

import './App.css';
import {Layout} from './components';

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}/>
        </Routes>
    );
};

export default App;