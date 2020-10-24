import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Nav from "./components/navigation/Nav";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";
import {ActionsTypes, DialogsPageType, NavbarFriendsType, ProfilePageType, StateType} from './redux/state'


type PropsType = {
    state: StateType
    dispatch: (action: ActionsTypes) => void
    // addPost: () => void
    // updateNewText: (text: string) => void
    // addMessage: () => void
    // updateNewMessage: (text: string) => void
}



function App(props: PropsType) {

    let profileState: ProfilePageType = props.state.profilePage
    let dialogState:DialogsPageType = props.state.dialogsPage
    let navbarState: NavbarFriendsType = props.state.navbar

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav navbarState={navbarState}/>
                <div className='app-wrapper-content'>

                    <Route path='/dialogs' render={() => <Dialogs dialogsState={dialogState}
                                                                  dispatch={props.dispatch}/>}/>
                    <Route path='/profile' render={() => <Profile profileState={profileState}
                                                                  dispatch={props.dispatch}/>}
                    />
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    {/*<Profile/>*/}
                    {/*<Dialogs/>*/}
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
