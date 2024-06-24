import React, { useEffect, useState } from 'react'
import './report.css'
import Navbar from '../../components/Navbar'
import FetchProgress from '../../components/FetchProgress'

const Report = () => {
    const userID = localStorage.getItem('user');
    const [progressData, setProgressData] = useState(null);
    const [averageMarks, setAverageMarks] = useState(null);
    const [marks, setMarks] = useState({
        marks_sentence_dictation: 0,
        marks_question_answer: 0,
        marks_storytelling: 0,
        marks_conversation_exchange: 0,
        marks_picture_description: 0,
        marks_comprehension: 0,
    });

    const [SD_total, setSDlength] = useState();
    const [QA_total, setQAlength] = useState();
    const [ST_total, setSTlength] = useState();
    const [PD_total, setPDlength] = useState();
    const [CM_total, setCMLength] = useState();
    const [CE_total, setCELength] = useState();

    const [user, setUser] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userResponse = await fetch(`http://localhost:4000/profile/${userID}`);
                if (!userResponse.ok) {
                    throw new Error('Failed to fetch user data');
                }
                const userData = await userResponse.json();
                setUser(userData);

                const sentenceDictationUrl = 'http://localhost:4000/lessons/listening/sentence-dictation';
                const listeningQAUrl = 'http://localhost:4000/lessons/listening/qa';
                const storytellingUrl = 'http://localhost:4000/lessons/speaking/storytelling';
                const conversationUrl = 'http://localhost:4000/lessons/speaking/conversation-exchange';
                const pictureDescriptionUrl = 'http://localhost:4000/lessons/writing/picturedescription';
                const comprehensionUrl = 'http://localhost:4000/lessons/reading/comprehension';

                const [SDdata, QAdata, STdata, CEdata, PDdata, CMdata] = await Promise.all([
                    fetch(sentenceDictationUrl).then(res => res.json()),
                    fetch(listeningQAUrl).then(res => res.json()),
                    fetch(storytellingUrl).then(res => res.json()),
                    fetch(conversationUrl).then(res => res.json()),
                    fetch(pictureDescriptionUrl).then(res => res.json()),
                    fetch(comprehensionUrl).then(res => res.json())
                ]);

                setSDlength(SDdata.lessons.length);
                setQAlength(QAdata.lessons.length);
                setSTlength(STdata.lessons.length);
                setCELength(CEdata.lessons.length);
                setPDlength(PDdata.lessons.length);
                setCMLength(CMdata.lessons.length);

                const marksResponse = await fetch(`http://localhost:4000/home/get-marks/${userID}`);
                if (!marksResponse.ok) {
                    throw new Error('Failed to fetch marks data');
                }
                const marksData = await marksResponse.json();
                setMarks(marksData);
                setAverageMarks(Math.floor((marks.marks_conversation_exchange+marks.marks_question_answer+
                    marks.marks_comprehension+marks.marks_picture_description+marks.marks_sentence_dictation
                    +marks.marks_storytelling)/6)
                )

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [userID]);

    const [checkedState, setCheckedState] = useState({
        excellent: false,
        veryGood: false,
        good: false,
        needsImprovement: false
    });

    // Effect to update the checked state based on averageMarks
    useEffect(() => {
        if (averageMarks > 90) {
            setCheckedState({ excellent: true, veryGood: false, good: false, needsImprovement: false });
        } else if (averageMarks > 75) {
            setCheckedState({ excellent: false, veryGood: true, good: false, needsImprovement: false });
        } else if (averageMarks > 60) {
            setCheckedState({ excellent: false, veryGood: false, good: true, needsImprovement: false });
        } else {
            setCheckedState({ excellent: false, veryGood: false, good: false, needsImprovement: true });
        }
    }, [averageMarks]);
    
  return (
    <div>
        <Navbar/>
        <div className='container-report'>
        
        <div className='completions-header'>
            <h1>Performance <span>Report</span></h1>
        </div>

        <div className='report-table-container'>
            <table>
                <thead>
                    <tr>
                        <th className='th-sl'>SL No.</th>
                        <th className='th-at'>Activity Title</th>
                        <th className='th-cat'>Category</th>
                        <th className='th-ct'>Completed Task</th>
                        <th className='th-om'>Obtained Marks</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='row-a'>
                        <td className='th-sl'>1</td>
                        <td className='th-at'>Sentence Dictation</td>
                        <td className='th-cat'>Listening Skill</td>
                        <td className='th-ct'>{user.sentence_dictation}/{SD_total}</td>
                        <td className='th-om'>{Math.floor(marks.marks_sentence_dictation/SD_total)}</td>
                    </tr>
                    
                    <tr className='row-b'>
                        <td className='th-sl'>2</td>
                        <td className='th-at'>Question and Answer</td>
                        <td className='th-cat'>Listening Skill</td>
                        <td className='th-ct'>{user.question_answer}/{QA_total}</td>
                        <td className='th-om'>{Math.floor(marks.marks_question_answer/QA_total)}</td>
                    </tr>
                    <tr className='row-a'>
                        <td className='th-sl'>3</td>
                        <td className='th-at'>Storytelling</td>
                        <td className='th-cat'>Speaking Skill</td>
                        <td className='th-ct'>{user.storytelling}/{ST_total}</td>
                        <td className='th-om'>{Math.floor(marks.marks_storytelling/ST_total)}</td>
                    </tr>
                    <tr className='row-b'>
                        <td className='th-sl'>4</td>
                        <td className='th-at'>Conversation Exchange</td>
                        <td className='th-cat'>Speaking Skill</td>
                        <td className='th-ct'>{user.conversation_exchange}/{CE_total}</td>
                        <td className='th-om'>{Math.floor(marks.marks_conversation_exchange/CE_total)}</td>
                    </tr>
                    <tr className='row-a'>
                        <td className='th-sl'>5</td>
                        <td className='th-at'>Comprehension</td>
                        <td className='th-cat'>Reading Skill</td>
                        <td className='th-ct'>{user.comprehension}/{CM_total}</td>
                        <td className='th-om'>{Math.floor(marks.marks_comprehension/CM_total)}</td>
                    </tr>
                    <tr className='row-b'>
                        <td className='th-sl'>6</td>
                        <td className='th-at'>Picture Description</td>
                        <td className='th-cat'>Writing Skill</td>
                        <td className='th-ct'>{user.picture_description}/{PD_total}</td>
                        <td className='th-om'>{Math.floor(marks.marks_picture_description/PD_total)}</td>
                        {console.log(marks)}
                    </tr>
                </tbody>
            </table>
            <table className='feedback-table'>
                <tbody>
                    <tr>
                        <td className='row-first'>* Has improved Performance?</td>
                        <td><input type="checkbox" checked disabled /> Yes</td>
                        <td><input type="checkbox" disabled /> No</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className='row-first'>* Performance Quality?</td>
                        <td><input type="checkbox" checked={checkedState.excellent} disabled /> Excellent</td>
                        <td><input type="checkbox" checked={checkedState.veryGood} disabled /> Very Good</td>
                        <td><input type="checkbox" checked={checkedState.good} disabled /> Good</td>
                        <td><input type="checkbox" checked={checkedState.needsImprovement} disabled /> Needs Improvement</td>
                    </tr>
                </tbody>
            </table>
            <div className='teachers-comment'>
                <span>Teacher's comment: </span>
                <p>No comment yet.</p>
            </div>
        </div>
      
    </div>
    </div>
    
  )
}

export default Report
