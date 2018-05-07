import React,{Component} from 'react';
import Btn from '../btn/Btn';
import { Form, Icon, Tooltip } from 'antd';
const FormItem = Form.Item;

class CardVideoForm extends Component{
    render(){
        return(
            <div className="box_post">
                <h2>Video</h2>
                <hr className="line"/>
                <Form >
                    <FormItem
                        label={(
                            <span>
                                Título del post&nbsp;
                                <Tooltip title="Escribe el títutlo">
                                <Icon type="question-circle-o"/>
                                </Tooltip>
                            </span>
                        )}>
                        <input className="inp_t" type="text" placeholder="Título del post"/>
                    </FormItem>
                    <FormItem
                        label={(
                            <span>
                                Descripción&nbsp;
                                <Tooltip title="Descripción hasta de 500 caracteres">
                                <Icon type="question-circle-o"/>
                                </Tooltip>
                            </span>
                        )}>
                        <textarea className="inp_t" type="text" placeholder="Descripción del post"/>
                    </FormItem>
                    <FormItem
                        label={(
                            <span>
                                Link del video&nbsp;
                                <Tooltip title="Inserta el link del video del apartado compartir">
                                <Icon type="question-circle-o"/>
                                </Tooltip>
                            </span>
                        )}>
                        <input className="inp_t" type="text" placeholder="Link"/>
                    </FormItem>
                </Form>
            </div>
        )
    }
}

export default CardVideoForm;