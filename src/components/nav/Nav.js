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
                        <Link to="/media">
                            <span>Fotografía</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="blog" >
                        <Link to="/blog">
                            <span>Blog</span>
                        </Link>
                    </Menu.Item>
                    <SubMenu title={<span>Proyectos</span>}>
                        <Menu.Item key="personales" >
                            <Link to="/">
                                <span>Personales</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="profesionales" >
                            <Link to="/">
                                <span>Profesionales</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="part" >
                            <Link to="/partner">
                                <span>Partnership</span>
                            </Link>
                        </Menu.Item>
                    </SubMenu>
                    <Menu.Item key="contacto" >
                        <Link to="/contacto">
                            <span>Contacto</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="face" >
                        <a href="https://www.facebook.com/lasuki" target='blank'>
                            <FontAwesome name="facebook-square" />
                        </a>
                    </Menu.Item>
                    <Menu.Item key="insta" >
                        <a href="https://www.instagram.com/lasuki/" target='blank'>
                            <FontAwesome name="instagram" />
                        </a>
                    </Menu.Item>
                    <Menu.Item key="twit" >
                        <a href="https://www.linkedin.com/in/alejandra-armendariz-a6337655/" target='blank'>
                            <FontAwesome name="linkedin" />
                        </a>
                    </Menu.Item>
                    <Menu.Item key="youtube" >
                        <a href="https://www.youtube.com/channel/UCKL_aq2mKWzj_e-lVusIF9Q?view_as=subscriber" target='blank'>
                            <FontAwesome name="youtube" />
                        </a>
                    </Menu.Item>
                </Menu>
            </div>
            </div>
        );
    }
}

export default Nav;