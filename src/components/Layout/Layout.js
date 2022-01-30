import React from 'react';
import {NavLink, Outlet} from 'react-router-dom';

import './layout.css';

const Layout = () => {
    return (
        <div className='wrapper'>
            <header className='header'>
                <nav>
                    <ul>
                        <NavLink to={'/'}><li>Cars</li></NavLink>
                        <NavLink to={'users'}><li>Users</li></NavLink>
                        <NavLink to={'posts'}><li>Posts</li></NavLink>
                        <NavLink to={'comments'}><li>Comments</li></NavLink>
                    </ul>
                </nav>
            </header>
            <main className='main'>
                <Outlet/>
            </main>
        </div>
    );
};

export {Layout};