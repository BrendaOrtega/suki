
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeContainer from './components/home/HomeContainer';
import Admin from './components/admin/AdminDisplay';
import Login from './components/login/Login';
import About from './components/home/About';
import BlogContainer from './components/blog/BlogContainer';
import {BlogDetail} from './components/blog/BlogDetail';
import MediaContainer from './components/media/MediaContainer';
import {MediaDisplayDetail} from './components/media/MediaDisplayDetail';
import ImgContainer from './components/img/ImgContainer';
import {ImgDetailDisplay} from './components/img/ImgDetailDisplay';
import EditPost from './components/admin/blog/EditPost';
import Contacto from './components/contacto/Contacto';
import PartnersContainer from './components/partners/PartnersContainer';

export const Routes = () => (
    <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route path="/admin" component={Admin} />
        <Route path="/login" component={Login} />
        <Route path="/about" component={About}/>
            <Route path="/contacto" component={Contacto}/>
        <Route exact path="/media" component={MediaContainer} />
        <Route path="/media/detail/:id" component={MediaDisplayDetail} />
        <Route exact path="/blog" component={BlogContainer} />
        <Route path="/blog/detail/:id" component={BlogDetail} />
            <Route path="/partner" component={PartnersContainer}/>
        {/*<Route exact path="/photo" component={ImgContainer} />*/}
        {/*<Route path="/photo/detail" component={} />*/}
        <Route path="/test" component={EditPost} />
    </Switch>
);