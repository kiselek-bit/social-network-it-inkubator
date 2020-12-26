import React from "react";
import {reduxForm, Field, InjectedFormProps} from "redux-form";
import {Input} from "../common/formControl/FormControl";
import {required} from "../../utils/validators/validators";
import {login} from "../../redux/authReducer";
import {connect} from "react-redux";
import {RootStore} from "../../redux/reduxStore";
import {Redirect} from "react-router";
import style from '../common/formControl/FormControl.module.css'

type FormDataSubmitType = {
    email: string
    password: string
    rememberMe: boolean
}


export const LoginForm: React.FC<InjectedFormProps<FormDataSubmitType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'}
                       name={'email'}
                       validate={[required]}
                       component={Input}/>
            </div>
            <div>
                <Field placeholder={'Password'}
                       type={'password'}
                       name={'password'}
                       validate={[required]}
                       component={Input}/>
            </div>
            <div>
                <Field component={Input}
                       name={'rememberMe'}
                       type={'checkbox'}/> remember me
            </div>
            {props.error && <div className={style.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}


const LoginReduxForm = reduxForm<FormDataSubmitType>({form: 'login'})(LoginForm)


type LoginProps = {
    isAuth: boolean
    login: (email: string, password: string, rememberMe: boolean, captcha?: boolean) => void
}
export const Login = (props: LoginProps) => {
    const onSubmit = (formData: FormDataSubmitType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state: RootStore) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export const LoginContainer = connect(mapStateToProps, {login})(Login)