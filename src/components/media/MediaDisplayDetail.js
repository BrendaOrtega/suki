import React from 'react';
import './Media.css';
import Nav from '../nav/Nav';
import Slide from '../home/Slide';
import {getAlbum} from '../../services/firebase';
import toastr from 'toastr';
import {Spin} from 'antd';


export class MediaDisplayDetail extends React.Component{ 

    state = {
        album:{pics:[]}
    };

    componentWillMount(){
        const id = this.props.match.params.id;
        getAlbum(id)
        .then(album=>{
            this.setState({album})
            console.log(album)
        })
        .catch(e=>{
            console.log(e);
            toastr.error('No se pudo cargar el album')
        })
    }



    render(){
        const {title, desc, fecha, pics, place} = this.state.album;
        return (

    <div>
        <Slide />
        <Nav />
        {pics.length ? null : <Spin />}
        <div>
        <div className="box_media">
            <div className="img_album" style={{backgroundImage:`url('${pics[0]}')`}}>
                </div>
                <div className="data_album">
                    <h2>{title}</h2>
                    <h3>{place}</h3>
                    <hr/>
                    <p>{desc}
                    </p>
                    <br/>
                    <p><strong>Fecha</strong></p>
                    <p>{fecha}</p>
                </div>
            <br/>
            </div>
            <div className="flexito">
                {pics.map(pic=>{
                    return (

                            <img className="images_al" src={pic} alt={title}/>

                    );
                })}
            </div>
         </div>
    </div>
);
    }
}