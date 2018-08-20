import React, { Component } from 'react';
import './Admin.css';
import { Menu, Icon } from 'antd';
import {Route, NavLink, Link} from 'react-router-dom';
import {AdminHome} from './AdminHome';
import {CardQuoteForm, CardQuoteList} from './quotes';
import CardVideoForm from './videos/CardVideoForm';
import {VideoList} from './videos/VideoList';
import CardMediaForm from './media/CardMediaForm';
import {MediaList} from './media/MediaList';
import Portadas from './portadas/Portadas';
//import Post from './Post';
//bliss:
import NewPost from './blog/NewPost';
import PostList from './blog/PostList';
//import Footer from '../footer/Footer';
import {PartnerForm} from '../admin/partner/PartnerForm';
import {PartnerList} from '../admin/partner/PartnerList';

const SubMenu = Menu.SubMenu;



class AdminDisplay extends Component {
    state = {
        isLogged: false,
        collapsed: false,
        openKeys:[]
    }
    // componentWillMount() {
    //     let user = localStorage.getItem("user");
    //     this.checkUser(user);
    //     // user = JSON.parse(user);
    //     if (user) {
    //         // console.log("si")
    //
    //         this.setState({isLogged:true, user})
    //     }else{
    //         this.setState({isLogged:false})
    //         this.props.history.push("/login");
    //     }
    // }
    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    componentWillMount(){
        if(!localStorage.getItem('user')) this.props.history.push('/login');
    }
    logOut = () => {
        localStorage.removeItem('user')
        this.setState({isLogged:false})
        this.props.history.push('/login')
    }

    render() {
        //const {openKeys} = this.state;
        return (
            <div style={{display:'flex'}}>
                <div style={{ width: 256}}>
                    <Menu
                        
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"

                        inlineCollapsed={this.state.collapsed}
                    >
                        <Menu.Item key="1" style={{paddingRight: "40px"}}>
                            <Icon type="pie-chart" /><span>Inicio</span>
                            <NavLink to="/admin">

                            </NavLink>
                        </Menu.Item>
                        <SubMenu key="sub1" style={{paddingRight: "20px"}} title={<span><Icon type="file-text" /><span>Blog</span></span>}>
                            <Menu.Item key="5">
                                <Icon type="edit" /><span>Nuevo Post</span>
                                <Link to="/admin/new-post">
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="6">
                                <Icon type="copy" /><span>Contenido</span>
                                <Link to="/admin/posts">
                                </Link>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title={<span><Icon type="tags-o" /><span>Quotes</span></span>}>
                            <Menu.Item key="7">
                                <Icon type="edit" /><span>Nueva Quote</span>
                                <Link to="/admin/quote/new">
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="8">
                                <Icon type="copy" /><span>Contenido</span>
                                <Link to="/admin/quotes">
                                </Link>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" title={<span><Icon type="picture" /><span>Media</span></span>}>
                            <Menu.Item key="9">
                                <Icon type="edit" /><span>Nuevo Album</span>
                                <Link to="/admin/media/new">
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="10">
                                <Icon type="copy" /><span>Contenido</span>
                                <Link to="/admin/media">
                                </Link>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub4" title={<span><Icon type="scan" /><span>Video</span></span>}>
                            <Menu.Item key="11">
                                <Icon type="edit" /><span>Nuevo Video</span>
                                <Link to="/admin/videos/new">
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="12">
                                <Icon type="copy" /><span>Contenido</span>
                                <Link to="/admin/videos">
                                </Link>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub5" title={<span><Icon type="team" /><span>Clientes</span></span>}>
                            <Menu.Item key="13">
                                <Icon type="edit" /><span>Nuevo Partner</span>
                                <Link to="/admin/partners/new">
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="14">
                                <Icon type="copy" /><span>Contenido</span>
                                <Link to="/admin/partners">
                                </Link>
                            </Menu.Item>
                        </SubMenu>
                        <Menu.Item key="15" >
                            <Icon type="solution" /><span>Portadas</span>
                            <Link to="/admin/portadas">
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="16" onClick={this.logOut}>
                            <Icon type="pie-chart" /><span>Cerrar sesión</span>
                        </Menu.Item>


                    </Menu>

                </div>

                <Route exact path="/admin/posts" component={PostList}/>
                <Route exact path="/admin/new-post" component={NewPost}/>
                <Route path="/admin/new-post/:id" component={NewPost}/>

                <Route exact path="/admin/quotes" component={CardQuoteList} />
                <Route path="/admin/quote/new" component={CardQuoteForm} />

                <Route exact path="/admin/media" component={MediaList} />
                <Route path="/admin/media/new" component={CardMediaForm} />

                <Route exact path="/admin/videos" component={VideoList} />
                <Route path="/admin/videos/new" component={CardVideoForm} />

                <Route path="/admin/partners/new" component={PartnerForm}/>
                <Route exact path="/admin/partners" component={PartnerList} />

                <Route path="/admin/portadas" component={Portadas}/>
                <Route exact path="/admin" component={AdminHome} />
            </div>
        );
    }
}

export default AdminDisplay;