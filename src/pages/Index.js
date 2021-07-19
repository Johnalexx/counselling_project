import React from 'react';
import {Link} from 'react-router-dom';

function Index() {
    return (
        <div>
            <h2>Guest Index View</h2>
            {/* Homepage JumboTron */}
            <div className="index-jumbotron">
                <h1 className="display-tron">Johnalex Counsels</h1>
                <p className="hero-unit">Improve Your Life, Reach Your Goals and Get Real Results.</p>
                <hr class="marg-in"/>
                    <p>Tra la lala lalalalalala.</p>
                    <p class="le-ad">
                        <a class="index-jumbotron-btn" href="/guide" role="button">Get Started</a>
                        |
                        <a class="index-jumbotron-btn" href="/login" role="button">Login</a>
                        |
                        <a class="index-jumbotron-btn" href="/view-counsellors" role="button">View Counsellors</a>
                        |
                        <a class="index-jumbotron-btn" href="/find-counsellor" role="button">Find Counsellors</a>
                        <br/><br/>
                        <a class="index-jumbotron-btn" href="/book-appointment" role="button">Book Appointment</a>
                    </p>
            </div>
            <p><a href="https://github.com/johnalexx" target="_blank">View my GitHub page</a></p>
        </div>
    )
}

export default Index
