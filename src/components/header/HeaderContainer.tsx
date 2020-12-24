import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {isAuthorized, logout} from "../../redux/authReducer";
import {RootStore} from "../../redux/reduxStore";

type PropsType = {
    isAuthorized: () => void
    logout: () => void
    isAuth: boolean
    login: string | null
}

class HeaderContainerAPI  extends React.Component<PropsType, {}>{

    componentDidMount() {
        this.props.isAuthorized()
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

let HeaderContainer = connect(mapStateToProps, {isAuthorized, logout})(HeaderContainerAPI)

export default HeaderContainer;