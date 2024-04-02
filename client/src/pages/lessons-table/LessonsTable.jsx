import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Table from '../../components/table/Table';
import { useParams } from 'react-router-dom';

const LessonsTable = () => {
  const { lessonType } = useParams();
  const studentID = '011193001';
  const [lessonData, setLessonData] = useState([]);

  useEffect(() => {
    //an asynchronous function to fetch data from the database
    const fetchData = async () => {
      try {
        // Perform the fetch operation
        const response = await fetch(`http://localhost:4000/lessons/listening/${lessonType}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        // Extract JSON data from the response
        const data = await response.json();
        // Update state with the fetched data
        setLessonData(data);
        console.log(data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, [lessonType]); // Trigger fetch operation whenever lessonType changes

  if (!lessonType) {
    return <div>No lesson type provided!</div>; // Handle missing parameter
  }

  return (
    <div>
      <Navbar />
      <Table data={lessonData} lesson_type={lessonType} />
      <Footer />
    </div>
  );
};

export default LessonsTable;
