import React from 'react';
import {
    AddMessageActionType,
    UpdateNewMessageActionType
} from "../../redux/store";
import {addMessageActionCreate, updateNewMessageActionCreate} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {RootStore} from "../../redux/reduxStore";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";



const mapStateToProps = (state: RootStore) => {
    return {
        newTextMessage: state.dialogsPage.newTextMessage,
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages
    }
}
const mapDispatchToProps =(dispatch: (action: UpdateNewMessageActionType | AddMessageActionType) => void) => {
    return {
        sendMessage: () => {
            dispatch(addMessageActionCreate())
        },
        updateNewMessage: (text: string) => {
            dispatch(updateNewMessageActionCreate(text))
        }
    }
}

const WithRedirectDialogs = withAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(WithRedirectDialogs)



export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs) as React.ComponentType;