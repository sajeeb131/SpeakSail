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
            <Route path='/lessons/listening-main' element={<ListeningMain/>}/>
          </Routes>
          <Routes>
            <Route path='/lessons/writing-main' element={<WritingMain/>}/>
          </Routes>
          <Routes>
            <Route path='/lessons/reading-main' element={<ReadingMain/>}/>
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
        </BrowserRouter>
    </div>
  );
}

export default App;
