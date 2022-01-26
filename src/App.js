import {Layout} from "./components";
import React from 'react';
import {Route, Routes} from "react-router-dom";

import './App.css';

import {
    EpisodesPage,
    HomePage,
    LocationsPage, NotFoundPage,
    SingleCharacterPage,
    SingleEpisodePage,
    SingleLocationPage
} from "./pages";

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<HomePage/>}/>
                <Route path={'episode'} element={<EpisodesPage/>}/>
                <Route path={'episode/:id'} element={<SingleEpisodePage/>}/>
                <Route path={'location'} element={<LocationsPage/>}/>
                <Route path={'location/:id'} element={<SingleLocationPage/>}/>
                <Route path={'/character/:id'} element={<SingleCharacterPage/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
};

export default App;