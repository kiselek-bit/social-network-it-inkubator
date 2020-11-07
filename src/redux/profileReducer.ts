import {ActionsTypes, ProfilePageType} from "./store";


const ADD_POST = 'ADD-POST'
const UPDATE_NEW_TEXT = 'UPDATE-NEW-TEXT'

let initialState: ProfilePageType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likes: 4},
        {id: 2, message: 'It\'s my first post', likes: 7}
    ],
    newTextType: ''
}


export const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes): ProfilePageType => {

    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [{id: 3, message: state.newTextType, likes: 0}, ...state.posts],
                newTextType: ''
            }
        case UPDATE_NEW_TEXT:
            return {...state, newTextType: action.text}
        default:
            return state
    }
}

export const addPostActionCreate = (): ActionsTypes => ({type: ADD_POST})
export const updateNewTextPostActionCreate = (text: string): ActionsTypes => {
    return {type: UPDATE_NEW_TEXT, text: text}
}