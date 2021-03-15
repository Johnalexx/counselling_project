import React from 'react';
import Login1 from '../../images/logo1.png';
import {Link} from 'react-router-dom';

function Signup() {
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
                                    <input class="form-control form-control-lg" id="username" type="text" placeholder="Username" autocomplete="on"/>
                               </div>
                               <div className="login-form-group">
                                    <input class="form-control form-control-lg" id="e-mail" type="text" placeholder="E-mail" autocomplete="off"/>
                               </div>
                               <div class="login-form-group">
                                    <input class="form-control form-control-lg" id="password" type="password" placeholder="Password"/>
                                </div>
                                <div class="login-form-submit">
                                    <button type="submit" class="btn btn-primary btn-lg btn-block">Sign up</button>
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
