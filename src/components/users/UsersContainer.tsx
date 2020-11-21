import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {
    addToFriendsAC,
    removeFromFriendsAC, setCurrentPageAC, setTotalUsersCountAC,
    setUsersAC,
    UsersActionsType, UsersType,
    UserType
} from "../../redux/usersReducer";
import {RootStore} from "../../redux/reduxStore";


const mapStateToProps = (state: RootStore): UsersType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        totalUsersCount: state.usersPage.totalUsersCount,
    }
}
const mapDispatchToProps = (dispatch: (action: UsersActionsType) => void) => {
    return {
        addFriend: (userId: number) => {
            dispatch(addToFriendsAC(userId))
        },
        removeFriend: (userId: number) => {
            dispatch(removeFromFriendsAC(userId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalUsersCount: number) => {
            dispatch(setTotalUsersCountAC(totalUsersCount))
        },
    }

}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)