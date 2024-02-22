import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginPage.css'


import Logo from '../../assets/images/LogoWhite.png'
import LoginImage from '../../assets/images/login.png'
import GoogleIcon from '../../assets/images/GoogleIcon.svg'

const LoginPage = () => {
    return (
        <div className="login-page">
            <form className="login-container">
                <img className="speaksail-logo" loading="eager" alt="" src={Logo} />

                <button className="frame-email-pass-wrapper">
                    <div className="frame-email-pass">
                        <div className="frame-device-google">
                            <img className="googleIcon" alt="" src={GoogleIcon} />
                        </div>
                        <div className="frame-login-with-google">
                            <div className="login-with-google">Login with Google</div>
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
                                <input className="email-address" placeholder="Email Address" type="text" />
                            </div>

                            <div className="email-password-frame1">
                                <input className="password" placeholder="Password" type="text" />
                            </div>
                        </div>

                        <button className="text-password">
                            <div className="login">Login</div>
                        </button>
                    </div>

                    
                </div>
            </form>
            
           
        </div>

    );

};

export default LoginPage;