import React from 'react';
//import {convertToRaw, convertFromRaw, EditorState} from 'draft-js';
import Editor, {composeDecorators } from 'draft-js-plugins-editor';
import createHashtagPlugin from 'draft-js-hashtag-plugin';
import 'draft-js-hashtag-plugin/lib/plugin.css';
import 'draft-js-inline-toolbar-plugin/lib/plugin.css';
import 'draft-js-side-toolbar-plugin/lib/plugin.css';
import 'draft-js-image-plugin/lib/plugin.css';
import 'draft-js-focus-plugin/lib/plugin.css';
import 'draft-js-alignment-plugin/lib/plugin.css';
import 'draft-js-linkify-plugin/lib/plugin.css';

import './editorStyles.css';


import createInlineToolbarPlugin from 'draft-js-inline-toolbar-plugin';
import createSideToolbarPlugin from 'draft-js-side-toolbar-plugin';
import createImagePlugin from 'draft-js-image-plugin';
import createAlignmentPlugin from 'draft-js-alignment-plugin';
import createResizeablePlugin from 'draft-js-resizeable-plugin';
import createFocusPlugin from 'draft-js-focus-plugin';
import createLinkifyPlugin from 'draft-js-linkify-plugin';


import {
    createBlockStyleButton,
    createInlineStyleButton,
    ItalicButton,
    BoldButton,
    SupButton,
    SubButton,
    CodeButton,
    UnderlineButton,
    HeadlineOneButton,
    HeadlineTwoButton,
    HeadlineThreeButton,
    UnorderedListButton,
    OrderedListButton,
    BlockquoteButton,
    CodeBlockButton,
    //AlignBlockDefaultButton,
    //AlignBlockCenterButton,
    //AlignBlockLeftButton,
    //AlignBlockRightButton
  } from 'draft-js-buttons';
  //import CameraButton, {zavalaTest} from './CameraButton';
  import SideBarStructure from './SideBarStructure';
  //import ImageAdd from './AddImage'; 



//experiment
// import {MegadraftEditor} from "megadraft";
// import 'megadraft/dist/css/megadraft.css'



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


// const sideToolbarPlugin = createSideToolbarPlugin();
const sideToolbarPlugin = createSideToolbarPlugin({
    structure: [SideBarStructure]
  });

const { SideToolbar } = sideToolbarPlugin;


// const inlineToolbarPlugin = createInlineToolbarPlugin();


const inlineToolbarPlugin = createInlineToolbarPlugin({
        structure:[
            // zavalaTest(editorState,onChange,imagePlugin.addImage),
            createBlockStyleButton,
            createInlineStyleButton,
            ItalicButton,
            BoldButton,
            SupButton,
            SubButton,
            CodeButton,
            UnderlineButton,
            HeadlineOneButton,
            HeadlineTwoButton,
            HeadlineThreeButton,
            UnorderedListButton,
            OrderedListButton,
            BlockquoteButton,
            CodeBlockButton,
            // AlignBlockDefaultButton,
            // AlignBlockCenterButton,
            // AlignBlockLeftButton,
            // AlignBlockRightButton
          ]
    });

const { InlineToolbar } = inlineToolbarPlugin;
const linkifyPlugin = createLinkifyPlugin();




const plugins = [
    imagePlugin,
    focusPlugin,
    resizeablePlugin, 
    alignmentPlugin,  
    hashtagPlugin, 
    inlineToolbarPlugin,
    sideToolbarPlugin,
    linkifyPlugin
];


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
    
  



export const PostForm = ({editorState, onChange})=>{
    return (
            <div className="editor">
                  {/* <Editor
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
                    <AlignmentTool /> */}
                    <EditorWithFancyBlockquotes 
                        editorState={editorState}
                        onChange={onChange}
                        plugins={plugins}
                    />
                    <InlineToolbar
                        editorState={editorState}
                        onChange={onChange}
                        modifier={imagePlugin.addImage}
                    />
                    <SideToolbar/>
                    <AlignmentTool/>
                    
            </div>
        );
    
} 