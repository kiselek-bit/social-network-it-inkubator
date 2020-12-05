import React from "react";
import {connect} from "react-redux";
import {
    UsersType,
    UserType, getUsers, unfollow, follow
} from "../../redux/usersReducer";
import {RootStore} from "../../redux/reduxStore";
import {Users} from "./Users";

type PropsUsersType = {
    users: Array<UserType>
    pageSize: number
    currentPage: number
    totalUsersCount: number
    isFetching: boolean
    followingInProgress: number[]
    getUsers: (currentPage: number, pageSize: number) => void
    unfollow: (userId: number) => void
    follow: (userId: number) => void
}

class UsersContainerAPI extends React.Component<PropsUsersType, {}> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    setCurrentPage = (p: number) => {
        this.props.getUsers(p, this.props.pageSize)
    }

    render() {
        return (
            <Users currentPage={this.props.currentPage}
                   pageSize={this.props.pageSize}
                   setCurrentPage={this.setCurrentPage}
                   totalUsersCount={this.props.totalUsersCount}
                   isFetching={this.props.isFetching}
                   followingInProgress={this.props.followingInProgress}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}/>
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
    getUsers,
    unfollow,
    follow,
})(UsersContainerAPI)