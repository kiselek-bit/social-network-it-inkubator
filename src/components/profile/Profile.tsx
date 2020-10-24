import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./myPosts/MyPosts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType} from "../../redux/state";

type PropsType = {
    profileState: ProfilePageType
    dispatch: (action: ActionsTypes) => void
}

const Profile = (props: PropsType) => {

    let postState: ProfilePageType = props.profileState


    return (
        <div className={s.content}>
            <ProfileInfo />
            <MyPosts postState={postState}
                     dispatch={props.dispatch}
                     newTextType={props.profileState.newTextType}/>
        </div>
    )
}

export default Profile;