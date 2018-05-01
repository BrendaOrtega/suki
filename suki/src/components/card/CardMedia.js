import React, { Component } from 'react';
import './Card.css';

class CardMedia extends Component {

    render() {
        return (
            <div className="card-media">
               <div className="media">
                   <img src="https://images.pexels.com/photos/33688/delicate-arch-night-stars-landscape.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
               </div>
                <div className="message">
                    <h3>DailyMotion</h3>
                    <hr className="hr"/>
                    <p>WordPress themes by UpThemes.</p>
                </div>
            </div>
        );
    }
}

export default CardMedia;