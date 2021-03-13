import React from 'react'

function ResetPass() {
    return (
        <div>
            <h3>Reset Password</h3>
            <div className="password-reset-form">
                    <div className="login-card-body">
                           <form className="reset-pass-form-container">
                               <div className="login-form-group">
                                    <input class="form-control form-control-lg" id="username" type="text" placeholder="Username" autocomplete="off"/>
                               </div>
                               <div class="login-form-group">
                                    <input class="form-control form-control-lg" id="password" type="password" placeholder="Password"/>
                                </div>
                                <div class="login-form-submit">
                                    <button type="submit" class="btn btn-primary btn-lg btn-block">Reset Password</button>
                                </div>
                           </form>
                       </div>
            </div>
        </div>
    )
}

export default ResetPass;
