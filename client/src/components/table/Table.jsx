import React, { useState } from 'react';
import './table.css'
const Table = ({ student_id, data, lesson_type}) => {
  
    
  //checkbox logic
  const [checkedItems, setCheckedItems] = useState([]);
  
  
  //pagination logic
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4; // Number of rows to display per page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const displayedData = data.slice((currentPage - 1) * pageSize, currentPage * pageSize);


  //checkbox icons
  const CheckedIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
    <path d="M23.625 30H7.37498C3.57975 29.9958 0.50416 26.9203 0.5 23.125V6.87498C0.50416 3.07975 3.57975 0.00416016 7.37498 0H23.625C27.4203 0.00416016 30.4958 3.07975 30.5 6.87498V23.125C30.4958 26.9203 27.4203 29.9958 23.625 30ZM7.37498 3.75C5.6491 3.75 4.25 5.1491 4.25 6.87498V23.125C4.25 24.8509 5.6491 26.25 7.37498 26.25H23.625C25.3509 26.25 26.75 24.8509 26.75 23.125V6.87498C26.75 5.1491 25.3509 3.75 23.625 3.75H7.37498Z" fill="#00A805"/>
    <path d="M13.1334 22.3878C12.3446 22.3883 11.5884 22.0732 11.0334 21.5128L7.29959 17.7853C6.56711 17.0533 6.56676 15.8661 7.29877 15.1336C7.29907 15.1333 7.29936 15.133 7.29959 15.1327C8.03178 14.4008 9.21866 14.4008 9.95084 15.1327L13.1334 18.314L22.1484 9.29897C22.8806 8.56701 24.0674 8.56701 24.7996 9.29897C25.5321 10.031 25.5324 11.2181 24.8004 11.9506C24.8001 11.9509 24.7998 11.9512 24.7996 11.9514L15.2321 21.519C14.6765 22.0771 13.9209 22.3899 13.1334 22.3878Z" fill="#00A805"/>
    </svg>
  );
  
  const UncheckedIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
    <path d="M23.625 30H7.37498C3.57975 29.9958 0.50416 26.9203 0.5 23.125V6.87498C0.50416 3.07975 3.57975 0.00416016 7.37498 0H23.625C27.4203 0.00416016 30.4958 3.07975 30.5 6.87498V23.125C30.4958 26.9203 27.4203 29.9958 23.625 30ZM7.37498 3.75C5.6491 3.75 4.25 5.1491 4.25 6.87498V23.125C4.25 24.8509 5.6491 26.25 7.37498 26.25H23.625C25.3509 26.25 26.75 24.8509 26.75 23.125V6.87498C26.75 5.1491 25.3509 3.75 23.625 3.75H7.37498Z" fill="#A80000"/>
    </svg>
  );
  return (
    
    <div className='table-div'>
      <div className='table-container'>
        <h1>{lesson_type}: </h1>
        <table className='table-main'>
        <thead>
          <tr>
            <th className='table-lside'>SI no.</th>
            <th className='table-mid'>Exercise</th>
            <th className='table-rside'>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className='table-lside'>{index + 1 + (currentPage - 1) * pageSize}</td>
              <td className='table-mid'>{item.lessonNumber}</td>
              <td className='table-rside'>
                {item.status ? <CheckedIcon /> : <UncheckedIcon />}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      </div>
      
      <div className="pagination">
        {Math.ceil(data.length / pageSize) > 1 && (
          <>
            <button disabled={currentPage === 1} onClick={() => handlePageChange(1)}>
              First
            </button>
            <button disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)}>
              Prev
            </button>
            {Array.from({ length: Math.ceil(data.length / pageSize) }, (_, i) => (
              <button key={i + 1} className={currentPage === i + 1 ? 'active' : ''} onClick={() => handlePageChange(i + 1)}>
                {i + 1}
              </button>
            ))}
            <button disabled={currentPage === Math.ceil(data.length / pageSize)} onClick={() => handlePageChange(currentPage + 1)}>
              Next
            </button>
            <button disabled={currentPage === Math.ceil(data.length / pageSize)} onClick={() => handlePageChange(Math.ceil(data.length / pageSize))}>
              Last
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Table;

