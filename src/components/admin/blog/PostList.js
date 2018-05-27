import React, {Component} from 'react';
import {getPosts} from '../../../services/firebase';
import toastr from 'toastr';
import {Link} from 'react-router-dom';
import { Table} from 'antd';




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
            toastr.error('no se pudo cargar ' + e)
        })
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
                            title= "Nombre del Album"
                            dataIndex="title"
                            key="title"

                        />

                        <Column
                            title="Fecha"
                            dataIndex="date"
                            key="date"
                        />



                    </Table>
                {posts.map(post=>{
                    return <p key={post.key} ><Link to={`/admin/new-post/${post.key}`}>{post.title || 'sin titulo'}</Link></p>
                })}
            </div>
        );
    }
}