import React from "react";
import {connect} from "react-redux";
import {
    addFriend, removeFriend, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching,
    UsersType,
    UserType
} from "../../redux/usersReducer";
import {RootStore} from "../../redux/reduxStore";
import axios from "axios";
import {Users} from "./Users";

type PropsType = {
    users: Array<UserType>
    pageSize: number
    currentPage: number
    totalUsersCount: number
    isFetching: boolean
    addFriend: (userId: number) => void
    removeFriend: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}

class UsersContainerAPI extends React.Component<PropsType, {}> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data['items'])
                this.props.setTotalUsersCount(response.data['totalCount'])
            })
    }

    setCurrentPage = (p: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data['items'])
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
        isFetching: state.usersPage.isFetching
    }
}
// const mapDispatchToProps = (dispatch: (action: UsersActionsType) => void) => {
//     return {
//         addFriend: (userId: number) => {
//             dispatch(addToFriendsAC(userId))
//         },
//         removeFriend: (userId: number) => {
//             dispatch(removeFromFriendsAC(userId))
//         },
//         setUsers: (users: Array<UserType>) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (currentPage: number) => {
//             dispatch(setCurrentPageAC(currentPage))
//         },
//         setTotalUsersCount: (totalUsersCount: number) => {
//             dispatch(setTotalUsersCountAC(totalUsersCount))
//         },
//         toggleIsFetching: (isFetching: boolean) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
//
// }

export const UsersContainer = connect(mapStateToProps, {
    addFriend,
    removeFriend,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching
})(UsersContainerAPI)