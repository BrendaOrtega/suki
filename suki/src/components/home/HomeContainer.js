import React, { Component } from 'react';
import './Home.css';
import Slide from './Slide';
import Nav from '../nav/Nav';

class HomeContainer extends Component {

    render() {
        return (
            <div>
                <Slide />
                <Nav />
            </div>
        );
    }
}

export default HomeContainer;