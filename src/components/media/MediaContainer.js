import React, { Component } from 'react';
import './Media.css';
import {Link} from 'react-router-dom';
import Slide from '../home/Slide';
import Nav from '../nav/Nav';
import CardMedia from '../card/CardMedia';
import Footer from '../footer/Footer';

class BlogContainer extends Component {

    componentDidMount () {
        window.scroll(0, 0)
    }
    render() {
        return (
            <div>
                <Slide />
                <Nav />

                <h2 className="subtitulo">Proyectos Personales</h2>
                <hr className="line_gris"/>
                <div className="box_blog">

                    <CardMedia />
                    <CardMedia />
                    <CardMedia />
                    <CardMedia />
                    <CardMedia />


                </div>

                <Footer />
            </div>
        );
    }
}

export default BlogContainer;