import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './dialog/DialogItem';
import {Message} from './dialog/message/Message';
import {DialogType, MessageType} from "../../redux/store";
import {InjectedFormProps, reduxForm, Field} from "redux-form";
import {Textarea} from "../common/formControl/FormControl";
import {maxLengthCreator, required} from "../../utils/validators/validators";

export type DialogsPropsType = {
    sendMessage: (newMessage: string) => void
    newTextMessage: string
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
export type AddMessageFormType = {
    newMessageBody: string
}


const Dialogs = (props: DialogsPropsType) => {
    let dialogsElements = props.dialogs.map((d, i) => <DialogItem key={i} name={d.name} id={d.id}/>)
    let messagesElements = props.messages.map((m, i) => <Message key={i} message={m.message}/>)


    const onSubmit = (DataFormType: AddMessageFormType) => {
        console.log(DataFormType)
        props.sendMessage(DataFormType.newMessageBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div>
                {messagesElements}
                <AddMessageReduxForm onSubmit={onSubmit}/>
            </div>
        </div>
    )
}


const maxLength50 = maxLengthCreator(50)

const AddMessageForm = (props: InjectedFormProps<AddMessageFormType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={'newMessageBody'}
                   component={Textarea}
                   validate={[required, maxLength50]}
                   placeholder='Enter your message'/>
            <button>Send</button>
        </form>
    )
}

const AddMessageReduxForm = reduxForm<AddMessageFormType>({
    form: 'dialogAddMessageForm'
})(AddMessageForm)

export default Dialogs;