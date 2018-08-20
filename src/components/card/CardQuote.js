import React, { Component } from 'react';
import './Card.css';
import FontAwesome from 'react-fontawesome';
//import { spawn } from 'child_process';
import sr from '../home/scrollReveal.js';

class CardQuote extends Component {

    render() {
        const {body, author} = this.props;
        return (
            <div className="card-quote ">
                 <div className="fl"><div>
                    <FontAwesome name="book" />
                    <br/>
                        <p>{body}</p> {author && <p>-- {author}</p>}
                    </div>
                </div>
            </div>
        );
    }
}

export default CardQuote;