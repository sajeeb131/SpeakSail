import React, { useEffect, useState } from 'react'
import { FiChevronDown } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import { FiVolume2 } from "react-icons/fi";
import { FiFile } from "react-icons/fi";


const ListeningMaterials = () => {
  const materials = [
    {
        id: '1',
        name: 'weather',
        audioUrl: 'path/to/audio.mp3',
        worksheetUrl: 'path/to/worksheet.pdf'
    },
    {
        id: '2',
        name: 'Climate change',
        audioUrl: 'path/to/audio.mp3',
        worksheetUrl: 'path/to/worksheet.pdf'
    },
    {
        id: '3',
        name: 'grammar'
    },
    {
        id: '4',
        name: 'grammar'
    },{
        id: '5',
        name: 'grammar'
    },{
        id: '6',
        name: 'grammar'
    },{
        id: '7',
        name: 'grammar'
    },{
        id: '8',
        name: 'grammar'
    },{
        id: '9',
        name: 'grammar'
    },{
        id: '10',
        name: 'grammar'
    },{
        id: '11',
        name: 'grammar'
    }
    
  ]

  

  const [page, setPage] = useState(1)
  const [activity, setActivity] = useState(1)
  
  const itemsPerPage = 4;
  const start = (page - 1) * itemsPerPage;
  const finish = start + itemsPerPage;

  const handlePageChange = (type) => {
    if (type === 'previous') {
      setPage((prevPage) => Math.max(1, prevPage - 1));
    } else {
      setPage((prevPage) => Math.min(Math.ceil(materials.length / itemsPerPage), prevPage + 1));
    }
  };

  const [expandedMaterialId, setExpandedMaterialId] = useState(null);
  const handleBoxClick = (id) => {
    setExpandedMaterialId((prevId) => (prevId === id ? null : id));

  }

//   useEffect(()=>{
//     const fetchData = async() =>{
//         const response = await response('')
//     }
//   })

  return (
    <div>   
      <div className='material-box-container'>
        {materials.slice(start,finish).map((material)=>(
            <li key={material.id} className='material-box' onClick={()=>handleBoxClick(material.id)}>
                <div className='material-listItem'>
                    {expandedMaterialId === material.id ?  (<FiChevronDown size={40}/>) : (<FiChevronRight size={40}/>)}
                    <span>Activity {material.id}</span>
                </div>
                
                {expandedMaterialId === material.id && (
                   <div className='materials-drop'>
                        <div className='material'>
                            <FiVolume2 size={20}/>
                            <span> {material.name} - {""}</span>
                        </div>
                        <div className='material'>
                            <FiFile size={20}/>
                            <span>{material.name} - {""}</span>
                        </div>
                   </div> 
                )}
            </li>
        ))}

      </div> 
      <div className='material-change-button'>
        {page > 1 && <button onClick={() => handlePageChange('previous')}>Previous</button>}
        {page < Math.ceil(materials.length / itemsPerPage) && (
          <button onClick={() => handlePageChange('next')}>Next</button>
        )}
        </div>  
    </div>
  )
}

export default ListeningMaterials
