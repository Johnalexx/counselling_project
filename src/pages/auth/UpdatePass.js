import React from 'react'

function UpdatePass() {
    return (
        <div>
            <h3>Update Password</h3>
            <div className="password-reset-form">
                    <div className="login-card-body">
                           <form className="reset-pass-form-container">
                               <div className="login-form-group">
                                    <input class="form-control form-control-lg" id="current-pass" type="password" placeholder="Current Password" autocomplete="off"/>
                               </div>
                               <div className="login-form-group">
                                    <input class="form-control form-control-lg" id="new-pass" type="password" placeholder="New Password" autocomplete="off"/>
                               </div>
                               <div className="login-form-group">
                                    <input class="form-control form-control-lg" id="confirm-new-pass" type="password" placeholder="Re-enter New Password" autocomplete="off"/>
                               </div>
                                <div class="login-form-submit">
                                    <button type="submit" class="btn btn-primary btn-lg btn-block">Update</button>
                                </div>
                           </form>
                    </div>
            </div>
        </div>
    )
}

export default UpdatePass
