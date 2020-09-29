import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './dialog/DialogItem';
import {Message} from './dialog/message/Message';
import {DialogsPageType, DialogType, MessageType} from "../../redux/state";

export type DialogDataTypes = {
    id: number
    name: string
}
type PropsType ={
    dialogsState: DialogsPageType
}
type DialogsStateType= {

}

const Dialogs = (props: PropsType) => {

    let dialogs: Array<DialogType> = props.dialogsState.dialogs
    let messages: Array<MessageType> = props.dialogsState.messages
    let dialogsElements = dialogs.map( d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = messages.map( m => <Message message={m.message}/>)


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                { dialogsElements }
            </div>
            <div>
                { messagesElements }
            </div>
        </div>
    )
}

export default Dialogs;