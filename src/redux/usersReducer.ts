import {usersAPI} from "../api/api";

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
    followingInProgress: number[]
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
type FollowingInProgressActionType = {
    type: ACTION_TYPES.FOLLOWING_IN_PROGRESS
    followingInProgress: boolean
    id: number
}

export type UsersActionsType = AddToFriendsActionType | RemoveFromFriendsActionType |
    SetUsersActionType | SetCurrentPageActionType | SetTotalUsersCountActionType |
    ToggleIsFetchingActionType | FollowingInProgressActionType

enum ACTION_TYPES {
    ADD_TO_FRIENDS = 'ADD-TO-FRIENDS',
    REMOVE_FROM_FRIENDS = 'REMOVE-FROM-FRIENDS',
    SET_USERS = 'SET-USERS',
    SET_CURRENT_PAGE = 'SET-CURRENT-PAGE',
    SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT',
    TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING',
    FOLLOWING_IN_PROGRESS = 'FOLLOWING_IN_PROGRESS'
}

let initialState: UsersType = {
    users: [],
    totalUsersCount: 0,
    currentPage: 1,
    pageSize: 10,
    isFetching: true,
    followingInProgress: []
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
        case ACTION_TYPES.FOLLOWING_IN_PROGRESS:
            return {...state, followingInProgress: action.followingInProgress
                    ? [...state.followingInProgress, action.id]
            : state.followingInProgress.filter(id => id !== action.id)}
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
export const setFollowingInProgress = (followingInProgress: boolean, id: number): FollowingInProgressActionType => {
    return {type: ACTION_TYPES.FOLLOWING_IN_PROGRESS, followingInProgress, id}
}

export const getUsers = (currentPage: number, pageSize: number) => (dispatch: any) => {
    dispatch(toggleIsFetching(true))
    usersAPI.getUsers(currentPage,pageSize)
        .then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data['items']))
            dispatch(setTotalUsersCount(data['totalCount']))
            dispatch(setCurrentPage(currentPage))
        })
}
export const unfollow = (userId: number) => (dispatch: any) => {
    dispatch(setFollowingInProgress(true, userId))
    usersAPI.unfollow(userId)
        .then((response => {
            if(response.data.resultCode === 0){
                dispatch(removeFriend(userId))
            }
            dispatch(setFollowingInProgress(false, userId))
        }))
}
export const follow = (userId: number) => (dispatch: any) => {
    dispatch(setFollowingInProgress(true, userId))
    usersAPI.follow(userId)
        .then((response => {
            if(response.data.resultCode === 0){
                dispatch(addFriend(userId))
            }
            dispatch(setFollowingInProgress(false, userId))
        }))
}