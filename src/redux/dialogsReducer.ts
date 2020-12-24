import {ActionsTypes, AddMessageActionType, DialogsPageType} from "./store";

const ADD_MESSAGE = 'ADD-MASSAGE'

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
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsTypes): DialogsPageType => {


    switch (action.type) {
        case ADD_MESSAGE:
            return  {
                ...state,
                messages: [...state.messages, {id: 6, message: action.newMessage}]
            }
        default:
            return state
    }
}

export const addMessageActionCreate = (newMessage: string): AddMessageActionType => ({type: ADD_MESSAGE, newMessage})