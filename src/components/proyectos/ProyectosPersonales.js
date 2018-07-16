import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Slide from '../home/Slide';
import Nav from '../nav/Nav';
import Footer from '../footer/Footer';
import {getPublic} from '../../services/heroku';
import toastr from 'toastr';
import CardBlog from '../card/CardBlog';


class ProyectosPersonales extends Component {

    state = {
        posts:[]
    };

    componentDidMount () {
        window.scroll(0, 0)
    }

    componentWillMount(){
        getPublic("PERSONAL", false)
        .then(items=>{
            this.setState({posts:items});
        })
        .catch(e=>{
            toastr.error('no se pudieron cargar ' + e);
        });
    }


    render() {
        const {posts} = this.state;
        return (
            <div>
                <Slide />
                <Nav />

                <h2 className="subtitulo">Proyectos Personales</h2>
                <hr className="line_gris"/>
                <div className="box_blog">

                    {posts.map(p=>{
                        return (
                            <CardBlog key={p._id} {...p} />    
                        );
                    })}

                </div>

                <Footer />
            </div>
        );
    }
}

export default ProyectosPersonales;