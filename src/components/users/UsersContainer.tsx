import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {addToFriendsAC, removeFromFriendsAC, setUsersAC, UserType} from "../../redux/usersReducer";

const mapStateToProps = (state: any) => {
    return {
        users: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        addFriend: (userId: number) => {
            dispatch(addToFriendsAC(userId))
        },
        removeFriend: (userId: number) => {
            dispatch(removeFromFriendsAC(userId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        }
    }

}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)