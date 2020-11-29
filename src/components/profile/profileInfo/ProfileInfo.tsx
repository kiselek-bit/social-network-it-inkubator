import React from "react";
import s from './ProfileInfo.module.css'
import {ProfileType} from "../ProfileContainer";
import userPhoto from '../../../assets/images/man-300x300.png'

type PropsType = {
    profile: ProfileType
}

export const ProfileInfo = (props: PropsType) => {
    return (
        <div>
            <div className={s.image}>
                <img src='https://www.w3schools.com/howto/img_snow_wide.jpg'/>
            </div>
            <div className={s.author}>
                <img src={props.profile.photos.large? props.profile.photos.large: userPhoto}/>
                <div className={s.description}>
                    <div className={s.name}><b>{(props.profile.fullName)? props.profile.fullName: 'Yauheni Kisel'}</b></div>
                    <div className={s.country}>Minsk, Belarus</div>
                    {props.profile.lookingForAJob && <div>I looking a job</div>}
                </div>
            </div>
        </div>
    )
}