import {ActionsTypes, DialogsPageType} from "./store";

const ADD_MESSAGE = 'ADD-MASSAGE'
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE'

let initialState: DialogsPageType = {
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
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsTypes): DialogsPageType => {


    switch (action.type) {
        case ADD_MESSAGE:
            return  {
                ...state,
                newTextMessage: '',
                messages: [...state.messages, {id: 6, message: state.newTextMessage}]
            }
        case UPDATE_NEW_MESSAGE:
            return {...state, newTextMessage: action.text}
        default:
            return state
    }
}

export const addMessageActionCreate = (): ActionsTypes => ({type: ADD_MESSAGE})
export const updateNewMessageActionCreate = (text: string): ActionsTypes => {
    return {type: UPDATE_NEW_MESSAGE, text: text}
}