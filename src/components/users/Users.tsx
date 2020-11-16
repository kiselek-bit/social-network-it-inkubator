import React from "react";
import s from './Users.module.css'
import {UserType} from "../../redux/usersReducer";
import axios from 'axios'
import userPhoto from '../../assets/images/man-300x300.png'

type PropsType = {
    users: Array<UserType>
    addFriend: (userId: number) => void
    removeFriend: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
}

export class Users extends React.Component<PropsType, {}> {

    componentDidMount() {
        alert('I render')
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    this.props.setUsers(response.data['items'])
                })
    }

    render() {
        return (
            <div className={s.wrapper}>
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