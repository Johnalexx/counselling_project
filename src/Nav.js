import React from 'react';
import './counsel.css';
import './App.css';
import {Link} from 'react-router-dom';
import Logo12 from './images/logo1.png';

function Nav() {
    return (
        <nav>
            <Link to="/">
                <img class="nav-logo" src={Logo12} alt="logo" width="70" height="70"/>
            </Link>
            <ul className="nav-links dec-linker">
                <Link to= "/login">
                    <li>Login</li>
                </Link>
                <Link to= "/view-counsellors">
                    <li>View Counsellors</li>
                </Link>
                <Link to= "/contact">
                    <li>Contact</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav
