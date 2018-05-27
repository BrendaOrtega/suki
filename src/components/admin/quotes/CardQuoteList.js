import React, {Component} from 'react';
import {getQuotes} from '../../../services/firebase';
import toastr from 'toastr';
import { List, Avatar } from 'antd';
import Quote from './Quote';
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
        const {quotes} = this.state;
        return(
            <div className="box_contenido">
                <h2>Quotes</h2>
                <List
                    itemLayout="horizontal"
                    dataSource={quotes}
                    renderItem={quotes => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={<Quote />}
                                title={quotes.text}
                                description={quotes.author}
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