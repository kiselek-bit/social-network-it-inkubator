import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./myPosts/MyPosts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {ProfilePageType, PostType} from "../../redux/state";

type PropsType = {
    profileState: ProfilePageType
    addPost: (text: string) => void
}

const Profile = (props: PropsType) => {

    let postState: ProfilePageType = props.profileState


    return (
        <div className={s.content}>
            <ProfileInfo />
            <MyPosts postState={postState} addPost={props.addPost}/>
        </div>
    )
}

export default Profile;