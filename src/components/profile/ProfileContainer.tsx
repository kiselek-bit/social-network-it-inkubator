import React from 'react';
import s from './Profile.module.css'
import Profile from "./Profile";
import {connect} from "react-redux";
import {RootStore} from "../../redux/reduxStore";
import {getProfile} from "../../redux/profileReducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router";


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
    isAuth: boolean
}
type MapDispatchPropsType = {
    getProfile: (profileId: number) => void
}
type OwnPropsType = MapDispatchPropsType & MapStatePropsType
type PathParamsType = {
    userId: string
}
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainerAPI extends React.Component<PropsType, {}> {

    componentDidMount() {
        let userId = this.props.match.params.userId? this.props.match.params.userId: 12396

        this.props.getProfile(+userId)
    }

    render() {
        if(!this.props.isAuth) {
            return <Redirect to={'/login'}/>
        }
        return <div className={s.content}>
            <Profile {...this.props} profile = {this.props.profile}/>
        </div>
    }
}

const mapStateToProps = (state: RootStore): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth,
    }
}
const WithRouterComponentProfile = withRouter(ProfileContainerAPI)

const ProfileContainer = connect(mapStateToProps, {getProfile})(WithRouterComponentProfile)

export default ProfileContainer;