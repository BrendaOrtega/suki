import React, {Component} from 'react';
import {PostForm} from './PostForm';
import { createEditorStateWithText } from 'draft-js-plugins-editor';
import {EditorState} from 'draft-js';
import {convertToRaw} from 'draft-js';


class EditPost extends Component{


    state = {editorState: createEditorStateWithText("#zavala putia")};
      
    running = 0;

      onChange = (editorState) => {
        // if(this.running>2)return;  
        this.running++;

        console.log(convertToRaw(editorState.getCurrentContent()));
        this.setState({editorState});
      }

    render(){
        return(
            <div style={{paddingLeft:200}}>
                <PostForm onChange={this.onChange} editorState={this.state.editorState} />
            </div>
        );
    }
}

export default EditPost;