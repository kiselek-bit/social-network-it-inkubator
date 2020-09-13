import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./myPosts/MyPosts";

const Profile = () => {
    return (
        <div className={s.content}>
            <div className={s.image}>
                <img src='https://www.w3schools.com/howto/img_snow_wide.jpg'/>
            </div>
            <div className={s.author}>
                <img src='https://cdn.jpegmini.com/user/images/slider_puffin_jpegmini_mobile.jpg'/>
                <div className={s.description}>
                    <div className={s.name}>Yauheni Kisel</div>
                    <div className={s.country}>Minsk, Belarus</div>
                </div>
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile;