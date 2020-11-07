export type UserType = {
    id: number
    name: string
    age: number
    city: string
    country: string
    isFriend: boolean
    profileImg: string
}
export type UsersType = {
    users: Array<UserType>
}

type AddToFriendsActionType = {
    type: 'ADD-TO-FRIENDS'
    userId: number
}
type RemoveFromFriendsActionType = {
    type: 'REMOVE-FROM-FRIENDS'
    userId: number
}
type SetUsersActionType = {
    type: 'SET-USERS'
    users: Array<UserType>
}
type UsersActionsType = AddToFriendsActionType | RemoveFromFriendsActionType |
    SetUsersActionType

const ADD_TO_FRIENDS = 'ADD-TO-FRIENDS'
const REMOVE_FROM_FRIENDS = 'REMOVE-FROM-FRIENDS'
const SET_USERS = 'SET-USERS'

let initialState: UsersType = {
    users: [
        // {
        //     id: 1,
        //     name: 'Andrew',
        //     age: 22,
        //     city: "Minsk",
        //     country: 'Belarus',
        //     isFriend: true,
        //     profileImg: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png'
        // },
        // {
        //     id: 2,
        //     name: 'Alex',
        //     age: 29,
        //     city: "Kiev",
        //     country: 'Ukraine',
        //     isFriend: false,
        //     profileImg: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png'
        // },
        // {
        //     id: 3,
        //     name: 'Mary',
        //     age: 17,
        //     city: "Minsk",
        //     country: 'Belarus',
        //     isFriend: true,
        //     profileImg: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png'
        // },
        // {
        //     id: 4,
        //     name: 'Pieter',
        //     age: 26,
        //     city: "Moscow",
        //     country: 'Russia',
        //     isFriend: true,
        //     profileImg: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png'
        // },
        // {
        //     id: 5,
        //     name: 'Helen',
        //     age: 32,
        //     city: "Berlin",
        //     country: 'Germany',
        //     isFriend: false,
        //     profileImg: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png'
        // },
    ]
}

export const usersReducer = (state: UsersType = initialState, action: UsersActionsType): UsersType => {
    switch (action.type) {
        case ADD_TO_FRIENDS:
            let newState = {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            isFriend: true
                        }
                    }
                    return u
                })
            }
            debugger
            return newState
        case REMOVE_FROM_FRIENDS:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            isFriend: false
                        }
                    }
                    return u
                })
            };
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state
    }
}

export const addToFriendsAC = (userId: number): AddToFriendsActionType => {
    return {type: ADD_TO_FRIENDS, userId: userId}
}
export const removeFromFriendsAC = (userId: number): RemoveFromFriendsActionType => {
    return {type: REMOVE_FROM_FRIENDS, userId: userId}
}
export const setUsersAC = (users: Array<UserType>): SetUsersActionType => {
    return {type: SET_USERS, users: users}
}
