import {dialogsReducer} from "./dialogsReducer";
import {profileReducer} from "./profileReducer";
import {navbarReducer} from "./navbarReducer";

export type PostType = {
    id: number
    message: string
    likes: number
}
export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}
export type ProfilePageType = {
    posts: Array<PostType>
    newTextType: string
}
export type FriendType = {
    id: number
    name: string
}
export type NavbarFriendsType = {
    friends: Array<FriendType>
}
export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newTextMessage: string
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    navbar: NavbarFriendsType
}
export type StoreType = {
    _state: StateType
    _callSubscriber: () => void
    subscribe: ( callback:() => void ) => void
    getState: () => StateType
    dispatch: (action: ActionsTypes) => void
}

type AddPostActionType = {
    type: 'ADD-POST'
}
type UpdateNewTextActionType = {
    type: 'UPDATE-NEW-TEXT'
    text: string
}
type AddMessageActionType = {
    type: 'ADD-MASSAGE'
}
type UpdateNewMessageActionType = {
    type: 'UPDATE-NEW-MESSAGE'
    text: string
}
export type ActionsTypes = AddPostActionType | UpdateNewTextActionType |
    AddMessageActionType | UpdateNewMessageActionType


export let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likes: 4},
                {id: 2, message: 'It\'s my first post', likes: 7}
            ],
            newTextType: ''
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Viktoria"},
                {id: 2, name: "Marina"},
                {id: 3, name: "Petty"},
                {id: 4, name: "Misha"},
                {id: 5, name: "Vladimir"},
                {id: 6, name: "Svetlana"}
            ],
            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "Hello! How are you?"},
                {id: 3, message: "Yo"},
                {id: 4, message: "Looking this video ..."},
                {id: 5, message: "You forever!"}
            ],
            newTextMessage: ''
        },
        navbar: {
            friends: [
                {id: 1, name: 'Andrew'},
                {id: 1, name: 'Mary'},
                {id: 1, name: 'Pieter'}
            ]
        }
    },
    _callSubscriber() {},
    subscribe(callback: () => void) {
        this._callSubscriber = callback
    },
    getState() { return this._state},

    dispatch(action) {
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.navbar = navbarReducer(this._state.navbar, action)

        this._callSubscriber()

    },
}