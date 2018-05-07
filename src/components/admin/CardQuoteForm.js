import React from 'react';
import Btn from '../btn/Btn';
import { Form, Icon, Tooltip } from 'antd';
const FormItem = Form.Item;

export const CardQuoteForm = ({}) => (

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
                <textarea className="inp_t" type="text" placeholder="The live is..."/>
                <div className="box_btn">
                    <Btn text="Guardar"/>
                </div>
            </FormItem>
        </Form>
    </div>
);