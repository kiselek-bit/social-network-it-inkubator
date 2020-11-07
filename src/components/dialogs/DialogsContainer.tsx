import React from 'react';
import {DialogType, MessageType} from "../../redux/store";
import {addMessageActionCreate, updateNewMessageActionCreate} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

type PropsType ={

}


// const DialogsContainer = (props: PropsType) => {
//
//     let state = props.store.getState()
//     let dialogs: Array<DialogType> = state.dialogsPage.dialogs
//     let messages: Array<MessageType> = state.dialogsPage.messages
//     let newTextMessage = state.dialogsPage.newTextMessage
//
//     const sendMessage = () => {
//         props.store.dispatch(addMessageActionCreate())
//     }
//     const onChangeMessage = (text: string) => {
//         props.store.dispatch(updateNewMessageActionCreate(text))
//     }
//
//     return <Dialogs newTextMessage={newTextMessage}
//                     sendMessage={sendMessage}
//                     updateNeMessage={onChangeMessage}
//                     dialogs={dialogs}
//                     messages={messages}/>
// }

const mapStateToProps = (state: any) => {
    return {
        newTextMessage: state.dialogsPage.newTextMessage,
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages
    }
}
const mapDispatchToProps =(dispatch: any) => {
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