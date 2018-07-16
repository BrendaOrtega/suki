import React, { Component } from 'react';
import './Card.css';
import {Link} from 'react-router-dom';

class CardMedia extends Component {

    render() {
        const {title, id, pics} = this.props;

        return (
            <div className="card-img imagen" style={{backgroundImage:`url('${pics[0]}')`}}>
               <Link to={`/media/detail/${id}`}>
                <div className="cover_color">
                    <p>{ title || "Albúm"}</p>
                </div>
                </Link>

            </div>
        );
    }
}

export default CardMedia;