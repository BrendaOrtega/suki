import React from 'react';

import {
  HeadlineOneButton,
  HeadlineTwoButton,
  BlockquoteButton,
  CodeBlockButton,
  UnorderedListButton,
  OrderedListButton,
  HeadlineThreeButton
} from 'draft-js-buttons';
import CameraButton, {zavalaTest} from './CameraButton';

import BlockTypeSelect from 'draft-js-side-toolbar-plugin/lib/components/BlockTypeSelect';

//alv


const DefaultBlockTypeSelect = ({ getEditorState, setEditorState, theme }) => (
  <BlockTypeSelect
    getEditorState={getEditorState}
    setEditorState={setEditorState}
    theme={theme}
    structure={[
      CameraButton,
      HeadlineOneButton,
      HeadlineTwoButton,
      HeadlineThreeButton,
      UnorderedListButton,
      OrderedListButton,
      BlockquoteButton,
      CodeBlockButton,

    ]}
  />
);

export default DefaultBlockTypeSelect;


