import React from 'react';
import createInlineStyleButton from 'draft-js-buttons/lib/utils/createInlineStyleButton';
import FaBeer from 'react-icons/lib/fa/beer';
import Cam from 'react-icons/lib/fa/camera-retro'
import createBlockImageButton from './createBlockImageButton';

let mod = 'yo';
let onc = "yo";
let es = "yo";

const promptIt = ()=>{

    
    // console.log("editor: ",es)
    // console.log("onchange: ", onc)
    // console.log("modifier: ", mod)
    const url = window.prompt("Escribe el link de tu imagen");
    // console.log(url, mod)
    onc(mod(es, url));
}

export const zavalaTest = (editorState,onChange,modifier )=>{
    mod = modifier;
    onc = onChange;
    es = editorState;
    const p = <Cam onClick={promptIt} />
    return createInlineStyleButton({
        style: 'IMAGE',
        /*children: (
            <Cam onClick={()=>promptIt()} />
        ),*/
        children: p
      });
}

export default createBlockImageButton({
    style: 'IMAGE',
    children: (
        <Cam />
    ),
  });


