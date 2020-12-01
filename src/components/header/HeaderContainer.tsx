import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData, UserDataType} from "../../redux/authReducer";
import {RootStore} from "../../redux/reduxStore";
import {authAPI} from "../../api/api";

type PropsType = {
    setAuthUserData: (data: UserDataType, isAuth: boolean) => void
    isAuth: boolean
    login: string | null
}

class HeaderContainerAPI  extends React.Component<PropsType, {}>{

    componentDidMount() {
        authAPI.checkAuth()
            .then((data) => {
                this.props.setAuthUserData(data.data, true)
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