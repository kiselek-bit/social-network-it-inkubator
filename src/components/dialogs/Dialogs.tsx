import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './dialog/DialogItem';
import {Message} from './dialog/message/Message';
import {
    ActionsTypes,
    addMessageActionCreate,
    DialogsPageType,
    DialogType,
    MessageType,
    updateNewMessageActionCreate
} from "../../redux/state";

type PropsType ={
    dialogsState: DialogsPageType
    dispatch: (action: ActionsTypes) => void
}


const Dialogs = (props: PropsType) => {

    let dialogs: Array<DialogType> = props.dialogsState.dialogs
    let messages: Array<MessageType> = props.dialogsState.messages
    let dialogsElements = dialogs.map( d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = messages.map( m => <Message message={m.message}/>)
    let newTextMessage = props.dialogsState.newTextMessage

    const sendMessage = () => {
        props.dispatch(addMessageActionCreate())
    }
    const onChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text: string = e.currentTarget.value
        props.dispatch(updateNewMessageActionCreate(text))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                { dialogsElements }
            </div>
            <div>
                { messagesElements }
                <div>
                    <textarea onChange={onChangeMessage}
                              value={newTextMessage}/>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;