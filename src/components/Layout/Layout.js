import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

import './layout.css'

const Layout = () => {
    return (
        <>
            <div className={'header'}>
                <NavLink to="users">Users</NavLink>
                <NavLink to="posts">Posts</NavLink>
            </div>

            <div className={'main'}>
                <Outlet/>
            </div>
        </>
    );
};

export default Layout;