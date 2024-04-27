import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import your components
import LandingPage from './pages/landing-page/LandingPage';
import HomePage from './pages/home/HomePage';
import ListeningMain from './pages/lessons/ListeningMain';
import WritingMain from './pages/lessons/WritingMain';
import ReadingMain from './pages/lessons/ReadingMain';
import SpeakingMain from './pages/lessons/speakingMain'
import Status503 from './pages/Status/Status503';
import Dashboard from './pages/teachers/dashboard/Dashboard';
import ProfilePage from './pages/profile/ProfilePage';
import LoginPage from './pages/login/LoginPage';
import SignUpPage from './pages/signup/SignUpPage';
import SentenceDictation from './pages/listening/SentenceDictation';
import QuestionAnswer from './pages/listening/QuestionAnswer';
import Comprehension from './pages/reading/Comprehension';
import Storytelling from './pages/speaking/Storytelling';
import VocabTreasure from './pages/vocab-treasure/VocabTreasure';
import DailyMission from './pages/daily-mission/DailyMission';
import PictureDescription from './pages/writing/PictureDescription';
import LessonsTable from './pages/lessons-table/LessonsTable';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Error pages */}
          <Route path='/503' element={<Status503 />} />

          {/* Landing page route */}
          <Route path='/' element={<LandingPage />} />

          {/* Home page route */}
          <Route path='/home' element={<HomePage />} />

          {/* Lessons main routes */}
          <Route path='/lessons/listening' element={<ListeningMain />} />
          <Route path='/lessons/writing' element={<WritingMain />} />
          <Route path='/lessons/reading' element={<ReadingMain />} />
          <Route path='/lessons/speaking' element={<SpeakingMain />} />
          
          {/* Profile page route */}
          <Route path='/profile' element={<ProfilePage />} />

          {/* Teachers route */}
          <Route path='/teachers/dashboard' element={<Dashboard />} />

          {/* Authentication routes */}
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignUpPage />} />

          {/* Lessons pages */}
          <Route path='/lessons/listening/sentence-dictation/:lessonNumber' element={<SentenceDictation />} />
          <Route path='/lessons/listening/QA/:lessonNumber' element={<QuestionAnswer />} />
          <Route path='/lessons/reading/Comprehension/:lessonNumber' element={<Comprehension />} />
          <Route path='/lessons/speaking/storytelling/:lessonNumber' element={<Storytelling />} />
          <Route path='/lessons/writing/PictureDescription/:lessonNumber' element={<PictureDescription />} />
          
          {/* Extra features */}
          <Route path='/vocab-treasure' element={<VocabTreasure />} />
          <Route path='/daily-mission' element={<DailyMission />} />

          {/* Lessons table */}
          <Route path='/lessons-table/:lessonType' element={<LessonsTable />} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
