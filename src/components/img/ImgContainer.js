import React, { Component } from 'react';
import './Img.css';
import {Link} from 'react-router-dom';
import Slide from '../home/Slide';
import Nav from '../nav/Nav';
import CardImg from '../card/CardImg';
import Footer from '../footer/Footer';
import {getAlbums} from '../../services/firebase';
import toastr from 'toastr';
import {Spin} from 'antd';

class ImgContainer extends Component {

    state = {
        albums:[]
    }

    componentDidMount () {
        window.scroll(0, 0);
        this.getAlbums();
    }

    getAlbums = () => {
        getAlbums()
        .then(albums=>{
            this.setState({albums})
        })
        .catch(e=>{
            toastr.error('No se pudieron cargar los albums')
            console.log(e)
        })
    }

    render() {
        const {albums} = this.state;
        return (
            <div>
                <Slide />
                <Nav />
                <h2 className="subtitulo">Fotografía</h2>
                <hr className="line_gris"/>
                <div className="box_blog">

                    {albums.length ? null : <Spin />}

                    {albums.map(album=>{
                        return (
                            <div key={album.key}>
                                <CardImg cover={album.pics[0]} {...album} />
                            </div>
                        );
                    })}

                </div>

                <Footer />
            </div>
        );
    }
}

export default ImgContainer;