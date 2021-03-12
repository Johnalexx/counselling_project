import React from 'react';
import './counsel.css';
import './App.css';
import {Link} from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <h3>Logo</h3>
            <ul className="nav-links">
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
