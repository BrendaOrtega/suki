import React from 'react';
import './Card.css';
import {Link} from 'react-router-dom';
import fotito from '../../assets/lasuki_portada.jpg';

const CardBlog = ({title, _id}) => {
        return (
            <Link to={`/blog/detail/${_id}`}>
                <div className="card-media">
                   <div className="media">
                       <img src={fotito} alt=""/>
                   </div>
                    <div className="message">
                        <h3>{title}</h3>
                        <hr className="hr"/>
                        <p>Lectura de 5 min</p>
                    </div>
                </div>
            </Link>
        );
    
}

export default CardBlog;