import React, {Component} from 'react';
import {LastForm} from './LastForm';
import {editorStateFromRaw} from "megadraft";


class EditPost extends Component{


    state = {editorState: editorStateFromRaw(null)};
      
    
      onChange = (editorState) => {
        this.setState({editorState});
      }

    render(){
        return(
            <div style={{paddingLeft:200}}>
                <LastForm onChange={this.onChange} editorState={this.state.editorState} />
            </div>
        );
    }
}

export default EditPost;