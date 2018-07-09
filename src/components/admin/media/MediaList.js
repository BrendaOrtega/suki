import React, {Component} from 'react';
import toastr from 'toastr';
import {getAdminAlbums, saveAlbum, removeAlbum} from '../../../services/heroku';
import { Table, Switch} from 'antd';
import FontAwesome from 'react-fontawesome';




const { Column } = Table;

export class MediaList extends Component{

    state = {
        albums:[]
    }

    componentWillMount(){
        getAdminAlbums()
        .then(albums=>{
            this.setState({albums});
        })
        .catch(e=>{
            console.log(e);
            toastr.error('No se pudieron cargar los albums')
        })
    }

    homePageChange = (value, album) => {
        album.important = value;
        saveAlbum(album)
        .then(album=>{
            let {albums} = this.state;
            albums = albums.map(a=>{
                if(a._id === album._id) return album;
                return a;
            })
            this.setState({albums});
            toastr.info("Actualizado")
         })
        .catch(e=>toastr.error('no se pudo cambiar'));
    };

    removeAlbum = (album) => {
        if(!window.confirm('Segura que deceas borrar?')) return;
        removeAlbum(album._id)
        .then(album=>{
            let {albums} = this.state;
            albums = albums.filter(a=>{
                return a._id !== album._id;
            })
            this.setState({albums});
            toastr.warning("Eliminado")
         })
        .catch(e=>toastr.error('no se pudo eliminar'));
    };  

    render(){

        const {albums} = this.state;

        return(
            <div className="box_contenido">
                <h2>Mis Albums</h2>
                        <Table  dataSource={albums} >

                            <Column
                                render={(text, record) => (
                                    <span>

                                        </span>
                                )}
                            />

                            <Column
                                title= "ID"
                                dataIndex="_id"
                                key="_id"
    render={(text,record)=><a href={`/admin/media/${text}`}>{text.substring(0,6)}</a>}

                            />

                            <Column
                                title= "Nombre del Album"
                                dataIndex="title"
                                key="title"

                            />
                            <Column
                                title="Home page"
                                dataIndex="important"
                                key="important"
                                render={(text,record,index)=><Switch onChange={value=>this.homePageChange(value,record)} checked={text} />}
                            />

                            <Column
                                title="Eliminar"
                                render={(text,record,index)=><FontAwesome onClick={()=>this.removeAlbum(record)} className="trash-button" name="trash" size="2x" />    }
                            />

                            {/* <Column
                                title="Lugar"
                                dataIndex="place"
                                key="place"
                            />

                            <Column
                                title="Fecha"
                                dataIndex="date"
                                key="date"
                            /> */}

                        </Table>

            </div>
        );
    }
}