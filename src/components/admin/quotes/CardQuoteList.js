import React, {Component} from 'react';
//import {getQuotes} from '../../../services/firebase';
import {getAdminQuotes, saveQuote, removeQuote} from '../../../services/heroku';
import FontAwesome from 'react-fontawesome';
import {Switch} from 'antd';

import toastr from 'toastr';
import { List, Avatar } from 'antd';
import Quote from './Quote';



export class CardQuoteList extends Component{

    state = {
        quotes:[]
    }

    componentWillMount(){
        getAdminQuotes()
        .then(quotes=>{
            this.setState({quotes})
        })
        .catch(e=>{
            toastr.error('no se pudo cargar la lista')
        })
    }

    changeImportant = (quote, value) => {
        quote.important = value;
        saveQuote(quote)
        .then(quote=>{
            const {quotes} = this.state;
            quotes.map(q=>{
                if(q._id === quote._id) return quote;
                return q;
            });
            this.setState({quotes});
            toastr.info('Actualizado')
        })
        .catch(e=>{
            toastr.error('no se pudo cambiar');
        })
    };

    removeQuote = (quote) => {
        if(window.confirm("¿Segura que quieres borrar la cita?")){
            removeQuote(quote)
            .then(quote=>{
                let {quotes} = this.state;
                quotes = quotes.filter(q=>{
                    return q._id !== quote._id
                });
                this.setState({quotes});
                toastr.warning('Eliminada')
            })
            .catch(e=>{
                console.log(e)
                toastr.error('no se pudo borrar');
            })
        }
    };  


    render(){
        const {quotes} = this.state;
        return(
            <div className="box_contenido">
                <h2>Quotes</h2>
                <List
                    itemLayout="horizontal"
                    dataSource={quotes}
                    renderItem={quote => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={<Quote />}
                                title={quote.body}
                                description={quote.author}
                            />
                                <h5>Home page</h5>
                              <Switch 
                                checked={quote.important}
                                onChange={value=>this.changeImportant(quote,value)} 
                                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', marginRight:'50px' }}
                              />


                            <FontAwesome
                                onClick={()=>this.removeQuote(quote)}
                                className='trash-button'
                                name='trash'
                                size='2x'
                                //spin
                                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', cursor:'pointer' }}
                            />
                        </List.Item>
                    )}
                />
                {this.state.quotes.map(q=>{
                    return <div>{q.text}</div>
                })}
            </div>
        );
    }
}