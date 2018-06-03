import React, {Component} from 'react';
import toastr from 'toastr';
import {getPost} from '../../services/firebase';
import Editor, {composeDecorators} from 'draft-js-plugins-editor'; // Error upon doing this
import { convertFromRaw, EditorState} from 'draft-js';
import Slide from '../home/Slide';
import Nav from '../nav/Nav';

//testing why images
import createImagePlugin from 'draft-js-image-plugin';
import createAlignmentPlugin from 'draft-js-alignment-plugin';
import createResizeablePlugin from 'draft-js-resizeable-plugin';
import createFocusPlugin from 'draft-js-focus-plugin';
import 'draft-js-image-plugin/lib/plugin.css';
import 'draft-js-focus-plugin/lib/plugin.css';
import 'draft-js-alignment-plugin/lib/plugin.css';

const focusPlugin = createFocusPlugin();
const resizeablePlugin = createResizeablePlugin();
const alignmentPlugin = createAlignmentPlugin();

const decorator = composeDecorators(
    resizeablePlugin.decorator,
    alignmentPlugin.decorator,
    // focusPlugin.decorator,
  );

const imagePlugin = createImagePlugin({decorator});



export class BlogDetail extends Component{

    state = {
        post:{},
        editorState: EditorState.createEmpty(),
        path:''
    }

    componentWillMount(){
        const id = this.props.match.params.id;
        this.setState({path:window.location.href})
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
        const {editorState, path} = this.state;
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
                    plugins={[
                        imagePlugin,
                        // focusPlugin,
                        resizeablePlugin, 
                        alignmentPlugin,  
                    ]}
                    editorState={editorState}
                    readOnly={true} />





                    {/* Facebook comments */}
                    <br/>
                    <br/>
                    <br/>
                    <br/>
<h2>¿Te gusto? Dejanos tus comentarios y comparte
    <br/><br/>

<div class="fb-save" data-uri={path} data-size="large"></div>
<div class="fb-like" data-href={path} data-layout="standard" data-action="recommend" data-size="large" data-show-faces="true" data-share="true"></div></h2>
<div class="fb-comments" data-href={path} data-numposts="10"></div>


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
