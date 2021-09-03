import React, { useState } from 'react';
import Axios from 'axios';
import Login1 from '../../images/logo1.png';
import {Link} from 'react-router-dom';

function Signup() {

    const [usernameReg, setUsernameReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');
    const [emailReg, setEmailReg] = useState('');

    const Signup = () => {
        Axios.post("http://localhost:3001/signup", {
            username: usernameReg,
            email: emailReg,
            password: passwordReg,
        }).then((response) => {
            console.log(response);
        });
    };

    return (
        <div>
            <h3>Sign up Page</h3>
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
                                    <input class="form-control form-control-lg" id="username" type="text" maxLength="50"
                                    onChange={(e) => {
                                        setUsernameReg(e.target.value);
                                    }} 
                                    placeholder="Username" autocomplete="on"/>
                               </div>

                               <div className="login-form-group">
                                    <input class="form-control form-control-lg" id="e-mail" type="text"
                                     onChange={(e) => {
                                        setEmailReg(e.target.value);
                                    }}
                                     placeholder="E-mail" autocomplete="off"/>
                               </div>

                               <div class="login-form-group">
                                    <input class="form-control form-control-lg" id="password" type="password"
                                      onChange={(e) => {
                                        setPasswordReg(e.target.value);
                                    }}
                                     placeholder="Password"/>
                                </div>
                                <div class="login-form-submit">
                                    <button type="submit"
                                    class="btn btn-primary btn-lg btn-block"
                                    onClick={Signup}>Sign up</button>
                                </div>
                           </form>
                       </div>
                       <div className="login-form-footer bg-white p-0">
                           <div className="card-footer-item card-footer-item-bordered">
                               <Link to="/login" className="dec-link">
                                   Have an account?
                               </Link>
                           </div>
                       </div>
                   </div>
               </div>
        </div>
    )
}

export default Signup;
