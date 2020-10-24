import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post from "./post/Post";
import {
    ActionsTypes,
    addPostActionCreate,
    PostType,
    ProfilePageType,
    updateNewTextPostActionCreate
} from "../../../redux/state";

type PropsType = {
    postState: ProfilePageType
    newTextType: string
    dispatch: (action: ActionsTypes) => void
}

const MyPosts = (props: PropsType) => {

    let posts: Array<PostType> = props.postState.posts
    let postsElements = posts.map(p => <Post messages={p.message}
                                             likes={p.likes}
                                             id={p.id}/>)


    const addPost = () => props.dispatch(addPostActionCreate())
    const onChangeArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text: string = e.currentTarget.value
        props.dispatch(updateNewTextPostActionCreate(text))
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