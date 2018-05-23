import React, { Component } from 'react';
import './Blog.css';
import {Link} from 'react-router-dom';
import Slide from '../home/Slide';
import Nav from '../nav/Nav';
import CardBlog from '../card/CardBlog';
import Footer from '../footer/Footer';
import {getPosts} from '../../services/firebase';
import toastr from 'toastr';

class BlogContainer extends Component {

    state = {
        posts:[]
    }

    componentWillMount(){
        getPosts()
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

                    {this.state.posts.map(post=>{
                        return <CardBlog key={post.key} {...post} />
                    })}

                </div>

                <Footer />
            </div>
        );
    }
}

export default BlogContainer;