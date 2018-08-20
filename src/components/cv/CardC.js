import React, { Component } from 'react';
import './CardCv.css';
import suki from '../../assets/suki.png';


class CardCv extends Component {

    render() {
        return (
            <div className="cv ">
                <div className="photo">
                    <img src={suki} alt=""/>
                </div>
                <div className="info">
                    <h3>La Suki</h3>
                    <p>Siempre viví rodeada de caballos y animales,
                        la naturaleza es mi punto débil y los caballos mi pasión.
                        <br/>
                        Soy de Sonora linda, bendecida con ranchos y
                        caballos hermosos. Me encanta montar, aventurarme,
                        aprender de todo y disfrutar sin medida.</p>
                </div>
            </div>
        );
    }
}

export default CardCv;