import React from 'react';
import './counsel.css';
import './App.css';
import {Link} from 'react-router-dom';
import Logo12 from './images/logo1.png';

function Nav() {
    return (
        <nav>
            <Link to="/">
                <img class="nav-logo" src={Logo12} alt="logo" width="85" height="75"/>
            </Link>
            <ul className="nav-links dec-linker">
                <Link to= "/contact">
                    <li>Contact</li>
                </Link>
                <Link to= "/login">
                    <li>Login</li>
                </Link>
                <Link to="/faq">
                    <li>FAQs</li>
                </Link>
                <Link to="/user-profile">
                    <li><span className="fa fa-user"></span>Johnalexx</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav
