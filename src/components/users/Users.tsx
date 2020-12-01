import React from "react";
import s from './Users.module.css'
import {UserType} from "../../redux/usersReducer";
import userPhoto from '../../assets/images/man-300x300.png'
import {Preloader} from "../common/preloader/Preloader";
import {NavLink} from "react-router-dom";
import axios from 'axios'

type PropsType = {
    users: Array<UserType>
    pageSize: number
    currentPage: number
    totalUsersCount: number
    addFriend: (userId: number) => void
    removeFriend: (userId: number) => void
    setCurrentPage: (currentPage: number) => void
    isFetching: boolean
    followingInProgress: number[]
    setFollowingInProgress: (followingInProgress: boolean, id: number) => void
}

export const Users = (props: PropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= 10; i++) { //change 10 on pageCount
        pages.push(i)
    }
    return (
        <>
            {props.isFetching && <Preloader/>}
            <div className={s.wrapper}>
                <div>
                    page: {pages.map(p => {
                    return <span className={(props.currentPage === p) ? s.activePage : s.page}
                                 onClick={() => {
                                     props.setCurrentPage(p)
                                 }}> {p} </span>
                })}
                </div>
                {props.users.map((u: any) => <div key={u.id} className={s.userWrapper}>
                    <div className={s.avatar}>
                        <NavLink to={`/profile/${u.id}`}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto}/>
                        </NavLink>
                    </div>
                    <div className={s.userInfo}>
                        <h3>{u.name}</h3>
                        <div>Age: {u.age}</div>
                        <div>{u.followed ?
                            <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.setFollowingInProgress(true, u.id)
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{
                                    withCredentials: true,
                                    headers: {
                                    'API-KEY': '433520f3-b807-456c-908f-67604d9c56a7'
                                    }
                                })
                                    .then((response => {
                                        if(response.data.resultCode === 0){
                                            props.removeFriend(u.id)
                                        }
                                        props.setFollowingInProgress(false, u.id)
                                    }))
                            }}>Remove from friends</button> :
                            <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.setFollowingInProgress(true, u.id)
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                    "API-KEY": '433520f3-b807-456c-908f-67604d9c56a7'
                                    }
                                })
                                    .then((response => {
                                        if(response.data.resultCode === 0){
                                            props.addFriend(u.id)
                                        }
                                        props.setFollowingInProgress(false, u.id)
                                    }))
                            }}>Add to friends</button>}
                        </div>
                        <div className={s.location}>
                            <span>{u.city},</span>
                            <span>{u.country}</span>
                        </div>
                    </div>
                </div>)}
            </div>
        </>
    )
}