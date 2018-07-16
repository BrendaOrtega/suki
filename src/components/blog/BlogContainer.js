import React, { Component } from 'react';
import './Blog.css';
//import {Link} from 'react-router-dom';
import Slide from '../home/Slide';
import Nav from '../nav/Nav';
import CardBlog from '../card/CardBlog';
import Footer from '../footer/Footer';
//import {getPosts} from '../../services/firebase';
import {getPublic} from '../../services/heroku';
import toastr from 'toastr';
import {Spin} from 'antd';

class BlogContainer extends Component {

    state = {
        posts:[]
    }

    componentWillMount(){
        getPublic('BLOG_POST', this.props.important || false)
        .then(posts=>{
            console.log(posts)
            this.setState({posts})
        })
        .catch(e=>{
            toastr.error(e)
        })
    }

    componentDidMount () {
        window.scroll(0, 0)
    }


    render() {
        console.log(this.state.posts)
        return (
            <div>
                <Slide />
                <Nav />

                <h2 className="subtitulo">Blog</h2>
                <hr className="line_gris"/>
                <div className="box_blog">

                    {this.state.posts.length ? null : <Spin />}


                    {this.state.posts.map(post=>{
                        return <CardBlog key={post._id} {...post} />
                    })}

                </div>

                <Footer />
            </div>
        );
    }
}

export default BlogContainer;