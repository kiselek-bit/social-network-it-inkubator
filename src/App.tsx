import React from 'react';
import './App.css';
import Nav from "./components/navigation/Nav";
import {BrowserRouter, Route} from 'react-router-dom';
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";
import DialogsContainer from "./components/dialogs/DialogsContainer"
import {UsersContainer} from "./components/users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";



type PropsType = {
    /*state: StateType*/
    // store: Store
    /*dispatch: (action: ActionsTypes) => void*/
    // addPost: () => void
    // updateNewText: (text: string) => void
    // addMessage: () => void
    // updateNewMessage: (text: string) => void
}



function App(props: PropsType) {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer/>
                <Nav/>
                <div className='app-wrapper-content'>

                    <Route path='/profile/:userId?' render={() => <ProfileContainer />}/>
                    <Route path='/users' render={() => <UsersContainer />}/>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
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
