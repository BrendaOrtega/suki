/* eslint-disable react/no-children-prop */
import React, { Component } from 'react';
import { RichUtils } from 'draft-js';
import unionClassNames from 'union-class-names';


import {
    EditorState,
    AtomicBlockUtils,
  } from 'draft-js';

export default ({ blockType, children }) => (
  class BlockStyleButton extends Component {

    toggleStyle = (event) => {
      event.preventDefault();
      this.props.setEditorState(
        RichUtils.toggleBlockType(
          this.props.getEditorState(),
          blockType
        )
      );
    }

    preventBubblingUp = (event) => { event.preventDefault(); }

    blockTypeIsActive = (extraData) => {
      // if the button is rendered before the editor
      if (!this.props.getEditorState) {
        return false;
      }

    //   const urlType = 'IMAGE';
    //   const editorState = this.props.getEditorState()
    //   const contentState = editorState.getCurrentContent();
    // //   const url = window.prompt("Escribe el link de tu imagen");
    //   const contentStateWithEntity = contentState.createEntity(urlType, 'IMMUTABLE', { ...extraData, src: 'perra.com' });
    //   const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    //   const newEditorState = AtomicBlockUtils.insertAtomicBlock(
    //     editorState,
    //     entityKey,
    //     ' '
    //   );
    //   return urlType;
    



      const editorState = this.props.getEditorState();
      const type = editorState
        .getCurrentContent()
        .getBlockForKey(editorState.getSelection().getStartKey())
        .getType();
      return type === blockType;
    }


    addImage = (extraData) => {
    const urlType = 'IMAGE';
      const editorState = this.props.getEditorState()
      const contentState = editorState.getCurrentContent();
        const url = window.prompt("Escribe el link de tu imagen");
      const contentStateWithEntity = contentState.createEntity(urlType, 'IMMUTABLE', { ...extraData, src: url });
      const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
      const newEditorState = AtomicBlockUtils.insertAtomicBlock(
        editorState,
        entityKey,
        ' '
      );
      this.props.setEditorState(newEditorState)
    }

    render() {
      const { theme } = this.props;
      const className = this.blockTypeIsActive() ? unionClassNames(theme.button, theme.active) : theme.button;
      return (
        <div
          className={theme.buttonWrapper}
          onMouseDown={this.preventBubblingUp}
        >
          <button
            className={className}
            onClick={this.addImage}
            type="button"
            children={children}
          />
        </div>
      );
    }
  }
);