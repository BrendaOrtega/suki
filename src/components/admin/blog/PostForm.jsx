import React from 'react';
import {convertToRaw, convertFromRaw, EditorState} from 'draft-js';
import Editor, {createEditorStateWithText, composeDecorators } from 'draft-js-plugins-editor';
import createHashtagPlugin from 'draft-js-hashtag-plugin';
import 'draft-js-hashtag-plugin/lib/plugin.css';
import 'draft-js-inline-toolbar-plugin/lib/plugin.css';
import 'draft-js-side-toolbar-plugin/lib/plugin.css';
import 'draft-js-image-plugin/lib/plugin.css';
import 'draft-js-focus-plugin/lib/plugin.css';
import 'draft-js-alignment-plugin/lib/plugin.css';
import './editorStyles.css';


import createInlineToolbarPlugin from 'draft-js-inline-toolbar-plugin';
import createSideToolbarPlugin from 'draft-js-side-toolbar-plugin';
import createImagePlugin from 'draft-js-image-plugin';
import createAlignmentPlugin from 'draft-js-alignment-plugin';
import createResizeablePlugin from 'draft-js-resizeable-plugin';
import createFocusPlugin from 'draft-js-focus-plugin';


import ImageAdd from './ImageAdd';

const focusPlugin = createFocusPlugin();
const resizeablePlugin = createResizeablePlugin();
const alignmentPlugin = createAlignmentPlugin();
const { AlignmentTool } = alignmentPlugin;

const decorator = composeDecorators(
    resizeablePlugin.decorator,
    alignmentPlugin.decorator,
    focusPlugin.decorator,
  );
const imagePlugin = createImagePlugin({ decorator });


const hashtagPlugin = createHashtagPlugin();


const sideToolbarPlugin = createSideToolbarPlugin();
const { SideToolbar } = sideToolbarPlugin;

const inlineToolbarPlugin = createInlineToolbarPlugin();
const { InlineToolbar } = inlineToolbarPlugin;

const plugins = [
    focusPlugin,
    resizeablePlugin, 
    alignmentPlugin, 
    imagePlugin, 
    hashtagPlugin, 
    inlineToolbarPlugin,
    sideToolbarPlugin
];


export const PostForm = ({editorState, onChange})=>{
    return (
            <div className="editor">
                  <Editor
                    editorState={editorState}
                    onChange={onChange}
                    plugins={plugins}
                />
                <InlineToolbar />
                <SideToolbar />
                <ImageAdd
                    editorState={editorState}
                    onChange={onChange}
                    modifier={imagePlugin.addImage}
                    />
                    <AlignmentTool />
            </div>
        );
    
} 