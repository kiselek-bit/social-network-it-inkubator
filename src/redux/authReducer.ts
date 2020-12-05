import {authAPI} from "../api/api";


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

export const isAuthorized = () => (dispatch: any) => {
    authAPI.checkAuth()
        .then((data) => {
            console.log(data)
            dispatch(setAuthUserData(data.data, data.resultCode === 0))
        })
}