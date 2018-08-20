import React, { Component } from 'react';
import Btn from '../../btn/Btn';
import { Form, Icon, Tooltip } from 'antd';
import firebase from '../../../services/firebase';
import {getCovers, saveCover,removeCover} from '../../../services/heroku'
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
        file:null,
        covers:[],
        cover:{},
        newPortada:{name:'', pics:[]},
    };


    getFile = (e) => {
        if(e.target.files.length < 1) return
        const file = e.target.files[0]
        this.setState({file})
        const {cover} = this.state
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = (e)=>{
            cover.link = e.target.result
            this.setState({cover})
        }
        //this.preview.innerHTML = '';
        //this.setState({files:e.target.files});
        // for(let pic of e.target.files){
        //     const reader = new FileReader();
        //     reader.readAsDataURL(pic);
        //     reader.onload = (e) => {
        //         this.makeImgPreview(e.target.result);
        //     };
        // }

    };

    makeImgPreview = (urlPic) => {
        const div = document.createElement('div');
        let im = new Image();
        im.src = urlPic;
        div.appendChild(im);
        div.className = 'preview';
        this.preview.appendChild(div);

    };

    onChange = (id) => {
        const cover = this.state.covers.find(c=>c._id === id)
        this.setState({cover})
    };

    savePortada = () => {
        const {cover} = this.state;
        this.uploadFile()
            .then(link=>{
                cover.link = link;

                return saveCover(cover)
            })
            .then(c=>{
                this.setState({cover:c, loading:false});
                toastr.info('Se actualizó');
            })
            .catch(e=>{
                console.log(e);
                toastr.error("no se pudo guardar")
            });

    };
    uploadFile = () => {
        this.setState({loading:true})
        const {file, cover} = this.state;
        return firebase.storage()
                .ref('covers')
                .child(cover.title)
                .put(file)
                .then(snap=>{
                    return snap.downloadURL
                })
                .catch(e=>{
                    toastr.error('No se pudo subir tu foto, intenta mas tarde')
                })
    
    };

    componentWillMount(){
        this.getPortadas()
    }

    getPortadas = () => {
        getCovers()
        .then(covers=>{
            console.log(covers)
            this.setState({covers})
        })
        .catch(e=>{
            console.log(e)
            toastr.error('No se pudieron cargar las portadas')
        })
    }


    render() {
        const {cover,newPortada, loading, covers} = this.state;

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
                            
                            {covers.map((c, index)=>{
                                return (
                                    <Option key={index} value={c._id}>{c.title}</Option>
                                )
                            })}
                            
                            
                           
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
                    <img width="200" src={cover.link} alt={cover.title} />
                    <div ref={div=>this.preview=div}>
                    </div>
                </div>
                <input accept="image/*" onChange={this.getFile} ref={inp => this.input = inp} type="file" hidden/>
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