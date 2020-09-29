import React from 'react';
import s from './Post.module.css';

type PostType = {
    id: number
    messages: string;
    likes: number;
}

const Post = (props: PostType) => {
    return (
        <div className={s.item}>
            <img src='https://wpforms.com/wp-content/uploads/2016/10/How-to-Allow-Users-to-Submit-Blog-Posts-on-Your-WordPress-Site.png'/>
            <div>{props.messages}</div>
            Likes: {props.likes}
            <hr/>
        </div>
    )
}

export default Post;