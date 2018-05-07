import React, {Component} from 'react';
import {PostForm} from './PostForm';
import {Editor, EditorState, RichUtils} from 'draft-js';
import { Menu, Layout } from 'antd';
const { Header } = Layout;



class NewPost extends Component{

    state = {
        editorState: EditorState.createEmpty()
    }

    onChange = (editorState) => this.setState({editorState});

    handleKeyCommand = (command) => {
            const newState = RichUtils.handleKeyCommand(this.state.editorState, command);
            if (newState) {
              this.onChange(newState);
              return 'handled';
            }
        
            return 'not-handled';
          }
    
    onUnderlineClick = () => {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'UNDERLINE'));
    }

    onToggleCode = () => {
        this.onChange(RichUtils.toggleCode(this.state.editorState));
          }

    toggleBlockType = (blockType) => {
            this.onChange(
              RichUtils.toggleBlockType(
                this.state.editorState,
                blockType
              )
            );
          }

    render(){
        const {editorState} = this.state;
        return(
            <Layout className="layout">
            <button className="save-button editor-button">Guardar</button>
            <Header>
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
        onChange={this.onChange} 
        editorState={editorState}
        handleKeyCommand={this.handleKeyCommand}
        onUnderlineClick={this.onUnderlineClick}
        onToggleCode={this.onToggleCode}
        />
            </Layout>
            
        )
    }
}

export default NewPost;

