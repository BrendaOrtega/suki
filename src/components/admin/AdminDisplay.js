import React, { Component } from 'react';
import './Admin.css';
import { Menu, Icon, Button } from 'antd';
import {Route, NavLink, Link} from 'react-router-dom';
import Post from './Post';
const SubMenu = Menu.SubMenu;



class AdminDisplay extends Component {
    state = {
        collapsed: false,
    }
    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    render() {
        return (
            <div style={{display:'flex'}}>
                <div style={{ width: 256}}>
                    <Menu
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                        theme="dark"
                        inlineCollapsed={this.state.collapsed}
                    >
                        <Menu.Item key="1">
                            <Icon type="pie-chart" /><span>Inicio</span>
                            <NavLink to="/admin/lolo">

                            </NavLink>
                        </Menu.Item>
                        <SubMenu key="sub1" title={<span><Icon type="file-text" /><span>Blog</span></span>}>
                            <Menu.Item key="5">
                                <Icon type="edit" /><span>Nuevo Post</span>
                                <Link to="/admin/new-post">
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="6">
                                <Icon type="copy" /><span>Contenido</span>
                                <Link to="/admin/new-post">
                                </Link>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub1" title={<span><Icon type="team" /><span>Quotes</span></span>}>
                            <Menu.Item key="5">
                                <Icon type="edit" /><span>Nuevo Post</span>
                                <Link to="/admin/new-post">
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="6">
                                <Icon type="copy" /><span>Contenido</span>
                                <Link to="/admin/new-post">
                                </Link>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub1" title={<span><Icon type="picture" /><span>Media</span></span>}>
                            <Menu.Item key="5">
                                <Icon type="edit" /><span>Nuevo Post</span>
                                <Link to="/admin/new-post">
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="6">
                                <Icon type="copy" /><span>Contenido</span>
                                <Link to="/admin/new-post">
                                </Link>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub1" title={<span><Icon type="scan" /><span>Video</span></span>}>
                            <Menu.Item key="5">
                                <Icon type="edit" /><span>Nuevo Post</span>
                                <Link to="/admin/new-post">
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="6">
                                <Icon type="copy" /><span>Contenido</span>
                                <Link to="/admin/new-post">
                                </Link>
                            </Menu.Item>
                        </SubMenu>
                        <Menu.Item key="9">
                            <Icon type="desktop" /><span>Partners</span>
                            <Link to="/admin/mijo">
                            </Link>
                        </Menu.Item>

                    </Menu>
                    <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
                        <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
                    </Button>
                </div>

                <Route path="/admin/new-post" component={Post}/>
                <Route path="/admin/mijo" component={()=><h1>Mijo</h1>}/>

            </div>
        );
    }
}

export default AdminDisplay;