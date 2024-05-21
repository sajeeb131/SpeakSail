import React from 'react'
import ListeningMaterials from './ListeningMaterials'
import './materialsStyle.css'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'


const Materials = () => {
  return (
    <div >
        <Navbar/>
        <div className='container-materials'>
            <div className='materials-header'>
                <h1>Listening <span style={{ color: 'blue' }}>Materials</span></h1>
                
            </div>
            <ListeningMaterials/>
        </div>
        <Footer/>
    </div>
  )
}

export default Materials
