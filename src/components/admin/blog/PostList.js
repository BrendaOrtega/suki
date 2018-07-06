import React, {Component} from 'react';
//import {getPosts} from '../../../services/firebase';
import {getPosts, savePost} from '../../../services/heroku';
import toastr from 'toastr';
import {Link} from 'react-router-dom';
import {Table, Switch} from 'antd';





const { Column } = Table;
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
            console.log(e)
            toastr.error('no se pudo cargar ' + e)
        })
    }

    putOnHomePage = (value,post) => {
        post.important = value;

        savePost(post)
        .then(r=>{
            toastr.success('Tu post se guardó');
                    //if yes
            const posts = this.state.posts.map(p=>{
                if(p._id === post._id) return post;
                return p;
            });
            this.setState({posts});
        })
        .catch(e=>{
            console.log(e);
            toastr.error('No se pudo guardar', e)
        });


        //console.log(value,post)
    }

    render(){
        const {posts} = this.state;
        return (


                <div className="box_contenido">
                    <h2>Mi Blog</h2>
                    <Table  dataSource={posts} >

                        <Column
                            render={(text, record) => (
                                <span>

                                        </span>
                            )}
                        />
                        <Column
                            title= "Id del post"
                            dataIndex="_id"
                            key="_id"
                            render= {(_id)=>{ return <a href={'/admin/new-post/' + _id}>{_id.slice(0,6)}</a> }}

                        />
                        <Column
                            title= "Nombre del Post"
                            dataIndex="title"
                            key="title"

                        />

                        <Column
                            title="Home Page"
                            dataIndex="important"
                            key="important"
                            render={(important, record)=><Switch checked={important} onChange={(value)=>this.putOnHomePage(value,record)} />}
                        />



                    </Table>
                {/* {posts.map(post=>{
                    return <p key={post._id} ><Link to={`/admin/new-post/${post._id}`}>{post.title || 'sin titulo'}</Link></p>
                })} */}
            </div>
        );
    }
}