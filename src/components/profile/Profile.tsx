import React from 'react';
import './Profile.css'

const Profile = () => {
    return(
        <div className='content-profile'>
            <div className='main-image'>
                <img src='https://www.w3schools.com/howto/img_snow_wide.jpg'/>
            </div>
            <div className='image-profile'>
                <img src='https://cdn.jpegmini.com/user/images/slider_puffin_jpegmini_mobile.jpg'/>
                <div className='profile-description'>
                    <div className='profile-name'>Yauheni Kisel</div>
                    <div className='profile-country'>Minsk,Belarus</div>
                </div>
            </div>
            <div className='profile-posts'>
                My posts
                <div>New posts</div>
                <div>
                    <div>Post1</div>
                    <div>Post2</div>
                </div>
            </div>
        </div>
    )
}

export default Profile;