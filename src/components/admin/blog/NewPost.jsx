import React, {Component} from 'react';
import toastr from 'toastr';
import {Layout, Input, Menu, Button} from 'antd';
// import {LastForm} from './LastForm';
import {PostForm} from './PostForm';
import './editorStyles.css';
import {getPost, saveOrUpdatePost} from '../../../services/firebase';
import { createEditorStateWithText, createWithContent } from 'draft-js-plugins-editor';
import {convertToRaw, convertFromRaw, EditorState} from 'draft-js';
const Header = Layout.Header;

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
                // console.log(post);
                const editorState = this.convertFromJson(post.body)
                this.setState({editorState, post})
            })
            .catch(e=>{
                toastr.error('no se pudo cargar')
            })
        }else{
            toastr.info('Nuevo post')
        }
    }

    // onChangeTitle = (e) => {
    //     const {post} = this.state;
    //     post['title'] = e.target.value;
    //     this.setState({post});
    // };

    // onSave = (content) => {
    //     const {post} = this.state;
    //     console.log(post);
    //     post['body'] = JSON.stringify(content);
    //     this.findTitle(content)
    //     saveOrUpdatePost(post)
    //     .then(r=>{
    //         console.log(r)
    //         toastr.success('se guardo');
    //         post['body'] = JSON.parse(post.body);
    //         post['key'] = r;
    //         this.setState({post});
    //     })
    //     .catch(e=>{
    //         toastr.error('no se guardo')
    //     })
    // };

    // findTitle = (content) => {
    //     const block = content.blocks.find(b=>{
    //         return b.type === "header-one";
    //     });
    //     if(!block) return;
    //     const {post} = this.state;
    //     post['title'] = block.text;
    //     this.setState({post});
    // }

    // forceSave = (content) => {
    //     console.log(content);
    // };

    // componentWillMount(){
    //     if(this.props.match.params.id){
    //         console.log(this.props.match.params.id)
    //         getPost(this.props.match.params.id) 
    //         .then(post=>{
    //             post.body = createWithContent(convertFromRaw(post.body));
    //             console.log(post.body);
    //             this.setState({post, editorState:post.body});
    //         })
    //         .catch(e=>{
    //             console.log(e)
    //             toastr.error(e)
    //         })
    //     }
    // }

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
        const jsonFormat = this.convertToJson(editorState);
        post.body = jsonFormat;


     saveOrUpdatePost(post)
        .then(r=>{
            toastr.success('se guardo');
            post.key = r; 
            console.log(r);
        //convertir de vuelta
            // post.body = this.convertFromJson()
            this.setState({post});
        })
        .catch(e=>{
            console.log(e);
            toastr.error('no se guardo')
        })
    };

    convertFromJson = (jsonFormat) => {
        const raw = JSON.parse(jsonFormat);
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

    render(){
        const {editorState} = this.state;
        const {title} = this.state.post;
        // console.log(post);
        // if(!showEditor) return <div>Loading...</div>
        return(
            <div >
                <Menu style={{position:'fixed', zIndex:999}} mode="horizontal" >
                <Menu.Item>
                 <Input onChange={this.onChangeTitle} value={title} style={{width:'600px', fontSize:'200%'}} placeholder="Un titulo genial" size="large" /> 
                </Menu.Item>
                <Menu.Item title="SubMenu">
                    <Button onClick={this.onSave} type="primary" size="large">Guardar</Button>
                </Menu.Item>
                </Menu>
                <PostForm 
                editorState={editorState}
                onChange={this.onChange}
                />
            </div>

            
        )
    }
}

export default NewPost;

