import React from "react";
import {connect} from "react-redux";
import {
    addFriend,
    setFollowingInProgress,
    removeFriend,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    UsersType,
    UserType
} from "../../redux/usersReducer";
import {RootStore} from "../../redux/reduxStore";
import {Users} from "./Users";
import {usersAPI} from "../../api/api";

type PropsType = {
    users: Array<UserType>
    pageSize: number
    currentPage: number
    totalUsersCount: number
    isFetching: boolean
    followingInProgress: number[]
    addFriend: (userId: number) => void
    removeFriend: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    setFollowingInProgress: (followingInProgress: boolean, id: number) => void
}

class UsersContainerAPI extends React.Component<PropsType, {}> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data['items'])
                this.props.setTotalUsersCount(data['totalCount'])
            })
    }

    setCurrentPage = (p: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(p)
        usersAPI.getUsers(p, this.props.pageSize)
            .then(data => {
                this.props.setUsers(data['items'])
                this.props.toggleIsFetching(false)
            })
    }

    render() {
        return (
            <Users addFriend={this.props.addFriend}
                   currentPage={this.props.currentPage}
                   pageSize={this.props.pageSize}
                   removeFriend={this.props.removeFriend}
                   setCurrentPage={this.setCurrentPage}
                   totalUsersCount={this.props.totalUsersCount}
                   isFetching={this.props.isFetching}
                   followingInProgress={this.props.followingInProgress}
                   setFollowingInProgress={this.props.setFollowingInProgress}
                   users={this.props.users}/>
        );
    }
}


const mapStateToProps = (state: RootStore): UsersType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        totalUsersCount: state.usersPage.totalUsersCount,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export const UsersContainer = connect(mapStateToProps, {
    addFriend,
    removeFriend,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    setFollowingInProgress
})(UsersContainerAPI)