import React from 'react'
import {Link} from 'react-router-dom';
import Sample1 from '../images/angle.png';
import Sample2 from '../images/ract.png';

function viewCounsellor(){
    return(
        <div>
            <h3>Available Counsellors are</h3>
                <div className="counsellor-gallery-view">
                    <Link to="/">
                        <img class="counsellor-image-view" src={Sample1} alt="Image" width="100" height="80"/>
                    </Link>
                    <div className="counsellor-gallery-description">
                        John Stones
                        <div className="counsellor-gender-male">
                            <p>Gender: <i>Male</i></p>
                        </div>
                    </div>
                    <div className="counsellor-gallery-links">
                        <p><a href="mailto:adegbolajohn1@gmail.com" className="btn-primary btn btn-lg">Send Mail</a></p>
                    </div>
                </div>
            <div className="counsellor-gallery-view">
                <Link to="/">
                    <img class="counsellor-image-view" src={Sample1} alt="Image" width="100" height="80"/>
                </Link>
                <div className="counsellor-gallery-description">
                    Ruben Dias
                    <div className="counsellor-gender-male">
                        <p>Gender: <i>Male</i></p>
                    </div>
                </div>
                <div className="counsellor-gallery-links">
                    <p><a href="mailto:adegbolajohn1@gmail.com" className="btn-primary btn btn-lg">Send Mail</a></p>
                </div>
            </div>
            <div className="counsellor-gallery-view">
                <Link to="/">
                    <img class="counsellor-image-view" src={Sample1} alt="Image" width="100" height="80"/>
                </Link>
                <div className="counsellor-gallery-description">
                    Joao Cancelo
                    <div className="counsellor-gender-male">
                        <p>Gender: <i>Male</i></p>
                    </div>
                </div>
                <div className="counsellor-gallery-links">
                    <p><a href="mailto:adegbolajohn1@gmail.com" className="btn-primary btn btn-lg">Send Mail</a></p>
                </div>
            </div>
            <div className="counsellor-gallery-view">
                <Link to="/">
                    <img class="counsellor-image-view" src={Sample2} alt="Image" width="100" height="80"/>
                </Link>
                <div className="counsellor-gallery-description">
                    Kevin DeBruyne
                    <div className="counsellor-gender-male">
                        <p>Gender: <i>Male</i></p>
                    </div>
                </div>
                <div className="counsellor-gallery-links">
                    <p><a href="mailto:adegbolajohn1@gmail.com" className="btn-primary btn btn-lg">Send Mail</a></p>
                </div>
            </div>
            <div className="counsellor-gallery-view">
                <Link to="/">
                    <img class="counsellor-image-view" src={Sample1} alt="Image" width="100" height="80"/>
                </Link>
                <div className="counsellor-gallery-description">
                    Alex Greenwood
                    <div className="counsellor-gender-female">
                            <p>Gender: <i>Female</i></p>
                    </div>
                </div>
                <div className="counsellor-gallery-links">
                    <p><a href="mailto:adegbolajohn1@gmail.com" className="btn-primary btn btn-lg">Send Mail</a></p>
                </div>
            </div>
            <div className="counsellor-gallery-view">
                <Link to="/">
                    <img class="counsellor-image-view" src={Sample1} alt="Image" width="100" height="80"/>
                </Link>
                <div className="counsellor-gallery-description">
                    Bernardo Carvalho Silva
                    <div className="counsellor-gender-male">
                            <p>Gender: <i>Male</i></p>
                    </div>
                </div>
                <div className="counsellor-gallery-links">
                    <p><a href="mailto:adegbolajohn1@gmail.com" className="btn-primary btn btn-lg">Send Mail</a></p>
                </div>
            </div>
            <div className="counsellor-gallery-view">
                <Link to="/">
                    <img class="counsellor-image-view" src={Sample1} alt="Image" width="100" height="80"/>
                </Link>
                <div className="counsellor-gallery-description">
                    Sergio Kun Aguero
                    <div className="counsellor-gender-male">
                            <p>Gender: <i>Male</i></p>
                    </div>
                </div>
                <div className="counsellor-gallery-links">
                    <p><a href="mailto:adegbolajohn1@gmail.com" className="btn-primary btn btn-lg">Send Mail</a></p>
                </div>
            </div>
        </div>
    )
}

export default viewCounsellor;