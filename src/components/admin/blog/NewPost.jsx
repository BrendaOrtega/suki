import React, {Component} from 'react';
import {PostForm} from './PostForm';
import { Button, Radio, Icon } from 'antd';
import {saveOrUpdatePost, getPost} from '../../../services/firebase';
import { Menu, Layout, Input } from 'antd';
import toastr from 'toastr';
import Editor, {createEditorStateWithText } from 'draft-js-plugins-editor';
import {convertToRaw, convertFromRaw, EditorState} from 'draft-js';

//convert it
import { stateToHTML } from 'draft-js-export-html';



const { Header } = Layout;



class NewPost extends Component{

    state = {
        post:{
            title:'',
            body: createEditorStateWithText("Escribe algo genial #bliss"),
            tags:[]
        },
        htmlBody:null
    }

    componentWillMount(){
        getPost('-LDChP58bM3r20F4rVKZ')
        .then(post=>{
            const eS = convertFromRaw(JSON.parse(post.body));
            const editorState = EditorState.createWithContent(eS);
            // const editorState = createEditorStateWithText(text);
            post['body'] = editorState;                
            this.setState({post});
            
            
        })
        .catch(e=>toastr.error('no se pudo' + e))
    }

    onChangeTitle = (e) => {
        const {post} = this.state;
        post['title'] = e.target.value;
        this.setState({post});
    };

    onChangeBody = (body) => {
        const {post} = this.state;
        post['body'] = body;
        this.setState({post});

    };

    onChange = (editorState) => {
        const {post} = this.state;
        post['body'] = editorState;
        //to html

        this.setState({
          post,
          htmlBody: stateToHTML(editorState.getCurrentContent())
        });
        console.log(this.state.htmlBody)
 
      };

    onSave = () => {
        const {post} = this.state;
        const body = JSON.stringify(convertToRaw(this.state.post.body.getCurrentContent()));
        post['body'] = body;
        console.log(post);
        saveOrUpdatePost(post)
        .then(r=>{
            toastr.info('Tu post se ha guardado como draft');
        })
        .catch(e=>{
            toastr.error('No se pudo guardar')
            console.log(e)
        })
    };

    render(){
        const {post} = this.state;
        console.log(post);
        return(
            <Layout className="layout">
            <button onClick={this.onSave} className="save-button editor-button">Guardar</button>
            <Header style={{width:'100%'}}>
            <Input value={post.title} onChange={this.onChangeTitle} style={{fontSize:30,maxWidth:'70%'}} size="large" placeholder="Aqui va el Titulo de tu post..." />
        
            {/* <Button type="primary" size={"large"}>Guardar</Button> */}
            <div className="logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                style={{ lineHeight: '64px', width:'100%' }}
            >
                {/* <Menu.Item key="1">nav 1</Menu.Item> */}

            </Menu>
            </Header>
      <PostForm 
        editorState={post.body}
        onChange={this.onChange}
        />
        {/* <div>
            <h3>Blissi</h3>
            <Editor editorState={this.state.post.body} readOnly/>
        </div> */}
            </Layout>
            
        )
    }
}

export default NewPost;

