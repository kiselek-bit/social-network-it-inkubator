import {authAPI} from "../api/api";
import {Dispatch} from "redux";
import {DispatchProp} from "react-redux";


export type UserDataType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
}
type SetUserDataActionType = {
    type: ACTION_TYPES.SET_USER_DATA
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
}


enum ACTION_TYPES {
    SET_USER_DATA = 'SET_USER_DATA',
}

let initialState: UserDataType = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}


export const authReducer = (state: UserDataType = initialState, action: SetUserDataActionType) => {
    switch (action.type) {
        case ACTION_TYPES.SET_USER_DATA:
            return {
                ...state,
                ...action,
                isAuth: action.isAuth
            }
        default:
            return state
    }
}

export const setAuthUserData = (data: UserDataType, isAuth: boolean): SetUserDataActionType => {
    return {type: ACTION_TYPES.SET_USER_DATA, id: data.id, email: data.email, login: data.login, isAuth}
}

export const isAuthorized = () => (dispatch: Dispatch) => {
    authAPI.checkAuth()
        .then((data) => {
            dispatch(setAuthUserData(data.data, data.resultCode === 0))
        })
}
export const login = (email: string, password: string, rememberMe: boolean, captcha?: boolean) => (dispatch: any) => {
    authAPI.login(email, password, rememberMe)
        .then((data) => {
            if (data.data.resultCode === 0) {
                dispatch(isAuthorized())
            }
        })
}

export const logout = () => (dispatch: any) => {
    authAPI.logout()
        .then((response) => {
            if (response.data.resultCode === 0) {
                let InitialState: UserDataType = {login: null, email: null, isAuth: false, id: null}
                dispatch(setAuthUserData(InitialState, false))
            }
        })
}

