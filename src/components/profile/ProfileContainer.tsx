import React from 'react';
import s from './Profile.module.css'
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {RootStore} from "../../redux/reduxStore";
import {setUserProfile} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router";


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
}
type MapDispatchPropsType = {
    setUserProfile: (profile: ProfileType) => void
}
type OwnPropsType = MapDispatchPropsType & MapStatePropsType
type PathParamsType = {
    userId: string
}
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainerAPI extends React.Component<PropsType, {}> {

    componentDidMount() {
        let userId = this.props.match.params.userId? this.props.match.params.userId: 2

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+ userId)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return <div className={s.content}>
            <Profile {...this.props} profile = {this.props.profile}/>
        </div>
    }
}

const mapStateToProps = (state: RootStore): MapStatePropsType => {
    return {
        profile: state.profilePage.profile
    }
}
const WithRouterComponentProfile = withRouter(ProfileContainerAPI)

const ProfileContainer = connect(mapStateToProps, {setUserProfile})(WithRouterComponentProfile)

export default ProfileContainer;