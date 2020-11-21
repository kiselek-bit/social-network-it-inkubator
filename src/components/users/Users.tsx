import React from "react";
import s from './Users.module.css'
import {UserType} from "../../redux/usersReducer";
import axios from 'axios'
import userPhoto from '../../assets/images/man-300x300.png'

type PropsType = {
    users: Array<UserType>
    pageSize: number
    currentPage: number
    totalUsersCount: number
    addFriend: (userId: number) => void
    removeFriend: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
}

export class Users extends React.Component<PropsType, {}> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data['items'])
                this.props.setTotalUsersCount(response.data['totalCount'])
            })
    }

    setCurrentPage = (p: number) => {
        this.props.setCurrentPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data['items'])
            })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= 10; i++) { //change 10 on pageCount
            pages.push(i)
        }
        return (
            <div className={s.wrapper}>
                <div>
                    page: {pages.map(p => {
                    return <span className={(this.props.currentPage === p) ? s.activePage : s.page}
                                 onClick={() => {
                                     this.setCurrentPage(p)
                                 }}> {p} </span>
                })}
                </div>
                {this.props.users.map((u: any) => <div key={u.id} className={s.userWrapper}>
                    <div className={s.avatar}><img src={u.photos.small != null ? u.photos.small : userPhoto}/></div>
                    <div className={s.userInfo}>
                        <h3>{u.name}</h3>
                        <div>Age: {u.age}</div>
                        <div>{u.isFriend ?
                            <button onClick={() => {
                                this.props.removeFriend(u.id)
                            }}>Remove from friends</button> :
                            <button onClick={() => {
                                this.props.addFriend(u.id)
                            }}>Add to friends</button>}
                        </div>
                        <div className={s.location}>
                            <span>{u.city},</span>
                            <span>{u.country}</span>
                        </div>
                    </div>
                </div>)}
            </div>
        );
    }
}