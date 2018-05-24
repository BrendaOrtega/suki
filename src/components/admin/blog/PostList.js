import React, {Component} from 'react';
import {getPosts} from '../../../services/firebase';
import toastr from 'toastr';
import {Link} from 'react-router-dom';

export default class PostList extends Component{

    state = {
        posts:[]
    }

    componentWillMount(){
        getPosts()
        .then(posts=>{
            this.setState({posts})
        })
        .catch(e=>{
            toastr.error('no se pudo cargar ' + e)
        })
    }

    render(){
        const {posts} = this.state;
        return(
            <div>
                {posts.map(post=>{
                    return <p key={post.key} ><Link to={`/admin/new-post/${post.key}`}>{post.title || 'sin titulo'}</Link></p>
                })}
            </div>
        );
    }
}