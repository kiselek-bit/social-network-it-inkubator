import {connect} from "react-redux";
import {Friends} from "./Friends";

const mapStateToProps = (state: any) => {
    return {
        friendsState: state.navbar.friends
    }
}
const mapDispatchToProps = () => {
    return {

    }
}

export const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)