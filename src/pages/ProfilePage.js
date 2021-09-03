import React from 'react'
import {Link} from 'react-router-dom';
import UserProfileImage from '../images/profile/pro-image.jpg';
import '../Profile.css'

function ProfilePage() {
    return (
        <div>
            <h2>Profile Page</h2>
            <div className="card">
								<div className="card-body bg-indigo-400 text-center card-img-top" >
									<div className="card-img-actions d-inline-block mb-3">
										<img className="img-fluid rounded-circle" src={UserProfileImage} alt="" width="170" height="170"/>
										<div className="card-img-actions-overlay rounded-circle">
											<Link to="#" className="btn btn-outline bg-white text-white border-white border-2 btn-icon rounded-round">
												<i className="icon-plus3"></i>
											</Link>
											<Link to="#" className="btn btn-outline bg-white text-white border-white border-2 btn-icon rounded-round ml-2">
												<i className="icon-touch-pinch"></i>
											</Link>
										</div>
									</div>

						    		<h6 className="full-profile-name color-black">Adegbola John</h6>
						    		<span className="profile-role color-black">Student</span>

						    	</div>

								<div className="card-body p-0">
									<ul className="nav nav-sidebar mb-2">
										<li className="nav-item-header">Navigation</li>
										<li className="nav-item">
											<Link to="#" className="nav-link active" data-toggle="tab">
												<i className="icon-user"></i>
												 My profile
											</Link>
										</li>
										<li className="nav-item">
											<Link to="/update-password" className="nav-link" data-toggle="tab">
												<i className="icon-key"></i>
												Update Password
											</Link>
										</li>
										<li className="nav-item">
											<Link to="#" className="nav-link" data-toggle="tab">
												<i className="icon-envelop2"></i>
												Inbox
												<span className="badge bg-danger badge-pill ml-auto">29</span>
											</Link>
										</li>
										<li className="nav-item-divider"></li>
										<li className="nav-item">
											<Link to="/logout" className="nav-link" data-toggle="tab">
												<i className="icon-switch2"></i>
												Logout
											</Link>
										</li>
									</ul>
								</div>
							</div>
        </div>
    )
}

export default ProfilePage
