import React from "react";
import s from './Friend.module.css'

type PropsType ={
   name: string
}

export const Friend = (props: PropsType) => {
    return (
        <div className={s.friend}>
            <img src='https://cdn.jpegmini.com/user/images/slider_puffin_jpegmini_mobile.jpg'/>
            <div>{props.name}</div>
        </div>
    )
}