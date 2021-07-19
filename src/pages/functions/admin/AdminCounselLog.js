import React from 'react';
import {Link} from 'react-router-dom';
// import '../../../ConceptStylesheet.css';
// import '../../Counsellog.css'

function AdminCounselLog(){
    return(
        <div className="dashboard-main-wrapper">
            <h3>Administration Counsel Log/History</h3>
            <div className="dashboard-wrapper">
                <div className="container-fluid dashboard-content">
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-inline-block">
                                        <h5 className="text-muted">Total Counsel Meeting Submitted</h5>
                                        <h2 className="mb-0"> 10,280</h2>
                                    </div>
                                    <div className="float-right icon-circle-medium  icon-box-lg  bg-info-light mt-1">
                                        <i className="fa fa-eye fa-fw fa-sm text-info"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default AdminCounselLog