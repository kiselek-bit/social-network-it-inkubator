import React from "react";
import {WrappedFieldProps} from "redux-form/lib/Field";
import style from './FormControl.module.css'


export const Textarea: React.FC<WrappedFieldProps> = ({input, meta, ...restProps}) => {

    const hasError = meta.touched && meta.error
    return (
        <div className={style.formControl + ' ' + (hasError ? style.error : '')}>
            <div>
                <textarea{...input} {...restProps}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Input: React.FC<WrappedFieldProps> = ({input, meta, ...restProps}) => {

    const hasError = meta.touched && meta.error
    return (
        <div className={style.formControl + ' ' + (hasError ? style.error : '')}>
            <div>
                <input{...input} {...restProps}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}