import {PostType} from "./store";
import {ProfileType} from "../components/profile/ProfileContainer";

export type ProfilePageType = {
    posts: Array<PostType>
    newTextType: string
    profile: ProfileType
}
type AddPostActionType = {
    type: 'ADD-POST'
}
type UpdateNewTextActionType = {
    type: 'UPDATE-NEW-TEXT'
    text: string
}
type SetUserProfileType = {
    type: ACTION_TYPES.SET_USER_PROFILE
    profile: ProfileType
}

type ActionsTypes = AddPostActionType | UpdateNewTextActionType |
    SetUserProfileType

enum ACTION_TYPES {
    ADD_POST = 'ADD-POST',
    UPDATE_NEW_TEXT = 'UPDATE-NEW-TEXT',
    SET_USER_PROFILE = 'SET_USER_PROFILE',
}

let initialState: ProfilePageType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likes: 4},
        {id: 2, message: 'It\'s my first post', likes: 7}
    ],
    newTextType: '',
    profile: {
        aboutMe: '',
        contacts: {},
        fullName: '',
        lookingForAJob: true,
        lookingForAJobDescription: '',
        photos: {
            small: '',
            large: ''
        },
        userId: 2
    }
}


export const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes): ProfilePageType => {

    switch (action.type) {
        case ACTION_TYPES.ADD_POST:
            return {
                ...state,
                posts: [{id: 3, message: state.newTextType, likes: 0}, ...state.posts],
                newTextType: ''
            }
        case ACTION_TYPES.UPDATE_NEW_TEXT:
            return {...state, newTextType: action.text}
        case ACTION_TYPES.SET_USER_PROFILE:
            return {...state, profile: action.profile}
        default:
            return state
    }
}

export const addPostActionCreate = (): AddPostActionType => ({type: ACTION_TYPES.ADD_POST})
export const updateNewTextPostActionCreate = (text: string): UpdateNewTextActionType => {
    return {type: ACTION_TYPES.UPDATE_NEW_TEXT, text: text}
}
export const setUserProfile = (profile: ProfileType): SetUserProfileType => {
    return {type: ACTION_TYPES.SET_USER_PROFILE, profile}
}