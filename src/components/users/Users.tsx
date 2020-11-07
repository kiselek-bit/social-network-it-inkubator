import React from "react";
import s from './Users.module.css'
import {UserType} from "../../redux/usersReducer";

type PropsType = {
    users: Array<UserType>
    addFriend: (userId: number) => void
    removeFriend: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
}

export function Users(props: PropsType) {

    if(props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                name: 'Andrew',
                age: 22,
                city: "Minsk",
                country: 'Belarus',
                isFriend: true,
                profileImg: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png'
            },
            {
                id: 2,
                name: 'Alex',
                age: 29,
                city: "Kiev",
                country: 'Ukraine',
                isFriend: false,
                profileImg: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png'
            },
            {
                id: 3,
                name: 'Mary',
                age: 17,
                city: "Minsk",
                country: 'Belarus',
                isFriend: true,
                profileImg: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png'
            },
            {
                id: 4,
                name: 'Pieter',
                age: 26,
                city: "Moscow",
                country: 'Russia',
                isFriend: true,
                profileImg: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png'
            },
            {
                id: 5,
                name: 'Helen',
                age: 32,
                city: "Berlin",
                country: 'Germany',
                isFriend: false,
                profileImg: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png'
            },
        ])
    }

    let usersList = props.users.map(u => {
        return (
            <div key={u.id} className={s.userWrapper}>
                <div className={s.avatar}><img src={u.profileImg}/></div>
                <div className={s.userInfo}>
                    <h3>{u.name}</h3>
                    <div>Age: {u.age}</div>
                    <div>{u.isFriend ?
                        <button onClick={() => {props.removeFriend(u.id)}}>Remove from friends</button> :
                        <button onClick={() => {props.addFriend(u.id)}}>Add to friends</button>}
                    </div>
                    <div className={s.location}>
                        <span>{u.city},</span>
                        <span>{u.country}</span>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div className={s.wrapper}>
            {usersList}
        </div>
    )
}