import {applyMiddleware, combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogsReducer";
import {profileReducer} from "./profileReducer";
import {navbarReducer} from "./navbarReducer";
import {usersReducer} from "./usersReducer";
import {authReducer} from "./authReducer";
import thunk from "redux-thunk";

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    navbar: navbarReducer,
    auth: authReducer,
})

export let store = createStore(reducers, applyMiddleware(thunk))
export type RootStore = ReturnType<typeof reducers>

// @ts-ignore
window.store = store