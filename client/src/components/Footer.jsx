import React from 'react'
import Logo from '../assets/images/logo.png'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-content">
      <div className="logo-container">
        <img src={Logo}   />
        <p className="tagline">Setting Sail to Language Mastery</p>
      </div>
    </div>
  </footer>
  )
}

export default Footer