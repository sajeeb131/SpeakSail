import React, { useEffect, useState } from 'react';
import { FiChevronDown, FiChevronRight, FiVolume2, FiFile } from 'react-icons/fi';

const ListeningMaterials = ({ material_type }) => {
  const type = material_type.toLowerCase();
  const [materials, setMaterials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [expandedMaterialId, setExpandedMaterialId] = useState(null);

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

  const handleBoxClick = (id) => {
    setExpandedMaterialId((prevId) => (prevId === id ? null : id));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`http://localhost:4000/materials/${type}`);
        const data = await response.json();
        setMaterials(data);
      } catch (err) {
        console.log('Error fetching data', err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [type]);

  const downloadFile = async (url, filename) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = filename;
      link.click();
      URL.revokeObjectURL(link.href); // Clean up the object URL after the download
    } catch (error) {
      console.error('Error downloading the file:', error);
    }
  };

  return (
    <div>
      {isLoading && <div>...Loading</div>}
      {!isLoading && (
        <div>
          <div className='material-box-container'>
            {materials.slice(start, finish).map((material) => (
              <li key={material.activity_no} className='material-box' onClick={() => handleBoxClick(material.activity_no)}>
                <div className='material-listItem'>
                  {expandedMaterialId === material.activity_no ? (<FiChevronDown size={40} />) : (<FiChevronRight size={40} />)}
                  <span>Activity {material.activity_no}</span>
                </div>
                {expandedMaterialId === material.activity_no && (material_type === 'Writing' ||
                  material_type === 'Reading' || material_type === 'Speaking') && (
                    <div className='materials-drop'>
                      <div className='material'>
                        <FiFile size={20} />
                        <span onClick={() => downloadFile(material.pdfPath, `${material.name} - Worksheet.pdf`)}>{material.name} - Worksheet</span>
                      </div>
                    </div>
                  )
                }
                {expandedMaterialId === material.activity_no && material_type === 'Listening' && (
                  <div className='materials-drop'>
                    <div className='material'>
                      <FiVolume2 size={20} />
                      <span onClick={() => downloadFile(material.audioFilePath, `${material.name} - Audio.mp3`)}>{material.name} - Audio</span>
                    </div>
                    <div className='material'>
                      <FiFile size={20} />
                      <span onClick={() => downloadFile(material.pdfPath, `${material.name} - Worksheet.pdf`)}>{material.name} - Worksheet</span>
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
      )}
    </div>
  );
};

export default ListeningMaterials;
