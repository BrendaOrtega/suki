import React, { Component } from 'react';
import './Footer.css';
import {Link} from 'react-router-dom';

class Footer extends Component {

    render() {
        return (
            <div className="footer">
                <div className="flexx">
                    <span>Copyrigth Suki 2018 @</span>
                    <div>

                        <Link to="/login">
                            <span>Admin</span>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;