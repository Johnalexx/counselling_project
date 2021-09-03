import React from 'react';
import './counsel.css';
import './App.css';
import {Link} from 'react-router-dom';
import Logo12 from './images/logo1.png';
import UserAvatar from './images/profile/pro-image.jpg';

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
                {/* Dropdown Style */}
                <li className="dropdown dropdown-user show">
                    <Link to="#" className="navbar-nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
                        <img className="rounded-circle user-avatar" src={UserAvatar} alt="Avatar"/>
                        <span>Johnalexx</span>
                    </Link>
                    <div className="dropdown-menu dropdown-menu-right">
                        <Link to="/profile" className="dropdown-item">
                            <i className="icon-user">
                                My Profile
                            </i>
                        </Link>
                        <div className="dropdown-divider"></div>
                        <Link to="#" className="dropdown-item">
                            <i className="icon-cog5">
                                Account Settings
                            </i>
                        </Link>
                        <Link to="/logout" className="dropdown-item">
                            <i className="icon-switch2">
                                Logout
                            </i>
                        </Link>
                    </div>
                </li>

                {/* <Link to="/user-profile">
                    <li><span className="fa fa-user"></span>Johnalexx</li>
                </Link> */}
            </ul>
        </nav>
    )
}

export default Nav
