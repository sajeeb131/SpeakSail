import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../login/LoginPage.css'
import { useState } from 'react';

import Logo from '../../assets/images/LogoWhite.png'
import SignupImage from '../../assets/images/Online test-rafiki 1.png'
import GoogleIcon from '../../assets/images/GoogleIcon.svg'

const SignUpPage = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
    }

    return (
        <div className="login-page">
            <img className="loginImage" loading="eager" alt="" src={SignupImage} />

            <form className="login-container" onSubmit={handleSubmit}>
                <img className="speaksail-logo" loading="eager" alt="" src={Logo} />

                <button className="frame-email-pass-wrapper">
                    <div className="frame-email-pass">
                        <div className="frame-device-google">
                            <img className="googleIcon" alt="" src={GoogleIcon} />
                        </div>
                        <div className="frame-login-with-google">
                            <div className="login-with-google">Sign up with Google</div>
                        </div>
                    </div>
                </button>

                <div className="o-r-frame">
                    <div className="or-">-OR-</div>
                </div>

                <div className="credentials-container">
                    <div className="frame-email-address">
                        <div className="frame-password">
                            <div className="email-password-frame">
                                <input className="email-address" placeholder="Full Name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="email-password-frame">
                                <input className="email-address" placeholder="Email Address" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>

                            <div className="email-password-frame1">
                                <input className="password" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                            <div className="email-password-frame">
                                <select className="register-dropdown" name="register" id="register" type="email" value={userType} onChange={(e) => setUserType(e.target.value)}>
                                    <option value="" disabled selected>Register as</option>
                                    <option value="teacher">Teacher</option>
                                    <option value="student">Student</option>
                                </select>
                            </div>
                        </div>

                        <button className="text-password2" type='submit'>
                            <div className="login">Sign up</div>
                        </button>

                    </div>

                    <div className="dont-have-an-container">
                        <span className="dont-have-an-account">
                            <span className="dont-have-an">Already have an account?</span>
                            <span className="span">{` `}</span>
                        </span>
                        <span className="signup">
                            <Link>Login</Link>
                        </span>
                    </div>
                    
                </div>
            </form>
            
            
           
        </div>

    );

};

export default SignUpPage;