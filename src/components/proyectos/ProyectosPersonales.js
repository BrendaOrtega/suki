import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Slide from '../home/Slide';
import Nav from '../nav/Nav';
import Footer from '../footer/Footer';


class ProyectosPersonales extends Component {



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

                </div>

                <Footer />
            </div>
        );
    }
}

export default ProyectosPersonales;