import React, {Component} from 'react';
import toastr from 'toastr';
import {getPost} from '../../services/firebase';
import Editor from 'draft-js-plugins-editor'; // Error upon doing this
import { convertFromRaw, EditorState} from 'draft-js';
import Slide from '../home/Slide';
import Nav from '../nav/Nav';



export class BlogDetail extends Component{

    state = {
        post:{},
        editorState: EditorState.createEmpty()
    }

    componentWillMount(){
        const id = this.props.match.params.id;
        getPost(id)
        .then(post=>{
            const editorState = this.convertFromJson(post.body)
            this.setState({editorState, post})
        })
        .catch(e=>{
            console.log(e);
            toastr.error('No se pudo cargar el post ' + e)
        })
    }

    convertFromJson = (jsonFormat) => {
        const raw = JSON.parse(jsonFormat);
        const content = convertFromRaw(raw);
        const editorState = EditorState.push(EditorState.createEmpty(), content);
        // const editorState = createWithContent(content);
        return editorState;

    };

    

    render(){
        const {editorState} = this.state;
        const {title} = this.state.post;
        return(

            <div>
                <div>
                    <Slide />
                </div>
                <Nav />
                <div style={{position:'relative', margin:'50px auto', width:'80%'}}>
                    <h2>{title}</h2>
                    <EditorWithFancyBlockquotes
                    editorState={editorState}
                    readOnly={true} />
                </div>
            </div>
        );
    }
}


function myBlockStyleFn(contentBlock) {
    const type = contentBlock.getType();
    switch (type) {
        case 'blockquote':
            return 'quote--boni';
        case 'paragraph':
            return 'h4--boni';
        case 'header-one':
            return 'h1--boni';
        case 'header-two':
            return 'h2--boni';
        case 'header-three':
            return 'h3--boni';
        case 'header-four':
            return 'h3--boni';
        case 'header-five':
            return 'h4--boni';
        case 'header-six':
            return 'h4--boni'
        case 'unordered-list-item':
            return 'unordered--boni'
        case 'ordered-list-item':
            return 'ordered--boni'
        // case 'code-block':
        //     return 'h4--boni'
        // case 'atomic':
        //     return 'h4--boni'
        default:
            return 'unestyled--boni';
    }
  }

  const EditorWithFancyBlockquotes = (props) => <Editor {...props} blockStyleFn={myBlockStyleFn} />;
