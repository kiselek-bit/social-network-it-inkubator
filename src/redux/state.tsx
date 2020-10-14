import React from "react";
import {rerender} from "../render";

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
}
export type FriendType ={
    id: number
    name: string
}
export type NavbarFriendsType = {
    friends: Array<FriendType>
}
export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    navbar: NavbarFriendsType
}

export let state: StateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likes: 4},
            {id: 2, message: 'It\'s my first post', likes: 7}
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: "Viktoria"},
            {id: 2, name: "Marina"},
            {id: 3, name: "Petya"},
            {id: 4, name: "Misha"},
            {id: 5, name: "Vova"},
            {id: 6, name: "Sveta"}
        ],
        messages: [
            {id: 1, message: "Hi"},
            {id: 2, message: "Hello! How are you?"},
            {id: 3, message: "Yo"},
            {id: 4, message: "Looking this video ..."},
            {id: 5, message: "You forever!"}
        ]
    },
    navbar: {
        friends: [
            {id: 1, name: 'Andrew'},
            {id: 1, name: 'Mary'},
            {id: 1, name: 'Pieter'}
        ]
    }
}

 export const addPost = (text: string) => {

    state.profilePage.posts.unshift(
        {id: 3, message: text, likes: 0}
    )
     rerender(state)
}