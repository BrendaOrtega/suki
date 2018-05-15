import React from 'react';
import './Media.css';
import Nav from '../nav/Nav';

export const MediaDisplayDetail = ({}) => (

    <div>
        <Nav />
        <div className="box_media">
                <div className="img_album">

                </div>
                <div className="data_album">
                    <h2>Arctic Silence</h2>
                    <h3>Greenland</h3>
                    <hr/>
                    <p>Constant movement and permanent transformation make the Arctic
                        forever fascinating. Nothing attests more to this than the massive
                        icebergs on the west coast of Greenland. They drift like islands over
                        the perfectly still ocean, until there is nothing left of them.
                        The fog, oftentimes extremely dense, creates an almost sacral atmosphere:
                        Involuntarily, words are whispered, and with suspense you await the next
                        view emerging from behind the mist.
                    </p>
                    <br/>
                    <p><strong>Fecha</strong></p>
                    <p>22-11-2009</p>
                </div>

         </div>
    </div>
);