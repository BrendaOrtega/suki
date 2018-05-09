import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeContainer from './components/home/HomeContainer';
import Admin from './components/admin/AdminDisplay';
import Login from './components/login/Login';

export const Routes = () => (
    <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route path="/admin" component={Admin} />
        <Route path="/login" component={Login} />
    </Switch>
);