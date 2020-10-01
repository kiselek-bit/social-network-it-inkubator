import React from "react";
import s from './Message.module.css'

type MessageType = {
    message: string
}



export const Message = (props: MessageType) => {
    return (
        <div className={s.message}>
            <img src='https://cdn.jpegmini.com/user/images/slider_puffin_jpegmini_mobile.jpg'/>
            <div>{props.message}</div>
        </div>
    )
}