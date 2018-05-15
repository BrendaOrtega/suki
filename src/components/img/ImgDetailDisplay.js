import React from 'react';
import './Img.css';
import Nav from '../nav/Nav';

export const ImgDetailDisplay = ({}) => (

    <div>
        <Nav />
        <div className="box_image">
            <div className="img_hid">
                <img className="photi" src="https://images.pexels.com/photos/571169/pexels-photo-571169.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
            </div>
            <div className="data_img">
                <h2>Arctic Silence</h2>
                <h3>Noruega</h3>
                <hr className="line_img"/>
                <p>12 Diciembre 2090</p>
            </div>
        </div>
    </div>
);