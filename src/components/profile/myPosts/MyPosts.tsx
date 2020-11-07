import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post from "./post/Post";
import {PostType} from "../../../redux/store";

type PropsType = {
    posts: Array<PostType>
    addPost: () => void
    newTextType: string
    updateNewText: (text: string) => void
}

const MyPosts = (props: PropsType) => {
    let postsElements = props.posts.map(p => <Post messages={p.message}
                                                   key={p.id}
                                                   likes={p.likes}
                                                   id={p.id}/>)


    const addPost = () => props.addPost()
    const onChangeArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text: string = e.currentTarget.value
        props.updateNewText(text)
    }

    return (
        <div className={s.posts}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea value={props.newTextType}
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