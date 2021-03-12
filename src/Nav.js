import React from 'react';
import './counsel.css';
import './App.css';
import {Link} from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <h3>Logo</h3>
            <ul className="nav-links">
                <li>Login</li>
                <li>View Counsellors</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

export default Nav
