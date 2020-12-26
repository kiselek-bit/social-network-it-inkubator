import {RootStore} from "./reduxStore";

export const getUsers = (state: RootStore) => {
    return state.usersPage.users
}
export const getPageSize = (state: RootStore) => {
    return state.usersPage.pageSize
}
export const getCurrentPage = (state: RootStore) => {
    return state.usersPage.currentPage
}
export const getTotalUsersCount = (state: RootStore) => {
    return state.usersPage.totalUsersCount
}
export const getIsFetching = (state: RootStore) => {
    return state.usersPage.isFetching
}
export const getFollowingInProgress = (state: RootStore) => {
    return state.usersPage.followingInProgress
}