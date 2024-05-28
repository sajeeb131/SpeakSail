import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './LoginPage.css';
// import axios from 'axios'
import Logo from '../../assets/images/LogoWhite.png';
import LoginImage from '../../assets/images/login.png';
import GoogleIcon from '../../assets/images/GoogleIcon.svg';

const LoginPage = () => {
    const {user_type} =useParams()
    console.log(user_type)
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [userID, setUserID] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        try {
          setIsLoading(true); // Set a loading state (optional)
            const user = {email,password, userID, name}
            const response = await fetch(`http://localhost:4000/${user_type}/login`, {
            method:'POST',
            body: JSON.stringify(user),
            headers:{
              'Content-Type': 'application/json'
            }
          })
          if (response.status === 200) {
            const data = await response.json();
            console.log('Login successful:', data);
            localStorage.setItem('user', data.userID);
            localStorage.setItem('user_type', user_type);
            if(user_type=='student'){
                navigate('/home');
            }else{
                navigate('/teachers/dashboard');
            }
            
          } else {
            const errorData = await response.json();
            console.error('Login failed:', errorData.error);
            setErrorMessage(errorData.error || 'Login failed'); // More specific error message
          }
        } catch (error) {
          console.error('Error during login:', error);
          setErrorMessage('An error occurred. Please try again later.'); // Generic error message for now
        } finally {
          setIsLoading(false); // Clear loading state (optional)
        }
      };
      


    return (
        <div className="login-page">
            <form className="login-container" onSubmit={handleSubmit}>
                <img className="speaksail-logo" loading="eager" alt="" src={Logo} />

                

                <div className="o-r-frame">
                    <div className="or-">-OR-</div>
                </div>

                <div className="credentials-container">
                    <div className="frame-email-address">
                        <div className="frame-password">
                            <div className="email-password-frame">
                                <input
                                    className="email-address"
                                    placeholder="Email Address"
                                    type="text"
                                    value={email}
                                    onChange={handleEmailChange}
                                />
                            </div>

                            <div className="email-password-frame1">
                                <input
                                    className="password"
                                    placeholder="Password"
                                    type="password"
                                    value={password}
                                    onChange={handlePasswordChange}
                                />
                            </div>
                        </div>

                        <button className="text-password" type="submit">
                            <div className="login">Login</div>
                        </button>
                    </div>
                    
                </div>
            </form>
            
            <img className="loginImage" loading="eager" alt="" src={LoginImage} />
        </div>
    );
};

export default LoginPage;
