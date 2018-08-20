import React, { Component } from 'react';
import './Partners.css';
import Slide from '../home/Slide';
import Nav from '../nav/Nav';
import {PartnersCard} from './PartnersCard';
import toastr from 'toastr';
import {getPartners} from '../../services/heroku';
import {Spin} from 'antd';
import Footer from '../footer/Footer';
import sr from '../home/scrollReveal';
class PartnersContainer extends Component {

    state = {
        partners:[]
    }

    componentDidMount () {
        window.scroll(0, 0)

        const config3 = {
            origin: 'bottom',
            duration: 800,
            delay: 100,
            distance: '100%',
            scale: 1,
            easing: 'ease',
        }

        sr.reveal('.bot', config3);





        getPartners()
            .then(partners=>{
                this.setState({partners})
                console.log(partners)
            })
            .catch(e=>{
                toastr.error('No se pudieron cargar los albums')
                console.log(e)
            })
    }
    render() {
        const {partners} = this.state;

        return (
            <div >
                <Slide />
                <Nav/>
                <div className="partners">
                    <h2>Clientes</h2>
                    <hr className="line_gris"/>
                    <p className="quote">
                        <br/>
                        </p>
                    <div style={{width:"80%", margin:"0px auto", display:"flex", flexWrap:"wrap", justifyContent:"center"}} className="bot">

                        {partners.length ? null : <Spin />}

                        {partners.map(partner=>{
                            return <div ><PartnersCard key={partner.key}  {...partner} id={partner.key} /></div>
                        })}

                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default PartnersContainer;