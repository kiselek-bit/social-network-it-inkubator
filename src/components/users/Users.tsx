import React from "react";
import s from './Users.module.css'
import {UserType} from "../../redux/usersReducer";
import userPhoto from '../../assets/images/man-300x300.png'
import {Preloader} from "../common/preloader/Preloader";

type PropsType = {
    users: Array<UserType>
    pageSize: number
    currentPage: number
    totalUsersCount: number
    addFriend: (userId: number) => void
    removeFriend: (userId: number) => void
    setCurrentPage: (currentPage: number) => void
    isFetching: boolean
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
                    <div className={s.avatar}><img src={u.photos.small != null ? u.photos.small : userPhoto}/></div>
                    <div className={s.userInfo}>
                        <h3>{u.name}</h3>
                        <div>Age: {u.age}</div>
                        <div>{u.isFriend ?
                            <button onClick={() => {
                                props.removeFriend(u.id)
                            }}>Remove from friends</button> :
                            <button onClick={() => {
                                props.addFriend(u.id)
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