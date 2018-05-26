import React, {Component} from 'react';
import toastr from 'toastr';
import {getAlbums} from '../../../services/firebase';

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
        return(
            <div>
                {this.state.albums.map(album=>{
                    return <div key={album.key}>{album.title}</div>
                })}
            </div>
        );
    }
}