import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './dialog/DialogItem';
import {Message} from './dialog/message/Message';
import {DialogType,MessageType} from "../../redux/store";
import {Redirect} from "react-router";

export type DialogsPropsType ={
    sendMessage: () => void
    updateNewMessage: (text: string) => void
    newTextMessage: string
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    isAuth: boolean
}


const Dialogs = (props: DialogsPropsType) => {
    let dialogsElements = props.dialogs.map( (d,i) => <DialogItem key={i} name={d.name} id={d.id}/>)
    let messagesElements = props.messages.map( (m,i) => <Message key={i} message={m.message}/>)


    const sendMessage = () => {
        props.sendMessage()
    }
    const onChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text: string = e.currentTarget.value
        props.updateNewMessage(text)
    }

    if(!props.isAuth) {
        return <Redirect to={'/login'}/>
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
                              placeholder='Enter your message'
                              value={props.newTextMessage}/>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;