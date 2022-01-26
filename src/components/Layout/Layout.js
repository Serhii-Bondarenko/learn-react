import React from 'react';
import {Link, NavLink, Outlet} from "react-router-dom";

import './layout.css';

const Layout = () => {
    return (
        <div className='wrapper'>
            <header className={'header'}>
                <nav className={'header__nav'}>
                    <Link to={'/'}>Rick and Morty!</Link>
                    <ul>
                        <NavLink to={'episode'}><li>Episodes</li></NavLink>
                        <NavLink to={'location'}><li>Locations</li></NavLink>
                    </ul>
                </nav>
            </header>
            <div className={'main'}>
                <Outlet/>
            </div>
        </div>
    );
};

export {Layout};