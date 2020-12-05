import React from 'react';
import {
    AddMessageActionType,
    UpdateNewMessageActionType
} from "../../redux/store";
import {addMessageActionCreate, updateNewMessageActionCreate} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {RootStore} from "../../redux/reduxStore";



const mapStateToProps = (state: RootStore) => {
    return {
        newTextMessage: state.dialogsPage.newTextMessage,
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        isAuth: state.auth.isAuth
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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;