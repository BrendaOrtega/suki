import React, {Component} from 'react';
//import {getPosts} from '../../../services/firebase';
import {getPosts, savePost} from '../../../services/heroku';
import toastr from 'toastr';
//import {Link} from 'react-router-dom';
import {Table, Switch, Select} from 'antd';
const Option = Select.Option;





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
            toastr.info('Actualizado');
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

    shutOff = (status, post) => {
        if(status){
            status = "PUBLISHED";
            post.status = status;
        }else{
            status = "OFF";
            post.status = status;
        }
        savePost(post)
        .then(r=>{
            toastr.info('Actualizado');
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
    };

    changeType = (value, post) => {
        post.tipo = value;
        savePost(post)
        .then(r=>{
            toastr.info('Actualizado');
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
    };
    

    render(){
        const {posts} = this.state;
        //posts.reverse();
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

                        <Column
                            title="Publicado"
                            dataIndex="status"
                            key="status"
                            render={(status, record)=><Switch checked={status === "PUBLISHED"} onChange={(status)=>this.shutOff(status,record)} />}
                        />

                        <Column
                            title="Tipo"
                            dataIndex="tipo"
                            key="tipo"
                            render={(tipo, record)=>{
                                return (<Select value={tipo || "BLOG_POST"} defaultValue="BLOG_POST" style={{ width: 100 }} onChange={(tipo)=>this.changeType(tipo, record)}>
                                    <Option value="BLOG_POST">Post</Option>
                                    <Option value="PROFESIONAL">Profesional</Option>
                                    <Option value="PERSONAL" >Personal</Option>
                                </Select>)
                            }}
                        />



                    </Table>
                {/* {posts.map(post=>{
                    return <p key={post._id} ><Link to={`/admin/new-post/${post._id}`}>{post.title || 'sin titulo'}</Link></p>
                })} */}
            </div>
        );
    }
}