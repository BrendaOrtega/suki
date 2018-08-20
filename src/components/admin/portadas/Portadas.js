import React, { Component } from 'react';
import Btn from '../../btn/Btn';
import { Form, Icon, Tooltip } from 'antd';
import firebase from '../../../services/firebase';
import toastr from 'toastr';
import { Spin } from 'antd';
import { Input, Col, Select, InputNumber, DatePicker, AutoComplete, Cascader } from 'antd';

const InputGroup = Input.Group;
const Option = Select.Option;

const clear = {title:'',  pics:[]};
const FormItem = Form.Item;


class Portadas extends Component {
    input;
    preview;

    state = {
        files:[],
        newPortada:{name:'', pics:[]},

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
        div.className = 'preview';
        this.preview.appendChild(div);

    };

    onChange = (a,b) => {
        const {newPortada} = this.state;
        newPortada.name = a;
        this.setState({newPortada});
    };

    savePortada = () => {
        const {newPortada} = this.state;
        this.uploadFiles()
            .then(links=>{
                newPortada.pics = links;
                console.log(newPortada);
                this.setState({newPortada:clear});
            })
            .then(res=>{
                this.setState({loading:false})
                toastr.success('se subieron las imagenes');
                console.log(newPortada)
            })
            .catch(e=>{
                console.log(e);
                toastr.error("no se pudieron subir las imagenes")
            });


    };
    uploadFiles = (e) => {
        this.setState({loading:true})
        const {files} = this.state;
        const promises = [];
        for(let file of files){
            promises.push(firebase.storage()
                .ref('media')
                .child(file.name)
                .put(file)
                .then(snap=>{
                    return snap.downloadURL
                })
            );
        }
        return Promise.all(promises);

    };


    render() {
        const {newPortada, loading} = this.state;

        return (
            <div className="box_post">
                <h2>Portadas</h2>
                <hr className="line"/>
                <Form >
                    <FormItem
                        label={(
                            <span>
                              En que sección aparecerá la imagen?&nbsp;

                                {loading && <Spin />}



                                <Tooltip title="Selecciona las fotos del álbum">
                                <Icon type="question-circle-o"/>
                              </Tooltip>
                            </span>
                        )}>
                    <InputGroup compact style={{width:"100%"}} >
                        <Select defaultValue="Sección" onChange={this.onChange}>
                            <Option value="home">Home</Option>
                            <Option value="fotografia">Fotografía</Option>
                            <Option value="blog">Blog</Option>
                            <Option value="personales">Personales</Option>
                            <Option value="profesionales">Profesionales</Option>
                            <Option value="clientes">Clientes</Option>
                        </Select>

                    </InputGroup>
                    </FormItem>
                    <FormItem
                        label={(
                            <span>
                              Elige la imagen&nbsp;

                                {loading && <Spin />}



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
                    <div ref={div=>this.preview=div}>
                    </div>
                </div>
                <input accept="image/*" multiple onChange={this.getFile} ref={inp => this.input = inp} type="file" hidden/>
                <br/>
                <Btn
                    text="Guardar"
                    onClick={this.savePortada}
                />
            </div>
        );
    }
}

export default Portadas;