import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogsReducer";
import {profileReducer} from "./profileReducer";
import {navbarReducer} from "./navbarReducer";
import {usersReducer} from "./usersReducer";

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    navbar: navbarReducer
})

export let store = createStore(reducers)
export type RootStore = ReturnType<typeof reducers>