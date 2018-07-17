import React, { Component } from 'react';
import { Routes } from './routes';
//medium editor
import 'draft-js/dist/Draft.css';
import './App.css';
//import Footer from './components/footer/Footer';


class App extends Component {

    render() {
        return (
            <div>
                <Routes />

            </div>
        );
    }
}

export default App;