import {Dispatch} from "redux";
import {isAuthorized} from "./authReducer";
import {DispatchProp} from "react-redux";


export type AppReducerType = {
    initialized: boolean
}
type InitializedSuccessType = {
    type: ACTION_TYPES.INITIALIZED_SUCCESS
}


enum ACTION_TYPES {
    INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS',
}

let initialState: AppReducerType = {
    initialized: false
}


export const appReducer = (state: AppReducerType = initialState, action: InitializedSuccessType) => {
    switch (action.type) {
        case ACTION_TYPES.INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export const initializedSuccess = (): InitializedSuccessType => {
    return {type: ACTION_TYPES.INITIALIZED_SUCCESS}
}

export const initializeApp = () => (dispatch: any) => {
    dispatch(isAuthorized())
        .then(() => {
            dispatch(initializedSuccess())
        })
}

