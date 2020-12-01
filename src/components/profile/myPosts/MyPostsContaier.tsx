import React from 'react';
import {addPostActionCreate, updateNewTextPostActionCreate} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

type PropsType = {

}

const mapStateToProps = (state: any) => {
    return {
        posts: state.profilePage.posts,
        newTextType: state.profilePage.newTextType
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreate())
        },
        updateNewText: (text: string) => {
            dispatch(updateNewTextPostActionCreate(text))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;