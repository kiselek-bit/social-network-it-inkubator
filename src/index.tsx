import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {store} from "./redux/reduxStore";
import ReactDOM from "react-dom";
import App from "./App";
import {StateType} from "./redux/store";
import {Provider} from "react-redux";

const rerender = (state: StateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App /*state={state}*/
                    // store={store}
                    /*dispatch={store.dispatch.bind(store)}*/
                />
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    )
}
rerender(store.getState())

store.subscribe(() => {
    rerender(store.getState())
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
