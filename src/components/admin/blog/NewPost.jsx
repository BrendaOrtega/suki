import React, {Component} from 'react';
import {PostForm} from './PostForm';
import {Editor, EditorState, RichUtils} from 'draft-js';
import { Button, Radio, Icon } from 'antd';
import {savePost} from '../../../services/firebase';
import { Menu, Layout, Input } from 'antd';
import toastr from 'toastr';

const { Header } = Layout;



class NewPost extends Component{

    state = {
        post:{
            title:'',
            body:'',
            tags:[]
        }
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

    onSave = () => {
        savePost(this.state.post)
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
        onChange={this.onChangeBody}
        />
            </Layout>
            
        )
    }
}

export default NewPost;

