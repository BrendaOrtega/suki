import React, { Component } from 'react';
import './Card.css';
import FontAwesome from 'react-fontawesome';
import { spawn } from 'child_process';

class CardQuote extends Component {

    render() {
        const {body, author} = this.props;
        return (
            <div className="card-quote">
                <FontAwesome name="bomb" />
                <div className="fl">
                    <p>{body}</p> {author && <p>-- {author}</p>}
                </div>
            </div>
        );
    }
}

export default CardQuote;