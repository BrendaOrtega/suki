import React, { Component } from 'react';
import Footer from '../footer/Footer';
import {ContactoDisplay} from './ContactoDisplay';


class Contacto extends Component {
    componentDidMount () {
        window.scroll(0, 0)


    }
    render() {
        return (
            <div id="contacto" >
                <ContactoDisplay />
                <Footer />
            </div>
        );
    }
}

export default Contacto;