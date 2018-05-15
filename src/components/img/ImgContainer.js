import React, { Component } from 'react';
import './Img.css';
import {Link} from 'react-router-dom';
import Slide from '../home/Slide';
import Nav from '../nav/Nav';
import CardImg from '../card/CardImg';
import Footer from '../footer/Footer';

class ImgContainer extends Component {

    componentDidMount () {
        window.scroll(0, 0)
    }
    render() {
        return (
            <div>
                <Slide />
                <Nav />
                <h2 className="subtitulo">Fotografía</h2>
                <hr className="line_gris"/>
                <div className="box_blog">

                    <CardImg />
                    <CardImg />
                    <CardImg />
                    <CardImg />
                </div>

                <Footer />
            </div>
        );
    }
}

export default ImgContainer;