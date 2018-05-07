import React, { Component } from 'react';
import { Routes } from './routes';
//medium editor
import 'draft-js/dist/Draft.css';
import './App.css';



class App extends Component {

    render() {
        return (
            <div>
                <div>
                    <Routes />
                </div>
            </div>
        );
    }
}

export default App;