import {ActionsTypes, NavbarFriendsType} from "./store";

let initialState: NavbarFriendsType = {
    friends: [
        {id: 1, name: 'Andrew'},
        {id: 1, name: 'Mary'},
        {id: 1, name: 'Pieter'}
    ]
}

export const navbarReducer = (state: NavbarFriendsType = initialState, action: ActionsTypes):NavbarFriendsType => {


    return state
}