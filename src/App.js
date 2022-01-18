import React from 'react';
import {Routes, Route} from "react-router-dom";

import './App.css';
import UsersPage from "./pages/UsersPage/UsersPage";
import PostsPage from "./pages/PostsPage/PostsPage";
import Layout from "./components/Layout/Layout";
import SingleUserPage from "./pages/SingleUserPage/SingleUserPage";
import PostsOfUserPage from "./pages/PostsOfUserPage/PostsOfUserPage";
import SinglePostPage from "./pages/SinglePostPage/SinglePostPage";
import CommentsPage from "./pages/CommentsPage/CommentsPage";


const App = () => {
    return (
        <div className={'wrapper'}>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'users'} element={<UsersPage/>}>
                        <Route path={':id'} element={<SingleUserPage/>}>
                            <Route path={'posts'} element={<PostsOfUserPage/>}/>
                        </Route>
                    </Route>
                    <Route path={'posts'} element={<PostsPage/>}>
                        <Route path={':id'} element={<SinglePostPage/>}>
                            <Route path={'comments'} element={<CommentsPage/>}/>
                        </Route>
                    </Route>
                </Route>
            </Routes>
        </div>
    );
};

export default App;