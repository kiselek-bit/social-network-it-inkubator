import React from 'react';
import s from './nav.module.css'
import {NavLink} from "react-router-dom";
import {Friends} from "./friends/Friends";
import {FriendType, NavbarFriendsType} from "../../redux/store";
import {FriendsContainer} from "./friends/FriendsContainer";

type PropsType = {
}

const Nav = (props: PropsType) => {
    return (
        <div className={s.navigation}>
            <nav >
                <div className={s.item}>
                    <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/users' activeClassName={s.active}>Users</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/dialogs' activeClassName={s.active}>Messages</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/news' activeClassName={s.active}>News</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/music' activeClassName={s.active}>Music</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/settings' activeClassName={s.active}>Settings</NavLink>
                </div>
            </nav>
            <FriendsContainer />
        </div>
    )
}

export default Nav;