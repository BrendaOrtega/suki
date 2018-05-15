import React, { Component } from 'react';
import './Blog.css';
import {Link} from 'react-router-dom';
import Slide from '../home/Slide';
import Nav from '../nav/Nav';
import CardBlog from '../card/CardBlog';
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

                <h2 className="subtitulo">Blog</h2>
                <hr className="line_gris"/>
                <div className="box_blog">

                    <CardBlog />
                    <CardBlog />
                    <CardBlog />
                    <CardBlog />
                    <CardBlog />
                    <CardBlog />

                </div>

                <Footer />
            </div>
        );
    }
}

export default BlogContainer;