import React from 'react';
import Btn from '../../btn/Btn';
import { Form, Icon, Tooltip } from 'antd';
import firebase from '../../../services/firebase';
import {savePartner} from '../../../services/heroku';
import toastr from 'toastr';
import Lightbox  from "react-images";


const original = {name:'', cliente:'', descript:'', place:''}

const FormItem = Form.Item;


export class PartnerForm extends React.Component{

    state = {
        files: [],
        partner:{},
        images:[],
        isOpen: false,
        currentImage:0
    }

    toggleLightBox = () => this.setState({isOpen:!this.state.isOpen})
	gotoPrevious = () => {
		this.setState({
			currentImage: this.state.currentImage - 1,
		});
	}
	gotoNext = () => {
		this.setState({
			currentImage: this.state.currentImage + 1,
		});
	}

    makeImgPreview = (urlPic) => {
        const div = document.createElement('div')
        let im = new Image();
        im.src = urlPic;
        div.appendChild(im);
        div.className = 'preview';
        this.preview.appendChild(div);

        //lightbox
        const light = {
            src:urlPic
        }
        let {images} = this.state;
        images = [];
        images.push(light);
        console.log(images)
        this.setState({images})


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

    onChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const {partner} = this.state;
        partner[field] = value;
        this.setState({partner});
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

    onSave = (e) => {
        e.preventDefault();
        //subes archivo
        this.uploadFiles()
        .then(links=>{
            const {partner} = this.state;
            partner.picture = links[0];
            return savePartner(partner)

        })
        .then(partner=>{
            this.setState({partner:{}});
            toastr.success('Tu partner se ha guardado =D')
            this.setState({partner:original})
        })
        .catch(e=>{
            toastr.error('Algo falló, intenta mas tarde')
        })




    };


    render(){
        const {partner} = this.state;

        return(

            <div className="box_post">
                <h2>Partners</h2>
                <hr className="line"/>
                <form onSubmit={this.onSave} validated>
                    <FormItem
                        label={(
                            <span>
                              Nombre&nbsp;
                                <Tooltip title="Escribe el nombre del proyecto">
                                <Icon type="question-circle-o"/>
                              </Tooltip>
                            </span>
                        )}>
                        <input onChange={this.onChange} value={partner.name} name="name" className="inp_t" type="text" placeholder="Nombre del proyecto" required/>
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
                        <input onChange={this.onChange} value={partner.cliente} name="cliente" className="inp_t" type="text" placeholder="Nombre del cliente" required/>
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
                        <input className="inp_t" onChange={this.onChange}  value={partner.place} name="place" type="text" placeholder="Lugar" required/>
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
                        <textarea onChange={this.onChange} value={partner.descript} name="descript" className="inp_t" type="text" placeholder="Descripción del proyecto" required></textarea>
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
                    <div>
                        <p>Preview</p>
                        <div id="papa" onClick={this.toggleLightBox} ref={div=>this.preview=div} >

                        </div>
                    </div>

                    <input ref={input=>this.input=input} onChange={this.getFile} accept="image/*" type="file" hidden/>
                    
                    <Btn type="submit"
                         text="Guardar"
                    />
                </form>


                        <Lightbox
                            currentImage={this.state.currentImage}
                            images={this.state.images}
                            isOpen={this.state.isOpen}
                            onClose={this.toggleLightBox}
                            onClickPrev={this.gotoPrevious}
                            onClickNext={this.gotoNext}
                        />

            </div>
        );

    }
}