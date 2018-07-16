import React, { Component } from 'react';
import Footer from '../footer/Footer';
import {ContactoDisplay} from './ContactoDisplay';
import swal from 'sweetalert';
import {sendContactMail} from '../../services/heroku';

const original = {nombre:'', tel: '', email: '', mensaje:''};

class Contacto extends Component {
    
    state = {
        form:{}
    }

    componentDidMount () {
        window.scroll(0, 0)


    }

    onChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const {form} = this.state;
        form[field] = value;
        this.setState({form});
    }

    onSubmit = () => {
        sendContactMail(this.state.form)
        .then(r=>{
            swal({
                title: "¡Genial!",
                text: "He recibido tu mensaje, muy pronto me comunicaré contigo =D",
                icon: "success",
                button: {
                    text: "OK",
                    value: true,
                    visible: true,
                    className: "colored",
                    closeModal: true,
                  }
            })
            this.setState({form:original})
        })
        .catch(e=>{
            swal({
                title: "UPPSS!!",
                text: "No pude recibir tu mensaje, intenta más tarde",
                icon: "error",
                button: {
                    text: "OK",
                    value: true,
                    visible: true,
                    className: "colored",
                    closeModal: true,
                  }
            })

        })


        
        
    };

    render() {
        const {form} = this.state;
        return (
            <div id="contacto" >
                <ContactoDisplay 
                {...form}
                onChange={this.onChange} 
                onSubmit={this.onSubmit}
                 />
                <Footer />
            </div>
        );
    }
}

export default Contacto;