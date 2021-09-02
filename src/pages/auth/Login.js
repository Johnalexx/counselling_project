import React, { useState } from 'react';
import Axios from 'axios';
import Login1 from '../../images/logo1.png';
import {Link} from 'react-router-dom';

function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [loginStatus, setLoginStatus] = useState("");

    const Signin = () => {
        Axios.post("http://localhost:3001/login", {
            username: username,
            password: password,
        }).then((response) => {
            if (response.data.message) {
                setLoginStatus(response.data.message)
            } else{
                setLoginStatus(response.data[0].username);
            }
            
        });
    };
    return (
               <div className="login-card-container">
                   <div className="login-card">
                       <div className="login-card-header text-center">
                           <Link to="/">
                                <img class="logo-img" src={Login1} alt="logo" width="100" height="80"/>
                           </Link>
                           <span className="login-card-description">
                               Fill in correct details
                           </span>
                       </div>
                       <div className="login-card-body">
                           <form>
                               <div className="login-form-group">
                                    <input class="form-control form-control-lg" id="username" type="text"
                                    onChange={(e) => {
                                        setUsername(e.target.value);
                                    }} 
                                    placeholder="Username" autocomplete="off"/>
                               </div>
                               <div class="login-form-group">
                                    <input class="form-control form-control-lg" id="password" type="password"
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                    }} 
                                    placeholder="Password"/>
                                </div>
                                {/* <div class="form-group">
                                    <label class="login-remember-checkbox">
                                        <input class="custom-control-input" type="checkbox"/>
                                        <span class="login-remember-text">Remember Me</span>
                                    </label>
                                </div> */}
                                <div class="login-form-submit">
                                    <button type="submit"
                                    class="custom-login-btn"
                                    onClick={Signin}>Sign in</button>
                                </div>
                                <h2>{loginStatus}</h2>
                           </form>
                       </div>
                       <div className="login-form-footer bg-white p-0">
                           <div className="card-footer-item card-footer-item-bordered">
                               <Link to="/signup" className="dec-link">
                                   Create Account
                               </Link>
                           </div>
                           <div className="card-footer-item card-footer-item-bordered">
                               <Link to="/reset-password" className="dec-link">
                                   Forgot Password
                               </Link>
                           </div>
                       </div>
                   </div>
               </div>
    )
}

export default Login
