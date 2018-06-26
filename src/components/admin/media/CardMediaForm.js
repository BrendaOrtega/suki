import React,{Component} from 'react';
import Btn from '../../btn/Btn';
import { Form, Icon, Tooltip } from 'antd';
import firebase from '../../../services/firebase';
import toastr from 'toastr';
import { Spin, Alert } from 'antd';
import {saveAlbum, storage} from '../../../services/firebase';

import { DatePicker } from 'antd';

const FormItem = Form.Item;
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
function onChange(date, dateString) {
    console.log(date, dateString);
}



class CardMediaForm extends Component{

    input;
    preview;

    state = {
        files:[],
        newAlbum:{title:'', pics:[]},
        post:[],
        links:[],
        loading:false,
        //testing
        course:{}
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

    onChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const {newAlbum} = this.state;
        newAlbum[field] = value;
        this.setState({newAlbum});
    };
    onChanger = (date, dateString) => {
    console.log(date, dateString);
        const {newAlbum} = this.state;
        newAlbum["fecha"] = dateString;
        newAlbum["moment"] = date;
        this.setState({newAlbum});
};

    saveAlbum = () => {
        const {newAlbum} = this.state;
        this.uploadFiles()
        .then(links=>{
            newAlbum.pics = links;
            console.log(newAlbum);
            delete newAlbum.moment;
            return saveAlbum(newAlbum)
        })
        .then(res=>{
            this.setState({loading:false})
            toastr.success('se subieron las imagenes');
            console.log(newAlbum)
        })
        .catch(e=>{
            console.log(e);
            toastr.error("no se pudieron subir las imagenes")
        });
        
        
    };

    uploadAlbum = () => {
        console.log('terminó');
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


    render(){
        const {newAlbum, loading} = this.state;
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
                        <input onChange={this.onChange} value={newAlbum.title} name="title" className="inp_t" type="text" placeholder="Título del álbum"/>
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
                        <input className="inp_t" onChange={this.onChange}  value={newAlbum.place} name="place" type="text" placeholder="Lugar"/>
                    </FormItem>
                    <FormItem
                        label={(
                            <span>
                              Fecha&nbsp;
                                <Tooltip title="Fecha">
                                <Icon type="question-circle-o"/>
                              </Tooltip>
                            </span>
                        )}>
                        <MonthPicker style={{border:"none !important"}} onChange={this.onChanger}  value={newAlbum.moment} name="moment" placeholder="Select month" />
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
                        <textarea onChange={this.onChange} name="desc" className="inp_t" type="text" placeholder="Descripción del álbum">{newAlbum.desc}</textarea>
                    </FormItem>
                    <FormItem
                        label={(
                            <span>
                              Que fotografías forman parte del álbum?&nbsp;

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
                    <div className="prev" ref={div=>this.preview=div}>
                    </div>
                </div>
                <input accept="image/*" multiple onChange={this.getFile} ref={inp => this.input = inp} type="file" hidden/>
            <Btn 
            text="Guardar"
            onClick={this.saveAlbum} 
            />





                          


            </div>
            )
        }
    }

export default CardMediaForm;