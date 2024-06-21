import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// components
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
import TeachersMainPage from './pages/teachers/Teachers-main'
import Materials from './pages/materials-download/Materials'
import Notifications from './components/notification/Notifications';
import Completions from './pages/completions/Completions'
import Guide from './pages/guide/Guide';
import SpecialActivity from './pages/guide/SpecialActivity';
import DownloadableMaterial from './pages/guide/DownloadableMaterial';
import ListeningGuide from './pages/guide/ListeningGuide';
import SpeakingGuide from './pages/guide/SpeakingGuide';
import WritingGuide from './pages/guide/WritingGuide';
import ReadingGuide from './pages/guide/ReadingGuide';
import Status403 from './components/auth/Status403';
import PrivateRoute from './components/auth/PrivateRoute';
import TeacherRoute from './components/auth/TeacherRoute';
import ConversationExchange from './pages/speaking/ConversationExchange';
import Report from './pages/performance-report/Report'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Error pages */}
          <Route path='/503' element={<Status503 />} />
          <Route path='/403' element={<Status403 />} />

          {/* Landing page route */}
          <Route path='/' element={<LandingPage />} />

          {/* Home page route */}
          <Route path='/home' element={<PrivateRoute element={<HomePage />} />} />

          {/* Profile page route */}
          <Route path='/profile' element={<PrivateRoute element={<ProfilePage />} />} />

          {/* Authentication routes */}
          <Route path='/login/:user_type' element={<LoginPage />} />
          <Route path='/signup' element={<SignUpPage />} />
          
          {/* Materials download route */}
          <Route path='/materials/:material_type' element={<PrivateRoute element={<Materials />} />} />

          {/* Lessons main routes */}
          <Route path='/lessons/listening' element={<PrivateRoute element={<ListeningMain />} />} />
          <Route path='/lessons/writing' element={<PrivateRoute element={<WritingMain />} />} />
          <Route path='/lessons/reading' element={<PrivateRoute element={<ReadingMain />} />} />
          <Route path='/lessons/speaking' element={<PrivateRoute element={<SpeakingMain />} />} />
          
          
          {/* Lessons pages */}
          <Route path='/lessons/listening/sentence-dictation/:lessonNumber' element={<PrivateRoute element={<SentenceDictation />} />} />
          <Route path='/lessons/listening/QA/:lessonNumber' element={<PrivateRoute element={<QuestionAnswer />} />} />
          <Route path='/lessons/reading/Comprehension/:lessonNumber' element={<PrivateRoute element={<Comprehension />} />} />
          <Route path='/lessons/speaking/storytelling/:lessonNumber' element={<PrivateRoute element={<Storytelling />} />} />
          <Route path='/lessons/speaking/conversation-exchange/:lessonNumber' element={<PrivateRoute element={<ConversationExchange />} />} />
          <Route path='/lessons/writing/PictureDescription/:lessonNumber' element={<PrivateRoute element={<PictureDescription />} />} />
          
          {/* Extra features */}
          <Route path='/vocab-treasure' element={<PrivateRoute element={<VocabTreasure />} />} />
          <Route path='/daily-mission' element={<PrivateRoute element={<DailyMission />} />} />

          {/* Completions route*/}
          <Route path='/completions' element={<PrivateRoute element={<Completions />} />} />
          
          {/* Guide route */}
          <Route path='/guide' element={<PrivateRoute element={<Guide />} />} />
          <Route path='/guide/SpecialActivity' element={<PrivateRoute element={<SpecialActivity />} />} />
          <Route path='/guide/DownloadableMaterial' element={<PrivateRoute element={<DownloadableMaterial />} />} />
          <Route path='/guide/ListeningGuide' element={<PrivateRoute element={<ListeningGuide />} />} />
          <Route path='/guide/SpeakingGuide' element={<PrivateRoute element={<SpeakingGuide />} />} />
          <Route path='/guide/WritingGuide' element={<PrivateRoute element={<WritingGuide />} />} />
          <Route path='/guide/ReadingGuide' element={<PrivateRoute element={<ReadingGuide />} />} />

          {/* Lessons table */}
          <Route path='/lessons-table/:lessonType' element={<PrivateRoute element={<LessonsTable />} />} />
          
          {/* Notifications route */}
          <Route path='/notifications' element={<PrivateRoute element={<Notifications />} />} />

          <Route path='/report' element={<PrivateRoute element={<Report/>}/>}/>

          {/* Teachers route */}
          <Route path='/teachers/:type' element={<TeacherRoute element={<TeachersMainPage />} />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
