import React from 'react'

function Contact() {
    return (
        <div>
            <div className="contact-mt container-row">
                <div className="contact-info-container">
                    <div className="contact-info">
                        <div className="address-panel">
                            <h4>Location: </h4>
                            <p>Anchor University, Lagos.</p>
                        </div>
                        <div className="e-mail-panel">
                            <h4>Email: </h4>
                            <p>adegbolajohn1@gmail.com</p>
                        </div>
                        <div className="phone-panel">
                            <h4>Call: </h4>
                            <p>+234 906 880 0564</p>
                        </div>
                    </div>
                </div>
                    <div className="contact-form-container contact-col">
                    <form className="contact-mailing-form">
                        <div className="contact-form-row">
                            <div className="contact-col-md contact-form-group contact-form-rww">
                                <input id="" placeholder="Name" className="contact-form-control"/>
                                <input id="" placeholder="E-mail" className="contact-form-control"/>
                            </div>
                            <div className="contact-form-group contact-col-md">
                                <input id="" className="contact-form-control"/>
                            </div>
                            <div className="contact-form-group">
                                <input type="text" placeholder="Phone Number" className="contact-form-control"/>
                            </div>
                            <br/>
                            <div className="contact-form-group">
                                <textarea className="message-group contact-form-control" placeholder="Enter Message" required/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
