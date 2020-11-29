import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

type PropsType = {
    isAuth: boolean
    login: string | null
}

const Header = (props: PropsType) => {
    return (
        <header className={s.header}>
            <NavLink to='/profile'>
                <img className={s.img} src='https://is5-ssl.mzstatic.com/image/thumb/Purple124/v4/b6/c3/cb/b6c3cb54-5fd6-3d1f-7b13-255aa6e56b3e/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png'/>
            </NavLink>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login :
                < NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;