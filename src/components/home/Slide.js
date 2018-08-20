import React, { Component } from 'react';
import './Home.css';
import {getSingleCover} from '../../services/heroku'
import toastr from 'toastr'

//const pic = "/static/media/lasuki_portada.3409494c.jpg"
const pic = "lol.jpg"

class Slide extends Component {

    state = {
        cover:{
            link:pic
        },
        loading:true
    }

    componentWillMount(){
        const {title="Home"} = this.props
        console.log(title)
        getSingleCover(title)
        .then(cover=>{
            this.setState({cover, loading:false})
        })
        .catch(e=>console.log(e))
    }

    render() {
        const {cover, loading} = this.state
        return (
            <div style={{backgroundImage:`url('${cover.link}')`}} className="slide">
            </div>
        );
    }
}

export default Slide;