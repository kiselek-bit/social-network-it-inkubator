import React from 'react';
import s from './Profile.module.css'
import Profile from "./Profile";
import {connect} from "react-redux";
import {RootStore} from "../../redux/reduxStore";
import {getProfile, getStatus, updateStatus} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router";
import {compose} from "redux";


export type ProfileType = {
    aboutMe: string
    contacts: {}
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    photos: {
        small: string,
        large: string
    }
    userId: number
}
type MapStatePropsType = {
    profile: ProfileType
    status: string
    authorizedUserId: number | null
    isAuth: boolean
}
type MapDispatchPropsType = {
    getProfile: (profileId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
}
type OwnPropsType = MapDispatchPropsType & MapStatePropsType
type PathParamsType = {
    userId: string
}
export type PropsProfileContainerType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainerAPI extends React.Component<PropsProfileContainerType, {}> {

    componentDidMount() {
        let userId = +this.props.match.params.userId
        if (!userId) {
            if(this.props.authorizedUserId) {
                userId = this.props.authorizedUserId
            } else {
                this.props.history.push("/login")
            }
        }
        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return <div className={s.content}>
            <Profile {...this.props} profile = {this.props.profile}/>
        </div>
    }
}

const mapStateToProps = (state: RootStore): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.id,
        isAuth: state.auth.isAuth
    }
}

export default compose(
    connect(mapStateToProps, {getProfile, getStatus, updateStatus}),
    withRouter
)(ProfileContainerAPI) as React.ComponentType