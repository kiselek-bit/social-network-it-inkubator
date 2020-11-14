import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {
    addToFriendsAC,
    removeFromFriendsAC,
    setUsersAC,
    UsersActionsType,
    UsersType,
    UserType
} from "../../redux/usersReducer";

type UsersStateType = {
    usersPage: UsersType
}

const mapStateToProps = (state: UsersStateType) => {
    return {
        users: state.usersPage.users
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
        }
    }

}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)