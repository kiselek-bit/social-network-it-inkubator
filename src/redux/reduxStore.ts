import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogsReducer";
import {profileReducer} from "./profileReducer";
import {navbarReducer} from "./navbarReducer";
import {usersReducer} from "./usersReducer";
import {authReducer} from "./authReducer";

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    navbar: navbarReducer,
    auth: authReducer,
})

export let store = createStore(reducers)
export type RootStore = ReturnType<typeof reducers>

// @ts-ignore
window.store = store