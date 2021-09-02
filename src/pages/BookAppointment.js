import React from 'react';
import {useState} from 'react';
import Axios from 'axios';
// import Bg1 from '../images/book-appointment.png';
import Bg1 from '../images/app1.png';
import '../Appoint.css';

function BookAppointment() {
    const [email, setEmail] = useState ("");
    const [name, setName] = useState("");
    const [level, setLevel] = useState(0);
    const [reason, setReason] = useState("");
    

    const BookAppointment = () => {
        Axios.post("http://localhost:3001/book-appointment", {
            email: email,
            name: name,
            level: level,
            reason: reason,
            // date: date,
            // time: time,
        }).then(() => {

        })
    }

    return (
        <div>
            <div class="limiter">
                <div class="container-login100">
                    <div class="wrap-login100">
                        <div class="login100-pic js-tilt" data-tilt>
                            <img src={Bg1} alt="Book Appointment"/>
                        </div>

                        <form class="login100-form validate-form">
                            <span class="login100-form-title">
                                Book Appointment
                            </span>

                            <div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                                <input class="input100" type="text" name="email" placeholder="Email"/>
                                <span class="focus-input100"></span>
                                <span class="symbol-input100">
                                    <i class="fa fa-envelope" aria-hidden="true"></i>
                                </span>
                            </div>

                            <div class="wrap-input100 validate-input" data-validate = "Level required">
                                <select class="input100">
                                    <option>LEVEL</option>
                                    <option>JUPEB</option>
                                    <option>100</option>
                                    <option>200</option>
                                    <option>300</option>
                                    <option>400</option>
                                </select>
                                <span class="focus-input100"></span>
                                <span class="symbol-input100">
                                    <i class="fa fa-book" aria-hidden="true"></i>
                                </span>
                            </div>

                            <div class="wrap-input100 validate-input" data-validate = "Counselling reason required">
                                <textarea class="input100" type="text" name="counsel-reason" placeholder="Reason for Counsel"/>
                                <span class="focus-input100"></span>
                                <span class="symbol-input100">
                                    <i class="fa fa-pencil" aria-hidden="true"></i>
                                </span>
                            </div>
                            
                            <div class="wrap-input100 validate-input" data-validate = "Date has to be Inputed">
                                <input class="input100" type="date" name="date"/>
                                <span class="focus-input100"></span>
                                <span class="symbol-input100">
                                    <i class="fa fa-calendar" aria-hidden="true"></i>
                                </span>
                            </div>

                            <div class="wrap-input100 validate-input" data-validate = "Time is required">
                                <input class="input100" type="time" name="time"/>
                                <span class="focus-input100"></span>
                                <span class="symbol-input100">
                                    <i class="fa fa-clock-o" aria-hidden="true"></i>
                                </span>
                            </div>
                            
                            
                            <div class="container-login100-form-btn">
                                <button class="login100-form-btn">
                                    Submit Appointment
                                </button>
                            </div>

                           
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookAppointment
