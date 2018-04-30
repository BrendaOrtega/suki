import React, { Component } from 'react';
import './Home.css';
import Slide from './Slide';
import Nav from '../nav/Nav';
import CardC from '../cv/CardC';

class HomeContainer extends Component {

    render() {
        return (
            <div>
                <Slide />
                <Nav />
                <div style={{margin:"50px auto", width:"90%" }}>
                    <CardC />
                </div>
            </div>
        );
    }
}

export default HomeContainer;