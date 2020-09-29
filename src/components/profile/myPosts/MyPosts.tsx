import React from 'react';
import s from './MyPosts.module.css'
import Post from "./post/Post";
import {PostType, ProfilePageType} from "../../../redux/state";

type PropsType = {
    postState: ProfilePageType
}

const MyPosts = (props: PropsType) => {

    let posts: Array<PostType> = props.postState.posts
    let postsElements = posts.map( p => <Post messages={p.message} likes={p.likes} id={p.id}/> )

    return (
        <div className={s.posts}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div>
                { postsElements }
            </div>
        </div>
    )
}

export default MyPosts;