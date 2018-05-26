import React,{Component} from 'react';
import Btn from '../../btn/Btn';
import { Form, Icon, Tooltip } from 'antd';
import {saveVideo} from '../../../services/firebase';
import toastr from 'toastr';

const FormItem = Form.Item;

class CardVideoForm extends Component{

    state = {
        default:{
            title:'',
            desc:'',
            link:''
        },
        video:{
            title:'',
            desc:'',
            link:''
        }
    }

    onChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const {video} = this.state;
        video[field] = value;
        this.setState({video});
    }

    onSave = () => {
        saveVideo(this.state.video)
        .then(res=>{
            toastr.success('tu video se guardó')
            this.setState({video:this.state.default})
        })
        .catch(e=>{
            console.log(e);
            toastr.error("no se pudo guardar " + e)
        })
    }

    render(){
        const {title,desc, link} = this.state.video;
        return(
            <div className="box_post">
                <h2>Video</h2>
                <hr className="line"/>
                <div >
                    <FormItem
                        label={(
                            <span>
                                Título del post&nbsp;
                                <Tooltip title="Escribe el títutlo">
                                <Icon type="question-circle-o"/>
                                </Tooltip>
                            </span>
                        )}>
                        <input onChange={this.onChange} value={title} name="title" className="inp_t" type="text" placeholder="Título del post"/>
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
                        <textarea value={desc} onChange={this.onChange} name="desc" className="inp_t" type="text" placeholder="Descripción del post"/>
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
                        <input onChange={this.onChange} value={link} name="link" className="inp_t" type="text" placeholder="Link"/>
                    </FormItem>
                        

                    <Btn text="Guardar" onClick={this.onSave} />
                </div>
            </div>
        )
    }
}

export default CardVideoForm;