import React from 'react';
import Btn from '../btn/Btn';
import { Form, Icon, Tooltip } from 'antd';
import {saveQuote} from '../../services/firebase';
import toastr from 'toastr';

const FormItem = Form.Item;


export class CardQuoteForm extends React.Component{

    state = {
        quote:''
    }

    onChange = (e) => {
        this.setState({quote:e.target.value})
    }

    onSave = () => {
        saveQuote(this.state.quote)
        .then(r=>{
            toastr.success('Tu frase se guardó');
            this.setState({quote:''})
            console.log(r)
        })
        .catch(e=>{
            toastr.success('Algo falló al guardar tu frase')
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
                <textarea onChange={this.onChange} value={this.state.quote} className="inp_t" type="text" placeholder="The life is..."/>
                <div className="box_btn">
                    <Btn onClick={this.onSave} text="Guardar"/>
                </div>
            </FormItem>
        </Form>
    </div>
);

}
}