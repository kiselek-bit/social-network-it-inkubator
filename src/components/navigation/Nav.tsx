import React from 'react';
import s from './nav.module.css'
import {NavLink} from "react-router-dom";
import {Friends} from "./friends/Friends";
import {FriendType, NavbarFriendsType} from "../../redux/state";

type PropsType = {
    navbarState: NavbarFriendsType
}

const Nav = (props: PropsType) => {
    let friendsState: Array<FriendType> = props.navbarState.friends
    return (
        <div className={s.navigation}>
            <nav >
                <div className={s.item}>
                    <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
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
            <Friends friendsState={friendsState}/>
        </div>
    )
}

export default Nav;