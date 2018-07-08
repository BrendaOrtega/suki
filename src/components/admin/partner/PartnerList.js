import React, {Component} from 'react';
import {getQuotes} from '../../../services/firebase';
import toastr from 'toastr';
import { List, Avatar } from 'antd';
import Quote from './Quote';

export class PartnerList extends Component{

    state = {
        quotes:[]
    }

    componentWillMount(){
        getPartners()
            .then(quotes=>{
                this.setState({partners})
            })
            .catch(e=>{
                toastr.error('no se pudo cargar la lista')
            })
    }

    render(){
        const {partners} = this.state;
        return(
            <div className="box_contenido">
                <h2>Quotes</h2>
                <List
                    itemLayout="horizontal"
                    dataSource={partners}
                    renderItem={partners => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={<Quote />}
                                title={partners.name}
                                description={partners.descript}
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