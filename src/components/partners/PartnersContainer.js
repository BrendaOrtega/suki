import React, { Component } from 'react';
import './Partners.css';
import Slide from '../home/Slide';
import Nav from '../nav/Nav';
import {PartnersCard} from './PartnersCard';
import toastr from 'toastr';
import {getPartners} from '../../services/firebase';
import {Spin} from 'antd';

class PartnersContainer extends Component {

    state = {
        partners:[]
    }

    componentDidMount () {
        window.scroll(0, 0);
    }

    componentWillMount(){
        getPartners()
            .then(partners=>{
                this.setState({partners})
                console.log("partners")
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
                    <p className="quote">"Hay muchas fotografías que están llenas de vida pero son confusas y difíciles de recordar. Es la fuerza de una imagen lo que importa."
                        <br/>
                        Brassai 1899-1984</p>
                    <div style={{width:"80%", margin:"50px auto", display:"flex", flexWrap:"wrap", justifyContent:"center"}}>

                        {partners.length ? null : <Spin />}

                        {partners.map(partner=>{
                            return <div ><PartnersCard key={partner.key}  {...partner} id={partner.key} /></div>
                        })}

                    </div>
                </div>
            </div>
        );
    }
}

export default PartnersContainer;