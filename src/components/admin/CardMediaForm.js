import React,{Component} from 'react';
import Btn from '../btn/Btn';
import { Form, Icon, Tooltip } from 'antd';
const FormItem = Form.Item;

class CardMediaForm extends Component{

    input;
    preview;

    state = {
      files:[]
    };

    getFile = (e) => {
        this.preview.innerHTML = '';
        this.setState({files:e.target.files});
        for(let pic of e.target.files){
            const reader = new FileReader();
            reader.readAsDataURL(pic);
            reader.onload = (e) => {
                this.makeImgPreview(e.target.result);
            };
        }

    };

    makeImgPreview = (urlPic) => {
        const div = document.createElement('div');
        let im = new Image();
        im.src = urlPic;
        div.appendChild(im);
        div.className = 'bliss';
        this.preview.appendChild(div);

    };

    render(){
        return(
            <div className="box_post">
                <h2>Álbum</h2>
                <hr className="line"/>
                <Form >
                    <FormItem
                        label={(
                            <span>
                              Título del álbum&nbsp;
                                <Tooltip title="Escribe el títutlo">
                                <Icon type="question-circle-o"/>
                              </Tooltip>
                            </span>
                        )}>
                        <input className="inp_t" type="text" placeholder="Título del álbum"/>
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
                        <textarea className="inp_t" type="text" placeholder="Descripción del álbum"/>
                    </FormItem>
                    <FormItem
                        label={(
                            <span>
                              Que fotografías forman parte del álbum?&nbsp;
                                <Tooltip title="Selecciona las fotos del álbum">
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
                <div>
                    <p>Preview</p>
                    <div className="prev" ref={div=>this.preview=div}>
                    </div>
                </div>
                <input accept="image/*" multiple onChange={this.getFile} ref={inp => this.input = inp} type="file" hidden/>
            </div>
            )
        }
    }

export default CardMediaForm;