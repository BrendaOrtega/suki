import React, { Component } from 'react';
import './Home.css';
import Footer from '../footer/Footer';
import Nav from '../nav/Nav';
import firma from '../../assets/logo la suki.png';

class About extends Component {

    componentDidMount () {
        window.scroll(0, 0)
    }
    render() {
        return (
            <div className="about">
                <div className="slide_about">

                </div>
                <Nav />
                <div className="me">
                    <h2>Sobre mí</h2>
                    <hr className="line_gris"/>
                    <br/>
                    <p>Nací en Hermosillo, Sonora el 23 de Agosto de 1986.
                    <br/>
                    Mis papas fundaron Comunidad Los Horcones en 1973 un lugar que es
                    como un rancho/comunitario en las afueras de Hermosillo. Ahí viví hasta mis 23 años.
                    </p>
                    <p>Siempre recuerdo estar rodeada de animales, caballos, monte, siembra, etc. Y desde siempre andaba en los caballos acompañada de mi perros.
                    </p>
                    <p>
                        Aun que fui maestra de educación especial mucho tiempo, mi pasión siempre fueron los caballos, me gustan y he montado en varias disciplinas, disfruto todas las razas y metodologías, si por mi fuera me profesionalizaría en todas.
                    </p>
                    <p>
                        Montar y estar con los caballos no era suficiente, así que a mis 23 años me embarque
                        con el objetivo de compartir mi gran amor por los caballos a través de mi fotografía
                        y de alguna manera poder llegar a contribuir en la historia del caballo en México.
                        Esto me fue involucrando más en lo ganadero y termine yo misma desarrollando,
                        coordinar y creando proyectos ecuestres.
                    </p>
                    <p>
                        Y aquí ando, en ese camino, que aunque no es nada fácil, me llena de felicidad y hace que todo valga la pena.
                    </p>
                </div>
                    <div style={{ display:"flex", flexWrap:"wrap", width:"70%", margin:"50px auto"}}>
                        <div className="lf">
                            <h3><strong>Carrera Profesional:</strong></h3>
                            <p>
                                Universidad Autónoma de Granada, España.
                                <br/>
                                ITESO, Guadalajara, Jal.
                                <br/>
                                Universidad de Arizona.
                                <br/>
                            </p>
                        </div>
                        <div className="rt">
                            <h3><strong>Carrera Profesional:</strong></h3>
                            <p>
                                Universidad Autónoma de Granada, España.
                                <br/>
                                ITESO, Guadalajara, Jal.
                                <br/>
                                Universidad de Arizona.
                            </p>
                        </div>
                    </div>
                <div style={{textAlign:"center", marginBottom:"50px"}}>
                <img  className="firma" src={firma} alt=""/></div>
                <Footer />
                </div>

        );
    }
}

export default About;