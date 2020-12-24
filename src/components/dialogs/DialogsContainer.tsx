import React from 'react';
import {
    AddMessageActionType,
    UpdateNewMessageActionType
} from "../../redux/store";
import {addMessageActionCreate} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {RootStore} from "../../redux/reduxStore";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";



const mapStateToProps = (state: RootStore) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages
    }
}
const mapDispatchToProps =(dispatch: (action: UpdateNewMessageActionType | AddMessageActionType) => void) => {
    return {
        sendMessage: (newMessage: string) => {
            dispatch(addMessageActionCreate(newMessage))
        },
    }
}
//
// const WithRedirectDialogs = withAuthRedirect(Dialogs)
//
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(WithRedirectDialogs)



export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs) as React.ComponentType;