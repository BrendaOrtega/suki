import React from 'react';
import Btn from '../../btn/Btn';
import { Form, Icon, Tooltip, Input } from 'antd';
import {savePartner} from '../../../services/firebase';
import toastr from 'toastr';

const FormItem = Form.Item;


export class PartnerForm extends React.Component{

    state = {
        file: null,
        partner:{}

    }

    onChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const {partner} = this.state;
        partner[field] = value;
        this.setState({partner});
    };


    getFile = (e) => {

    }

        onSave = () => {
        savePartner(this.state.partner)
            .then(r=>{
                toastr.success('Tu información se guardo');
                this.setState({partner:{}})

                console.log(r)

            })
            .catch(e=>{
                toastr.success('Algo falló al guardar')
                console.log(e)
            });
    };


    render(){
        const {partner} = this.state;

        return(

            <div className="box_post">
                <h2>Partners</h2>
                <hr className="line"/>
                <Form >
                    <FormItem
                        label={(
                            <span>
                              Nombre&nbsp;
                                <Tooltip title="Escribe el nombre del proyecto">
                                <Icon type="question-circle-o"/>
                              </Tooltip>
                            </span>
                        )}>
                        <input onChange={this.onChange} value={partner.name} name="name" className="inp_t" type="text" placeholder="Nombre del proyecto"/>
                    </FormItem>
                    <FormItem
                        label={(
                            <span>
                              Cliente&nbsp;
                                <Tooltip title="Escribe el nombre del cliente">
                                <Icon type="question-circle-o"/>
                              </Tooltip>
                            </span>
                        )}>
                        <input onChange={this.onChange} value={partner.cliente} name="cliente" className="inp_t" type="text" placeholder="Nombre del cliente"/>
                    </FormItem>
                    <FormItem
                        label={(
                            <span>
                              Lugar&nbsp;
                                <Tooltip title="Lugar">
                                <Icon type="question-circle-o"/>
                              </Tooltip>
                            </span>
                        )}>
                        <input className="inp_t" onChange={this.onChange}  value={partner.place} name="place" type="text" placeholder="Lugar"/>
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
                        <textarea onChange={this.onChange} name="descript" className="inp_t" type="text" placeholder="Descripción del proyecto">{partner.descript}</textarea>
                    </FormItem>
                    <FormItem
                        label={(
                            <span>
                              Agrega el logo del cliente&nbsp;



                                <Tooltip title="Selecciona la fotografía">
                                <Icon type="question-circle-o"/>
                              </Tooltip>
                            </span>
                        )}>
                        <div onClick={() => this.input.click()} className="box_img">
                            <div style={{textAlign:"center"}}>
                                <Icon type="anticon anticon-plus"/>

                                <span style={{marginLeft:"10px"}}>Upload</span></div>
                        </div>

                    </FormItem>
                </Form>
                <input accept="image/*"  ref={inp => this.input = inp} type="file" hidden/>

                <Btn
                    text="Guardar"
                    onClick={this.onSave}
                />


            </div>
        );

    }
}