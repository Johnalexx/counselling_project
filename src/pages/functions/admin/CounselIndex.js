import React from 'react'
import {Link} from 'react-router-dom'

function CounselIndex() {
    return (
        <div className="central-jumbo">
            <h3>Administration Counsel Portal</h3>
            <div>
            {/* Admin Homepage JumboTron */}
            <div className="index-jumbotron">
                <h1 className="display-tron">Johnalex Counsels</h1>
                <p className="hero-unit">Improve Your Life, Reach Your Goals and Get Real Results.</p>
                <hr class="marg-in"/>
                    <p>da ba de ba be da ba de ba de.</p>
                    <p class="le-ad">
                        <a class="index-jumbotron-btn" href="/guide" role="button">Get Started</a>
                        |
                        <a class="index-jumbotron-btn" href="/view-counsellors" role="button">View Counsellors</a>
                        <br/><br/>
                        <a class="index-jumbotron-btn" href="/find-counsellor" role="button">Find Counsellors</a>
                        <br/><br/>
                        <a class="index-jumbotron-btn" href="/admin/counsel-log" role="button">Check Appointments</a>
                    </p>
            </div>
            <p><Link to="https://github.com/johnalexx" target="_blank">View my GitHub page</Link></p>
        </div>
        </div>
    )
}

export default CounselIndex
