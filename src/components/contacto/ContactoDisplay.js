import React from 'react';
import './Contacto.css';
import Nav from '../nav/Nav';
import Boton from '../btn/Btn';
//import Footer from '../footer/Footer'
export const ContactoDisplay = ({onSubmit, onChange, nombre, email, tel, mensaje}) => {

    return (
        <div>
            <Nav />
            <div className="contacto">

                <div className="back_ctc bot">

                </div>
                <div className="form_ctc bot">
                    <h3>Contacto</h3>
                    <div>
                        <input onChange={onChange} name="nombre" value={nombre} type="text" placeholder="Nombre"/>
                    </div>
                    <div>
                        <input onChange={onChange} name="email" value={email} type="text" placeholder="E-mail"/>
                    </div>
                    <div>
                        <input onChange={onChange} name="tel" value={tel} type="text" placeholder="Teléfono"/>
                    </div>
                    <div>
                        <textarea onChange={onChange} name="mensaje" value={mensaje} type="text" placeholder="Mensaje"/>
                    </div>
                    <Boton onClick={onSubmit} text="Enviar"/>
                </div>
        </div>

        </div>
    );
}