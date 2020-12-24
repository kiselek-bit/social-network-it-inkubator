import React from 'react';
import s from './MyPosts.module.css'
import Post from "./post/Post";
import {PostType} from "../../../redux/store";
import {InjectedFormProps, reduxForm, Field} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/formControl/FormControl";

type PropsType = {
    posts: Array<PostType>
    addPost: (postMessage: string) => void
}
type AddPostFormType = {
    newPostMessage: string
}

const maxLength = maxLengthCreator(30)

const MyPosts = (props: PropsType) => {
    let postsElements = props.posts.map(p => <Post messages={p.message}
                                                   key={p.id}
                                                   likes={p.likes}
                                                   id={p.id}/>)


    const onSubmit = (DataFormType: AddPostFormType) => {
        console.log(DataFormType)
        props.addPost(DataFormType.newPostMessage)
    }

    return (
        <div className={s.posts}>
            <h3>My posts</h3>
            <div>
                <AddPostReduxForm onSubmit={onSubmit}/>

            </div>
            <div>
                {postsElements}
            </div>
        </div>
    )
}

const AddPostForm = (props: InjectedFormProps<AddPostFormType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={'newPostMessage'}
                   component={Textarea}
                   placeholder={'Post Message'}
                   validate={[required, maxLength]}/>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}
const AddPostReduxForm = reduxForm<AddPostFormType>({
    form: 'addPostForm'
})(AddPostForm)

export default MyPosts;