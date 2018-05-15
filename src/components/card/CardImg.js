import React, { Component } from 'react';
import './Card.css';


class CardImg extends Component {

    render() {
        return (
            <div className="card-blog">
                <div className="blog" >
                    <img src="https://images.pexels.com/photos/34072/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
                </div>
                <div className="nombre">
                    <p>"Time feels as if it is slipping away"</p>
                </div>
            </div>
        );
    }
}

export default CardImg;