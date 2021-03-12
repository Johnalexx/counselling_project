import React from 'react'

function ResetPass() {
    return (
        <div>
            <h3>Reset Password</h3>
            <div className="password-reset-form">
                    <div className="login-card-body">
                           <form>
                               <div className="login-form-group">
                                    <input class="form-control form-control-lg" id="username" type="text" placeholder="Username" autocomplete="off"/>
                               </div>
                               <div class="login-form-group">
                                    <input class="form-control form-control-lg" id="password" type="password" placeholder="Password"/>
                                </div>
                                <div class="form-group">
                                    <label class="custom-control custom-checkbox">
                                        <input class="custom-control-input" type="checkbox"/>
                                        <span class="custom-control-label">Remember Me</span>
                                    </label>
                                </div>
                                <div class="login-form-submit">
                                    <button type="submit" class="btn btn-primary btn-lg btn-block">Sign in</button>
                                </div>
                           </form>
                       </div>
            </div>
        </div>
    )
}

export default ResetPass;
