import React, { Component } from 'react';
import './Admin.css';
import {CardBlogForm} from './CardBlogForm';
import { Modal, Button } from 'antd';
import { Select } from 'antd';
const Option = Select.Option;

function handleChange(value) {
    console.log(`selected ${value}`);
}

class Post extends Component {
    state = { visible: false }




    render() {
        return (
            <div className="box_post">

                    <Select style={{ width: "100%" }} onChange={handleChange} placeholder="Tipo de post">
                        <Option value="blog">Blog</Option>
                        <Option value="quote">Quote</Option>
                        <Option value="video">Video</Option>
                        <Option value="media">Media</Option>
                    </Select>
                    <CardBlogForm />

            </div>
        );
    }
}

export default Post;