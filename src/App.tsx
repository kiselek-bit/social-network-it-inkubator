import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/header/Header";
import Nav from "./components/navigation/Nav";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";
import {DialogsPageType, ProfilePageType, StateType} from './redux/state'

type PropsType = {
    state: StateType
}


function App(props: PropsType) {

    let profileState: ProfilePageType = props.state.profilePage
    let dialogState:DialogsPageType = props.state.dialogsPage

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>

                    <Route path='/dialogs' render={() => <Dialogs dialogsState={dialogState}/>}/>
                    <Route path='/profile' render={() => <Profile profileState={profileState}/>}/>
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
