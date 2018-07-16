import React from 'react';
import Btn from '../../btn/Btn';
import { Form, Icon, Tooltip, Input } from 'antd';
//import {saveQuote} from '../../../services/firebase';
import {saveQuote} from '../../../services/heroku';
import toastr from 'toastr';

const FormItem = Form.Item;


export class CardQuoteForm extends React.Component{

    state = {
        quote:{}
    }

    onChange = (e) => {
        const {quote} = this.state;
        quote.author = this.refs.author.input.value
        quote.body = this.refs.text.value;
        this.setState({quote})
    }

    onSave = () => {
        saveQuote(this.state.quote)
        .then(r=>{
            toastr.success('Tu frase se guardó');
            this.setState({quote:{text:''}})
            console.log(r)
        })
        .catch(e=>{
            toastr.error('Algo falló al guardar tu frase')
            console.log(e)
        });
    };

render(){
    return(

    <div className="box_post">
        <h2>Quotes</h2>
        <hr className="line"/>
        <Form >
            <FormItem
                label={(
                    <span>
                  Frase&nbsp;
                        <Tooltip title="Escribe la cita">
                    <Icon type="question-circle-o" />
                  </Tooltip>
                </span>
                )}>
                <textarea ref="text" value={this.state.quote.text} onChange={this.onChange} className="inp_t" type="text" placeholder="The life is..."></textarea>
                <Input onChange={this.onChange} value={this.state.quote.author} placeholder="El author es opcional" ref="author" name="author"  />   
                <div className="box_btn">
                    <Btn onClick={this.onSave} text="Guardar"/>
                </div>
            </FormItem>
        </Form>
    </div>
);

}
}