import React from 'react';
import s from './MyPosts.module.css'
import Post from "./post/Post";

const MyPosts = () => {
    return (
        <div className={s.posts}>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div>
                <Post messages='Hi, how are you?' likes={4}/>
                <Post messages="It's my first post" likes={7}/>
            </div>
        </div>
    )
}

export default MyPosts;