import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData, UserDataType} from "../../redux/authReducer";
import {RootStore} from "../../redux/reduxStore";

type PropsType = {
    setAuthUserData: (data: UserDataType, isAuth: boolean) => void
    isAuth: boolean
    login: string | null
}

class HeaderContainerAPI  extends React.Component<PropsType, {}>{

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true
        })
            .then((response) => {
                this.props.setAuthUserData(response.data.data, true)
            })
    }

    render() {
        return <Header {...this.props}/>
    }
}
const mapStateToProps = (state: RootStore) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}

let HeaderContainer = connect(mapStateToProps, {setAuthUserData})(HeaderContainerAPI)

export default HeaderContainer;