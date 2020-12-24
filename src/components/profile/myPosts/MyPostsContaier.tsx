import React from 'react';
import {addPostActionCreate} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {RootStore} from "../../../redux/reduxStore";

type PropsType = {

}

const mapStateToProps = (state: RootStore) => {
    return {
        posts: state.profilePage.posts,
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        addPost: (postMessage: string) => {
            dispatch(addPostActionCreate(postMessage))
        },
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;