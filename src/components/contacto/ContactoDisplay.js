import React from 'react';
import './Contacto.css';
import Nav from '../nav/Nav';
import Boton from '../btn/Btn';

export const ContactoDisplay = () => {

    return (
        <div className="contacto">
            <Nav />
            <div className="back_ctc">

            </div>
            <div className="form_ctc">
                <h3>Contacto</h3>
                <div>
                    <input type="text" placeholder="Nombre"/>
                </div>
                <div>
                    <input type="text" placeholder="E-mail"/>
                </div>
                <div>
                    <input type="text" placeholder="Teléfono"/>
                </div>
                <div>
                    <textarea type="text" placeholder="Mensaje"/>
                </div>
                <Boton text="Enviar"/>
            </div>
        </div>
    );
}