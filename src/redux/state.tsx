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
    _rerenderEntireThree: () => void
    subscriber: ( callback:() => void ) => void
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

const ADD_MESSAGE = 'ADD-MASSAGE'
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE'
const ADD_POST = 'ADD-POST'
const UPDATE_NEW_TEXT = 'UPDATE-NEW-TEXT'

export const addMessageActionCreate = (): ActionsTypes => ({type: ADD_MESSAGE})
export const updateNewMessageActionCreate = (text: string): ActionsTypes => {
    return {type: UPDATE_NEW_MESSAGE, text: text}
}
export const addPostActionCreate = (): ActionsTypes => ({type: ADD_POST})
export const updateNewTextPostActionCreate = (text: string): ActionsTypes => {
    return {type: UPDATE_NEW_TEXT, text: text}
}

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
    _rerenderEntireThree() {},
    subscriber(callback: () => void) {
        this._rerenderEntireThree = callback
    },
    getState() { return this._state},

    dispatch(action) {
        switch (action.type) {
            case 'ADD-POST':
                this._state.profilePage.posts.unshift(
                    {
                        id: 3,
                        message: this._state.profilePage.newTextType,
                        likes: 0
                    }
                )
                this._state.profilePage.newTextType =''
                this._rerenderEntireThree()
                break
            case 'UPDATE-NEW-TEXT':
                this._state.profilePage.newTextType = action.text
                this._rerenderEntireThree()
                break
            case 'ADD-MASSAGE':
                let newMessage = {
                    id:6,
                    message: this._state.dialogsPage.newTextMessage
                }
                this._state.dialogsPage.messages.push(newMessage)
                this._rerenderEntireThree()
                this._state.dialogsPage.newTextMessage = ''
                break
            case 'UPDATE-NEW-MESSAGE':
                this._state.dialogsPage.newTextMessage = action.text
                this._rerenderEntireThree()
                break
        }
    },
}