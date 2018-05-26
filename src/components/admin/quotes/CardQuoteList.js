import React, {Component} from 'react';
import {getQuotes} from '../../../services/firebase';
import toastr from 'toastr';

export class CardQuoteList extends Component{

    state = {
        quotes:[]
    }

    componentWillMount(){
        getQuotes()
        .then(quotes=>{
            this.setState({quotes})
        })
        .catch(e=>{
            toastr.error('no se pudo cargar la lista')
        })
    }

    render(){
        return(
            <div>
                <h2>Quotes</h2>
                {this.state.quotes.map(q=>{
                    return <div>{q.text}</div>
                })}
            </div>
        );
    }
}