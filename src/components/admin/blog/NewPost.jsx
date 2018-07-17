import React, {Component} from 'react';
import toastr from 'toastr';
import { Input, Menu, Button} from 'antd';
import { Switch, Select } from 'antd';

// import {LastForm} from './LastForm';
import {PostForm} from './PostForm';
import './editorStyles.css';
//import {getPost, saveOrUpdatePost} from '../../../services/firebase';
import { createEditorStateWithText } from 'draft-js-plugins-editor';
import {convertToRaw, convertFromRaw, EditorState} from 'draft-js';

//heroku
import {savePost, getPost} from '../../../services/heroku';
const Option = Select.Option;
//const Header = Layout.Header;

class NewPost extends Component{

    state = {
        post:{
            title:'Sin titulo',
            //body:this.convertFromJson(preview),
            tags:[]
        },
        showEditor: false,
        editorState: createEditorStateWithText("Escribe un #post increible ;)")
    }

    componentWillMount(){
        if(this.props.match.params.id){
            getPost(this.props.match.params.id)
            .then(post=>{
                console.log(post)
                // console.log(post);
                //const editorState = this.convertFromJson(post.body)
                const editorState = this.convertFromJson(post.body);
                console.log(editorState);
                this.setState({editorState, post})
            })
            .catch(e=>{
                toastr.error('no se pudo cargar')
            })
        }else{
            toastr.info('Nuevo post')
        }
    }


    onChangeTitle = (e) => {
        const {post} = this.state;
        post.title = e.target.value;
         this.setState({post})
    };

    onChange = (editorState) => {
        this.setState({editorState});
    };

    onSave = () => {
        const {post, editorState} = this.state;
        const raw = convertToRaw( editorState.getCurrentContent() ) ;
        const jsonFormat = JSON.stringify(raw);
        console.log(jsonFormat)
        //post.body = raw;
        post.body = jsonFormat;
        savePost(post)
        .then(r=>{
            toastr.success('Tu post se guardó correctamente');
        })
        .catch(e=>{
            console.log(e)
            toastr.error('No se pudo guardar')
        })

        //testing with node
        // let {post, editorState} = this.state;
        // const raw = convertToRaw( editorState.getCurrentContent() ) ;
        // post.body = raw;
        // //const enJson = JSON.stringify(post);
        // //const enJson = JSON.stringify(post);
        // var cache = [];
        // const enJson = JSON.stringify(post, function(key, value) {
        //     if (typeof value === 'object' && value !== null) {
        //         if (cache.indexOf(value) !== -1) {
        //             // Circular reference found, discard key
        //             return;
        //         }
        //         // Store value in our collection
        //         cache.push(value);
        //     }
        //     return value;
        // });
        // //mandamos a node:
        // fetch('http://localhost:3000/posts', {
        //     method: 'post',
        //     body: enJson,
        //     headers:{
        //         'Content-Type': 'application/json'
        //     }
        // })
        // .then(response=>response.json())
        // .then(r=>{
        //     console.log(r)
        // });
        // return;
        



        // const {post, editorState} = this.state;
        // //const jsonFormat = this.convertToJson(editorState);
        // //const jsonFormat = JSON.stringify( convertToRaw( editorState.getCurrentContent() )  );
        // const raw = convertToRaw( editorState.getCurrentContent() );
        // post.body = raw;
       
        // var cache = [];
        // const jsonRaw = JSON.stringify(post, function(key, value) {
        //     if (typeof value === 'object' && value !== null) {
        //         if (cache.indexOf(value) !== -1) {
        //             console.log(value);
        //             // Circular reference found, discard key
        //             return;
        //         }
        //         // Store value in our collection
        //         cache.push(value);
        //     }
        //     return value;
        // });
        // fetch('http://localhost:3000/posts', {
        //     method: 'post',
        //     body: jsonRaw,
        //     headers:{
        //         'Content-Type': 'application/json'
        //     }
        // })
        // .then(response=>response.json())
        // .then(r=>{
        //     console.log(r)
        // });

    //  saveOrUpdatePost(post)
    //     .then(r=>{
    //         toastr.success('se guardo');
    //         post.key = r; 
    //         console.log(r);
    //     //convertir de vuelta
    //         // post.body = this.convertFromJson()
    //         this.setState({post});
    //     })
    //     .catch(e=>{
    //         console.log(e);
    //         toastr.error('no se guardo')
    //     })
    };

    convertFromJson = (jsonFormat) => {
        const raw = JSON.parse(jsonFormat);
        const content = convertFromRaw(raw);
        const editorState = EditorState.push(EditorState.createEmpty(), content);
        // const editorState = createWithContent(content);
        return editorState;

    };

    makeEditorState = (raw) => {
        //const raw = JSON.parse(jsonFormat);
        const content = convertFromRaw(raw);
        const editorState = EditorState.push(EditorState.createEmpty(), content);
        // const editorState = createWithContent(content);
        return editorState;

    };

    convertToJson = (editorState) => {
        const raw = convertToRaw( editorState.getCurrentContent() ) ;

        var cache = [];
        const converted = JSON.stringify(raw, function(key, value) {
            if (typeof value === 'object' && value !== null) {
                if (cache.indexOf(value) !== -1) {
                    // Circular reference found, discard key
                    return;
                }
                // Store value in our collection
                cache.push(value);
            }
            return value;
        });
        cache = null; // Enable garbage collection
        return converted;
    }

    changePublic = (value) => {
        const {post} = this.state;
        post.status = value ? "PUBLISHED" : "DRAFT";
        this.setState({post});
    }

    changeType = (value) => {
        const {post} = this.state;
        post.tipo = value;
        this.setState({post});
    };

    render(){
        const {editorState} = this.state;
        const {title, status, tipo} = this.state.post;

        return(
            <div >
                <Menu style={{position:'fixed', zIndex:999}} mode="horizontal" >
                <Menu.Item>
                 <Input onChange={this.onChangeTitle} value={title} style={{width:'600px', fontSize:'200%'}} placeholder="Un titulo genial" size="large" /> 
                </Menu.Item>
                <Menu.Item title="SubMenu" >
                    <Button  style={{backgroundColor:"rgb(255,196,0)", border:"1px solid rgb(255,196,0)"}} onClick={this.onSave} type="primary" size="large">Guardar</Button>
                </Menu.Item>
                </Menu>

                    <div style={{display:'flex', paddingTop:60, justifyContent:'flex-end', alignItems:'center'}}>
                        <h4 style={{marginRight:20}}>
                            Publico 
                            <Switch checked={status === "PUBLISHED"}  onChange={this.changePublic} />
                        </h4>
                        <h4>
                            Tipo
                            <Select value={tipo || "BLOG_POST"} defaultValue="BLOG_POST" style={{ width: 120 }} onChange={this.changeType}>
                                    <Option value="BLOG_POST">Post</Option>
                                    <Option value="PROFESIONAL">Profesional</Option>
                                    <Option value="PERSONAL">Personal</Option>
                                </Select>
                        </h4>
   
                    </div>

                <PostForm 
                editorState={editorState}
                onChange={this.onChange}
                />
            </div>

            
        )
    }
}

export default NewPost;

