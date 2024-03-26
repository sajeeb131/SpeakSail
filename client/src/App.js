import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//Pages and Components
import LandingPage from './pages/landing-page/LandingPage';
import HomePage from './pages/home/HomePage'
import ListeningMain from './pages/lessons/ListeningMain';
import WritingMain from './pages/lessons/WritingMain';
import ReadingMain from './pages/lessons/ReadingMain';
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

function App() {
  return (
    <div className="App">       
        <BrowserRouter>
          {/* Error pages */}
          <Routes>
              <Route path='/503' element={<Status503/>}/>
          </Routes>

          {/* landing page route */}
          <Routes>
            <Route path='/' element={<LandingPage/>}/>
          </Routes>

          {/* homepage route */}
          <Routes>
            <Route path='/home' element={<HomePage/>}/>
          </Routes>

          {/* lessons main routes */}
          <Routes>
            <Route path='/lessons/listening' element={<ListeningMain/>}/>
          </Routes>
          <Routes>
            <Route path='/lessons/writing' element={<WritingMain/>}/>
          </Routes>
          <Routes>
            <Route path='/lessons/reading' element={<ReadingMain/>}/>
          </Routes>
          <Routes>
            <Route path='/profile/ProfilePage' element={<ProfilePage/>}/>
          </Routes>
          
            {/* Teachers route */}
            <Routes>
            <Route path='/teachers/dashboard' element={<Dashboard/>}/>
          </Routes>

          {/* Login route */}
          <Routes>
            <Route path='/login' element={<LoginPage/>}/>
          </Routes>
          <Routes>
            <Route path='/signup' element={<SignUpPage/>}/>
          </Routes>

          {/* lessons pages */}
          <Routes>
            <Route path='/lessons/listening/sentence-dictation' element={<SentenceDictation/>}/>
          </Routes>
          <Routes>
            <Route path='/lessons/listening/QA' element={<QuestionAnswer/>}/>
          </Routes>
          <Routes>
            <Route path='/lessons/reading/Comprehension' element={<Comprehension/>}/>
          </Routes>
          <Routes>
              <Route path='/lessons/speaking/storytelling' element={<Storytelling/>}/>
          </Routes>
          <Routes>
            <Route path='/lessons/PictureDescription' element={<PictureDescription/>}/>
          </Routes>

          {/* Extra features */}
          <Routes>
            <Route path='/vocab-treasure/VocabTreasure' element={<VocabTreasure/>}/>
          </Routes>
          <Routes>
            <Route path='/daily-mission/DailyMission' element={<DailyMission/>}/>
          </Routes>

        </BrowserRouter>
    </div>
  );
}

export default App;
