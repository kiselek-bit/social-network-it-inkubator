import React from "react";
import s from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";

type DialogItemType = {
    name: string
    id: number
}

export const DialogItem = (props: DialogItemType) => {
    return (
        <NavLink to={'/dialogs/' + props.id} activeClassName={s.active}>
            <div className={s.dialog}>
                <img src='https://cdn.jpegmini.com/user/images/slider_puffin_jpegmini_mobile.jpg'/>
                <div>{props.name}</div>
            </div>
        </NavLink>
    )
}