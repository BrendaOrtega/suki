import React from 'react';
import './Card.css';
import {Link} from 'react-router-dom';

const CardBlog = ({title, _id}) => {
        return (
            <Link to={`/blog/detail/${_id}`}>
                <div className="card-media">
                   <div className="media">
                       <img src="https://images.pexels.com/photos/33688/delicate-arch-night-stars-landscape.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
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