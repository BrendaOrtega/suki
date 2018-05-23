import React from 'react';
import Editor, { convertToRaw, createEditorStateWithText } from 'draft-js-plugins-editor';
import createHashtagPlugin from 'draft-js-hashtag-plugin';
import './editorStyles.css';
import 'draft-js-hashtag-plugin/lib/plugin.css';
import 'draft-js-inline-toolbar-plugin/lib/plugin.css';
import 'draft-js-side-toolbar-plugin/lib/plugin.css';

import createInlineToolbarPlugin from 'draft-js-inline-toolbar-plugin';
import createSideToolbarPlugin from 'draft-js-side-toolbar-plugin';


const sideToolbarPlugin = createSideToolbarPlugin();
const { SideToolbar } = sideToolbarPlugin;

const hashtagPlugin = createHashtagPlugin();
const inlineToolbarPlugin = createInlineToolbarPlugin();
const { InlineToolbar } = inlineToolbarPlugin;


//const plugins = [hashtagPlugin];
const text = `
    Escribe algo genial... #genial #fixterGeek #bliss
`;

export class PostForm extends React.Component{

    state = {
        editorState: createEditorStateWithText(text),
    }

    onChange = (editorState) => {
        this.setState({
          editorState,
        });
        this.props.onChange(convertToRaw(editorState));
      };

    render(){
        const {editorState} = this.state;
        return(
            <div className="editor">
                  <Editor
                    editorState={editorState}
                    onChange={this.onChange}
                    plugins={[hashtagPlugin, inlineToolbarPlugin,sideToolbarPlugin]}
                />
                <InlineToolbar />
                <SideToolbar />

            </div>
        );
    }
} 