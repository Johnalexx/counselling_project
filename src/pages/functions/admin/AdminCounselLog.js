import React from 'react';
import {Link} from 'react-router-dom';
// import '../../../assets/css/bootstrap.min.css';
// import '../../../assets/css/bootstrap_limitless.css';
// import '../../../assets/css/bootstrap_limitless.min.css';
// import '../../../ConceptStylesheet.css';
import './../authorized users/CounselLog.css';

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

                                <div class="alert alert-success alert-styled-left alert-arrow-left alert-dismissible">
									<button type="button" class="close" data-dismiss="alert"><span>×</span></button>
									<span class="font-weight-semibold">Well done!</span> You successfully read <a href="#" class="alert-link">this important</a> alert message.
							    </div>

                            </div>
                        </div>
                </div>
                <div className="page-content">
            <div className="datatable-wrapper">
                {/* Table Header */}
                <div className="datatable-header">
                    <div className="datatable-header-filter">
                        <label>
                            <span>Filter: </span>
                            <input className="" type="search" placeholder="Type to filter..." aria-controls=""/>
                        </label>
                    </div>
                    <div className="datatable-table-length">
                        <label>
                            <span>Show: </span>
                        </label>
                    </div>
                </div>
                {/* Table Body */}
                <div className="datatable-scroll">
                    <table id="" className="table datatable-sorting dataTable no-footer">
                        <thead>
                            <tr role="row">
                                <th className="sorting" tabIndex="0" rowSpan="1" colSpan="1">E-mail</th>
                                <th className="sorting" tabIndex="0" rowSpan="1" colSpan="1">Name<div></div></th>
                                <th className="sorting" tabIndex="0" rowSpan="1" colSpan="1">Client Title</th>
                                <th className="sorting" tabIndex="0" rowSpan="1" colSpan="1">Date Posted</th>
                                <th className="sorting_asc" tabindex="0" rowspan="1" colspan="1" aria-sort="ascending">Status</th>
                                <th className="text-center action sorting_disabled" rowspan="1" colspan="1">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd" role="row">
                                <td>joh@jo.com</td>
                                <td>John</td>
                                <td>Student</td>
                                <td>30/3/2020 18:07pm</td>
                                <td className="sorting_1">
                                    <span className="badge badge-success">Approved</span>
                                </td>
                                <td>
                                    <Link to="/book-appointment">
                                        Reschedule
                                    </Link>
                                </td>
                            </tr>
                            <tr className="even" role="row">
                                <td>joh@jo.com</td>
                                <td>John</td>
                                <td>Student</td>
                                <td>25/9/2020 11:01am</td>
                                <td className="sorting_1">
                                    <span className="badge badge-failure">Declined</span>
                                </td>
                                <td>
                                    <Link to="/book-appointment">
                                        Reschedule
                                    </Link>
                                </td>
                            </tr>
                            <tr className="odd" role="row">
                                <td>joh@jo.com</td>
                                <td>John</td>
                                <td>Student</td>
                                <td>20/03/2021 15:30pm</td>
                                <td className="sorting_1">
                                    <span className="badge badge-pending">Pending</span>
                                </td>
                                <td>
                                    <Link to="/book-appointment">
                                        Reschedule
                                    </Link>
                                </td>
                            </tr>
                            <tr className="even" role="row">
                                <td>joh@jo.com</td>
                                <td>Dutchman</td>
                                <td>Student</td>
                                <td>07/09/2021 03:00am</td>
                                <td className="sorting_1">
                                    <span className="badge badge-failure">Declined</span>
                                </td>
                                <td>
                                    <Link to="/book-appointment">
                                        Reschedule
                                    </Link>
                                </td>
                            </tr>
                            <tr className="odd" role="row">
                                <td>joh@jo.com</td>
                                <td>John</td>
                                <td>Student</td>
                                <td>05/04/2021 16:20pm</td>
                                <td className="sorting_1">
                                    <span className="badge badge-success">Approved</span>
                                </td>
                                <td>
                                    <Link to="/book-appointment">
                                        Reschedule
                                    </Link>
                                </td>
                            </tr>
                            <tr className="even" role="row">
                                <td>joh@jo.com</td>
                                <td>John</td>
                                <td>Student</td>
                                <td>06/05/2021 14:23pm</td>
                                <td className="sorting_1">
                                    <span className="badge badge-success">Approved</span>
                                </td>
                                <td>
                                    <Link to="/book-appointment">
                                        Reschedule
                                    </Link>
                                </td>
                            </tr>
                            <tr className="odd" role="row">
                                <td>joh@jo.com</td>
                                <td>John</td>
                                <td>Student</td>
                                <td>05/12/2021 12:10am</td>
                                <td className="sorting_1">
                                    <span className="badge badge-pending">Pending</span>
                                </td>
                                <td>
                                    <Link to="/book-appointment">
                                        Reschedule
                                    </Link>
                                </td>
                            </tr>
                            <tr className="even" role="row">
                                <td>joh@jo.com</td>
                                <td>John</td>
                                <td>Student</td>
                                <td>09/05/2019 15:23pm</td>
                                <td className="sorting_1">
                                    <span className="badge badge-success">Approved</span>
                                </td>
                                <td>
                                    <Link to="/book-appointment">
                                        Reschedule
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="datatable-footer"></div>
            </div>            
        </div>
            </div>
        </div>
    )
}

export default AdminCounselLog