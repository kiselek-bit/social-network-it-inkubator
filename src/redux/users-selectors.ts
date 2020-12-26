import {RootStore} from "./reduxStore";
import {createSelector} from "reselect";

const getUsersSelector = (state: RootStore) => {
    return state.usersPage.users
}

export const getUsers = createSelector(getUsersSelector, (users) => {
    return users.filter(u => true)
})
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