import React, {Component} from 'react';
import toastr from 'toastr';
import {getVideos} from '../../../services/firebase';


export class VideoList extends Component{

    state = {
        videos:[]
    }

    componentWillMount(){
        getVideos()
        .then(videos=>{
            this.setState({videos});
        })
        .catch(e=>{
            console.log(e)
            toastr.error("no se pudieron cargar los videos " + e)
        })
    }

    render(){
        return(
            <div>
                {this.state.videos.map(video=>{
                    return <div key={video.key}>{video.title}</div>
                })}
            </div>
        );
    }
}