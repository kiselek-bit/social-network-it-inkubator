import React from "react";
import s from './Friends.module.css'
import {Friend} from "./friend/Friend";
import {FriendType} from "../../../redux/store";
type PropsType = {
    friendsState: Array<FriendType>
}

export const Friends = (props: PropsType) => {
    let friendsElements = props.friendsState.map( (f, i) => <Friend key={i} name={f.name}/> )
    return (
        <div className={s.friends}>
            <div className={s.title}>
                Friends
            </div>
            <div className={s.friendsItem}>
                {friendsElements}
            </div>
        </div>
    )
}