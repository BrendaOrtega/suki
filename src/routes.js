import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeContainer from './components/home/HomeContainer';
import Admin from './components/admin/AdminDisplay';
import {PostForm} from './components/admin/blog/PostForm';

export const Routes = () => (
    <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route path="/admin" component={Admin} />
        <Route path="/login" component={Login} />
        <Route path="/about" component={About}/>
        <Route exact path="/media" component={MediaContainer} />
        <Route path="/media/detail" component={MediaDisplayDetail} />
        <Route exact path="/blog" component={BlogContainer} />
        <Route path="/blog/detail" component={BlogDetailDisplay} />
        <Route exact path="/photo" component={ImgContainer} />
        <Route path="/photo/detail" component={ImgDetailDisplay} />
    </Switch>
);