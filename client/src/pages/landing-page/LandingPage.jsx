import React from 'react'
import {Link, useNavigate } from 'react-router-dom'
import InitialNav from '../../components/InitialNav'
import Footer from '../../components/Footer'

const LandingPage = () => {
  return (
    <div>
        <InitialNav/>
        <h1>LandingPage</h1>
        <Footer/>
    </div>
  )
}

export default LandingPage