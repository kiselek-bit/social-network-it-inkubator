import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post from "./post/Post";
import {PostType, ProfilePageType} from "../../../redux/state";

type PropsType = {
    postState: ProfilePageType
    addPost: (text: string) => void
}

const MyPosts = (props: PropsType) => {

    let posts: Array<PostType> = props.postState.posts
    let postsElements = posts.map(p => <Post messages={p.message} likes={p.likes} id={p.id}/>)

    const newPost = React.createRef<HTMLTextAreaElement>()
    const addPost = () => {
        if (newPost.current) {
            props.addPost(newPost.current.value)
            newPost.current.value = ''
        }
    }
    const onChangeArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text: string = e.currentTarget.value
        console.log(text)
    }

    return (
        <div className={s.posts}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPost}
                              onChange={onChangeArea}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;