import React, { Component } from 'react';
import './Home.css';
import {Link} from 'react-router-dom';
import Slide from './Slide';
import Nav from '../nav/Nav';
import CardC from '../cv/CardC';
import CardBlog from '../card/CardImg';
import CardImg from '../card/CardMedia';
import CardQuote from '../card/CardQuote';
import CardMedia from '../card/CardBlog';
import Footer from '../footer/Footer';

class HomeContainer extends Component {

    componentDidMount () {
        window.scroll(0, 0)
    }
    render() {
        return (
            <div>
                <Slide />
                <Nav />
                <div style={{margin:"50px auto", width:"85%", display:"flex", flexWrap:"wrap" }}>
                    <Link to="about">
                        <CardC />
                    </Link>
                    <div style={{ display:"flex", flexWrap:"wrap", justifyContent:"space-around", width:"300px", flexGrow:"1" }}>
                        <CardMedia />
                        <CardImg />
                        <CardBlog />
                        <CardMedia />
                        <CardImg/>
                        <CardQuote />
                    </div>
                    <div style={{ display:"flex", flexWrap:"wrap", justifyContent:"space-around", width:"300px", flexGrow:"1" }}>

                        <CardQuote />
                        <CardImg/>
                        <CardMedia />
                        <CardBlog />
                        <CardImg />

                        <CardMedia />


                    </div>
                </div>

            <Footer />
            </div>
        );
    }
}

export default HomeContainer;