import React, { Component } from 'react';
import './Card.css';
import {Link} from 'react-router-dom';

class CardMedia extends Component {

    render() {
        const {title, cover, id} = this.props;

        return (
            <div className="card-img imagen" style={cover && {backgroundImage:`url('${cover}')`}}>
               <Link to={`/media/detail/${id}`}>
                <div className="cover_color">
                    <p>{ title || "Sonora"}</p>
                </div>
                </Link>

            </div>
        );
    }
}

export default CardMedia;