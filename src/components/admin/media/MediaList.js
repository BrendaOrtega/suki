import React, {Component} from 'react';
import toastr from 'toastr';
import {getAlbums} from '../../../services/firebase';
import { Table} from 'antd';




const { Column } = Table;

export class MediaList extends Component{

    state = {
        albums:[]
    }

    componentWillMount(){
        getAlbums()
        .then(albums=>{
            this.setState({albums});
        })
        .catch(e=>{
            console.log(e);
            toastr.error('No se pudieron cargar los albums')
        })
    }

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
                                title= "Nombre del Album"
                                dataIndex="title"
                                key="title"

                            />

                            <Column
                                title="Lugar"
                                dataIndex="place"
                                key="place"
                            />

                            <Column
                                title="Fecha"
                                dataIndex="price"
                                key="price"
                            />

                        </Table>

                {this.state.albums.map(album=>{
                    return <div key={album.key}>{album.title}</div>
                })}

            </div>
        );
    }
}