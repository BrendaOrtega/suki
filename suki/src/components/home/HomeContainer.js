import React, { Component } from 'react';
import './Home.css';
import Slide from './Slide';
import Nav from '../nav/Nav';
import CardC from '../cv/CardC';
import CardBlog from '../card/CardBlog';
import CardImg from '../card/CardImg';
import CardQuote from '../card/CardQuote';
import CardMedia from '../card/CardMedia';

class HomeContainer extends Component {

    render() {
        return (
            <div>
                <Slide />
                <Nav />
                <div style={{margin:"50px auto", width:"85%", display:"flex", flexWrap:"wrap" }}>
                    <CardC />
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


            </div>
        );
    }
}

export default HomeContainer;