import React from "react";
import s from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";

type DialogItemType = {
    name: string
    id: number
}

export const DialogItem = (props: DialogItemType) => {
    return (
        <div className={s.dialog}>
            <NavLink to={'/dialogs/'+ props.id} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}