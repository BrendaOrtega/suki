import React from 'react';
import {Editor, EditorState} from 'draft-js';
import {Input} from 'antd';
import {BlockStyleControls} from './NewPost';



export const PostForm = ({
    onChange, 
    editorState, 
    handleKeyCommand, 
    onUnderlineClick,
    onToggleCode,
    toggleBlockType
}) => {
    return(

        <div className="fullWidth">
            <div className="titulo-input">
            <Input  size="large" placeholder="Titulo de tu Post" />
            </div>
            <br/><br/>
            <button className="editor-button" onClick={onUnderlineClick}>Subrayado</button>
            <button className="editor-button" onClick={onToggleCode}>Code Block</button>

            <br/><br/><br/>
            <Editor 
                className="draft" 
                editorState={editorState} 
                onChange={onChange} 
                handleKeyCommand={handleKeyCommand}
                onToggleCode={onToggleCode}
                />

        </div>

    );
};

