import React from 'react'
import ListeningMaterials from './ListeningMaterials'
import './materialsStyle.css'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { useParams } from 'react-router-dom'


const Materials = () => {
  const {material_type} = useParams()
  
  return (
    <div >
        <Navbar/>
        <div className='container-materials'>
            <div className='materials-header'>
                <h1>{material_type} <span style={{ color: 'blue' }}>Materials</span></h1>
            </div>
            <ListeningMaterials material_type= {material_type}/>
        </div>
        <Footer/>
    </div>
  )
}

export default Materials
