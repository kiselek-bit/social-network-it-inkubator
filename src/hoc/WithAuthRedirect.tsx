import {Redirect} from "react-router";
import React from "react";
import {connect, ConnectedProps} from "react-redux";
import {RootStore} from "../redux/reduxStore";
import {PropsProfileContainerType} from "../components/profile/ProfileContainer";

type MapStateType = {
    isAuth: boolean
}
type ComponentType = () => PropsProfileContainerType

export function withAuthRedirect<T> (Component: React.ComponentType<T>) {

    class RedirectComponent extends React.Component<T & MapStateType, any> {
        render() {
            if(!this.props.isAuth) {
                return <Redirect to={'/login'}/>
            }
            return <Component {...this.props}/>
        }
    }

    const mapStateToProps = (state: RootStore): MapStateType => {
        return {isAuth: state.auth.isAuth}
    }


    // @ts-ignore
    const ConnectedRedirect = connect(mapStateToProps)(RedirectComponent)

    return ConnectedRedirect
}

// ConnectedProps<typeof ConnectedRedirect>

