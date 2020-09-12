import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/header/Header";
import Nav from "./components/navigation/Nav";
import Profile from "./components/profile/Profile";

function App() {
    return (
        <div className="app-wrapper">
            <Header />
            <Nav />
            <Profile />
        </div>
    );
}

export default App;
