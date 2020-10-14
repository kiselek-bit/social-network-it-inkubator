import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {addPost, StateType} from "./redux/state";


export const rerender = (state: StateType) => {
    return (
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost}/>
        </React.StrictMode>,
        document.getElementById('root')
    ));

}