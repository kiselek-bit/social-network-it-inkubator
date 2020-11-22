import React from 'react';
import s from './Profile.module.css'
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import MyPostsContainer from "./myPosts/MyPostsContaier";
import {ProfileType} from "./ProfileContainer";

type PropsType = {
    profile: ProfileType
}

const Profile = (props: PropsType) => {
    return (
        <div className={s.content}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile;