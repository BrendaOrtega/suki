import React, { Component } from 'react';
import './Admin.css';
import AdminDisplay from 'AdminDisplay';
import Footer from '../footer/Footer';

class Admin extends Component {

    render() {
        return (
            <div>
                <AdminDisplay />
                <Footer />
            </div>
        );
    }
}

export default Admin;