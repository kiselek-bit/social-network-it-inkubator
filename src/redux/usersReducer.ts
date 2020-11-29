
export type UserType = {
    id: number
    name: string
    age: number
    city: string
    country: string
    followed: boolean
    photos: {
        small: string
        large: string
    }
}
export type UsersType = {
    users: Array<UserType>
    pageSize: number
    currentPage: number
    totalUsersCount: number
    isFetching: boolean
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
type SetCurrentPageActionType = {
    type: ACTION_TYPES.SET_CURRENT_PAGE
    currentPage: number
}
type SetTotalUsersCountActionType = {
    type: ACTION_TYPES.SET_TOTAL_USERS_COUNT
    totalUsersCount: number
}
type ToggleIsFetchingActionType = {
    type: ACTION_TYPES.TOGGLE_IS_FETCHING
    isFetching: boolean
}

export type UsersActionsType = AddToFriendsActionType | RemoveFromFriendsActionType |
    SetUsersActionType | SetCurrentPageActionType | SetTotalUsersCountActionType |
    ToggleIsFetchingActionType

enum ACTION_TYPES {
    ADD_TO_FRIENDS = 'ADD-TO-FRIENDS',
    REMOVE_FROM_FRIENDS = 'REMOVE-FROM-FRIENDS',
    SET_USERS = 'SET-USERS',
    SET_CURRENT_PAGE = 'SET-CURRENT-PAGE',
    SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT',
    TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING',
}

let initialState: UsersType = {
    users: [],
    totalUsersCount: 0,
    currentPage: 1,
    pageSize: 10,
    isFetching: true
}

export const usersReducer = (state: UsersType = initialState, action: UsersActionsType): UsersType => {
    switch (action.type) {
        case ACTION_TYPES.ADD_TO_FRIENDS:
            let newState = {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: true
                        }
                    }
                    return u
                })
            }
            return newState
        case ACTION_TYPES.REMOVE_FROM_FRIENDS:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: false
                        }
                    }
                    return u
                })
            };
        case ACTION_TYPES.SET_USERS:
            console.log(action.users)
            return {
                ...state,
                users: [...action.users]
                    // action.users.map((u, i) => ({...u, isFriend: action.users[i]}))],
            }
        case ACTION_TYPES.SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case ACTION_TYPES.SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}
        case ACTION_TYPES.TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        default:
            return state
    }
}

export const addFriend = (userId: number): AddToFriendsActionType => {
    return {type: ACTION_TYPES.ADD_TO_FRIENDS, userId: userId}
}
export const removeFriend = (userId: number): RemoveFromFriendsActionType => {
    return {type: ACTION_TYPES.REMOVE_FROM_FRIENDS, userId: userId}
}
export const setUsers = (users: Array<UserType>): SetUsersActionType => {
    return {type: ACTION_TYPES.SET_USERS, users: users}
}
export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => {
    return {type: ACTION_TYPES.SET_CURRENT_PAGE, currentPage}
}
export const setTotalUsersCount = (totalUsersCount: number): SetTotalUsersCountActionType => {
    return {type: ACTION_TYPES.SET_TOTAL_USERS_COUNT, totalUsersCount}
}
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType => {
    return {type: ACTION_TYPES.TOGGLE_IS_FETCHING, isFetching}
}
