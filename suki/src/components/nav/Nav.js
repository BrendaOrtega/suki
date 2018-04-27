import React, { Component } from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;

class Nav extends Component {
    state = {
    }
    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }
    render() {
        return (
            <div className="nav">
                <div className="flex">
                <Menu
                    onClick={this.handleClick}
                    selectedKeys={[this.state.current]}
                    mode="horizontal"
                >
                    <Menu.Item key="mail">
                        <Link to="/">
                            <span>Home</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="app" >
                        <Link to="/">
                            <span>Fotografía</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="blog" >
                        <Link to="/">
                            <span>Blog</span>
                        </Link>
                    </Menu.Item>
                    <SubMenu title={<span>Proyectos</span>}>
                        <Menu.Item key="blog" >
                            <Link to="/">
                                <span>Personales</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="blog" >
                            <Link to="/">
                                <span>Profesionales</span>
                            </Link>
                        </Menu.Item>

                    </SubMenu>
                    <Menu.Item key="face" >
                        <Link to="/">
                            <FontAwesome name="facebook-square" />
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="insta" >
                        <Link to="/">
                            <FontAwesome name="instagram" />
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="twit" >
                        <Link to="/">
                            <FontAwesome name="twitter" />
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="youtube" >
                        <Link to="/">
                            <FontAwesome name="youtube" />
                        </Link>
                    </Menu.Item>
                </Menu>
            </div>
            </div>
        );
    }
}

export default Nav;