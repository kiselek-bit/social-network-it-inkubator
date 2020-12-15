import React from 'react';
import s from './Profile.module.css'
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import MyPostsContainer from "./myPosts/MyPostsContaier";
import {ProfileType} from "./ProfileContainer";

type PropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
}

const Profile = (props: PropsType) => {
    return (
        <div className={s.content}>
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         updateStatus={props.updateStatus}/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile;