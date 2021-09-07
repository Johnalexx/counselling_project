import React, { Component } from 'react';
import Axios from 'axios';
import Login1 from '../../images/logo1.png';
import {Link} from 'react-router-dom';

import AuthService from '../../services/auth.service';
// Form Validations Import
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";


const required = value => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
  };

  export default class Login extends Component {
    constructor(props) {
      super(props);
      this.handleLogin = this.handleLogin.bind(this);
      this.onChangeUsername = this.onChangeUsername.bind(this);
      this.onChangePassword = this.onChangePassword.bind(this);
  
      this.state = {
        username: "",
        password: "",
        loading: false,
        message: ""
      };
    }
  
    onChangeUsername(e) {
      this.setState({
        username: e.target.value
      });
    }
  
    onChangePassword(e) {
      this.setState({
        password: e.target.value
      });
    }
  
    handleLogin(e) {
      e.preventDefault();
  
      this.setState({
        message: "",
        loading: true
      });
  
      this.form.validateAll();
  
      if (this.checkBtn.context._errors.length === 0) {
        AuthService.login(this.state.username, this.state.password).then(
          () => {
            this.props.history.push("/profile");
            window.location.reload();
          },
          error => {
            const resMessage =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();
  
            this.setState({
              loading: false,
              message: resMessage
            });
          }
        );
      } else {
        this.setState({
          loading: false
        });
      }
    }

    render() {
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
                             value={this.state.username}
                             onChange={this.onChangeUsername}
                             validations={[required]}
                             placeholder="Username" autocomplete="off"/>
                        </div>
                        <div class="login-form-group">
                             <input class="form-control form-control-lg" id="password" type="password"
                             value={this.state.password}
                             onChange={this.onChangePassword}
                             validations={[required]}
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
                             className="custom-login-btn"
                             disabled={this.state.loading}
                             
                             onSubmit={this.handleLogin}
                                ref={c => {
                                    this.form = c;
                                }}
                             >

                            {this.state.loading && (
                                <span className="spinner-border spinner-border-sm"></span>
                            )}

                            
                                 <span>Login</span>
                             </button>
                         </div>
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
        );
      }
    }


