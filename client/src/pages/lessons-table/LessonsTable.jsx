import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Table from '../../components/table/Table';
import { useParams } from 'react-router-dom';

const LessonsTable = () => {
  const { lessonType } = useParams();
  const [name, setNameLesson] = useState();
  // const studentID = '011193001';
  const [lessonData, setLessonData] = useState([]);
  const [url, setUrl] = useState('');
 

  useEffect(() => {

    const fetchData = async () => {
      try {
        let apiUrl = '';
        if (lessonType === "comprehension" || lessonType === "storyboarding") {
          apiUrl = `http://localhost:4000/lessons/reading/${lessonType}`;
        } else if (lessonType === "sentence-dictation" || lessonType === "qa") {
          apiUrl = `http://localhost:4000/lessons/listening/${lessonType}`;
        }
        else if (lessonType === "storytelling" || lessonType === "conversation-exchange" ) {
          apiUrl = `http://localhost:4000/lessons/speaking/${lessonType}`;
        }
        if (apiUrl === '') {
          apiUrl = `http://localhost:4000/lessons/writing/${lessonType}`;
        }
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setLessonData(data.lessons);
        setNameLesson(data.name);
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [lessonType]);

  if (!lessonType) {
    return <div>No lesson type provided!</div>;
  }
  // const { lessons, name } = lessonData;
  // console.log(lessons, name)

  return (
    <div>
      <Navbar />
        <Table data={lessonData} lesson_type={name} />
      <Footer />
    </div>
  );
};

export default LessonsTable;
