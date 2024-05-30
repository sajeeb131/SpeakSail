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

//Dashboard Components
import TeachersMainPage from './pages/teachers/Teachers-main'

import Materials from './pages/materials-download/Materials'
import Notifications from './components/notification/Notifications';
import Completions from './pages/completions/Completions'
import Guide from './pages/guide/Guide';
import SpecialActivity from './pages/guide/SpecialActivity';
import DownloadableMaterial from './pages/guide/DownloadableMaterial';
import LessonsMain from './pages/guide/LessonsMain';

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

          {/* Profile page route */}
          <Route path='/profile' element={<ProfilePage />} />

          {/* Authentication routes */}
          <Route path='/login/:user_type' element={<LoginPage />} />
          {/* <Route path='/signup' element={<SignUpPage />} /> */}
          
          {/* Materials download route */}
          <Route path='/materials/:material_type' element={<Materials/>} />


          {/* Lessons main routes */}
          <Route path='/lessons/listening' element={<ListeningMain />} />
          <Route path='/lessons/writing' element={<WritingMain />} />
          <Route path='/lessons/reading' element={<ReadingMain />} />
          <Route path='/lessons/speaking' element={<SpeakingMain />} />
          
          

          {/* Teachers route */}
          <Route path='/teachers/:type' element={<TeachersMainPage />} />
        


          {/* Lessons pages */}
          <Route path='/lessons/listening/sentence-dictation/:lessonNumber' element={<SentenceDictation />} />
          <Route path='/lessons/listening/QA/:lessonNumber' element={<QuestionAnswer />} />
          <Route path='/lessons/reading/Comprehension/:lessonNumber' element={<Comprehension />} />
          <Route path='/lessons/speaking/storytelling/:lessonNumber' element={<Storytelling />} />
          <Route path='/lessons/writing/PictureDescription/:lessonNumber' element={<PictureDescription />} />
          
          {/* Extra features */}
          <Route path='/vocab-treasure' element={<VocabTreasure />} />
          <Route path='/daily-mission' element={<DailyMission />} />

          {/* Completions route*/}
          <Route path='/completions' element={<Completions />} />
          
          {/* Guide route */}
          <Route path='/guide' element={<Guide/>} />
          <Route path='/guide/SpecialActivity' element={<SpecialActivity/>} />
          <Route path='/guide.LessonsMain' element={<LessonsMain/>}/>
          <Route path='/guide/DownloadableMaterial' element={<DownloadableMaterial/>} />

          {/* Lessons table */}
          <Route path='/lessons-table/:lessonType' element={<LessonsTable />} />
          
          {/*Notifications route*/}
          <Route path='/notifications' element={<Notifications />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
