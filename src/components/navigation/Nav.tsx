import React from 'react';
import s from './nav.module.css'

const Nav = () => {
    return (
        <nav className={s.navigation}>
            <div className={s.item}><a>Profile</a></div>
            <div className={s.item}><a>Messages</a></div>
            <div className={s.item}><a>News</a></div>
            <div className={s.item}><a>Music</a></div>
            <div className={s.item}><a>Settings</a></div>
        </nav>
    )
}

export default Nav;