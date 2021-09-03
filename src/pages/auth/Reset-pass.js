import React from 'react'

function ResetPass() {
    return (
        <div>
            <h3>Reset Password</h3>
            <div className="password-reset-form">
                    <div className="login-card-body">
                           <form className="reset-pass-form-container">
                               <div className="login-form-group">
                                    <input class="form-control form-control-lg" id="username" type="e-mail" placeholder="Enter e-mail" autocomplete="off"/>
                               </div>
                                <div class="login-form-submit">
                                    <button type="submit" class="btn btn-primary btn-lg btn-block">Send Link</button>
                                </div>
                           </form>
                    </div>
            </div>
        </div>
    )
}

export default ResetPass;
