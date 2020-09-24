import React from 'react';
import s from './Dialogs.module.css'
import { DialogItem } from './dialog/DialogItem';
import { Message } from './dialog/message/Message';

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogItem name={"Victoria"} id={1}/>
                <DialogItem name={"Marina"} id={2}/>
                <DialogItem name={"Petya"} id={3}/>
                <DialogItem name={"Misha"} id={4}/>
                <DialogItem name={"Vova"} id={5}/>
                <DialogItem name={"Sveta"} id={6}/>
            </div>
            <div>
                <Message message={"Hi!"}/>
                <Message message={"Hello! How are you?"}/>
                <Message message={"Yo"}/>
                <Message message={"Looking this video ..."}/>
                <Message message={"You forever!"}/>
            </div>
        </div>
    )
}

export default Dialogs;