import React, { Component } from 'react';
import './Card.css';
import FontAwesome from 'react-fontawesome';

class CardQuote extends Component {

    render() {
        return (
            <div className="card-quote">
                <FontAwesome name="bomb" />
                <div className="fl">
                    <p>There are really only two seasons. Football season and Waiting-For-Football season.</p>
                </div>
            </div>
        );
    }
}

export default CardQuote;