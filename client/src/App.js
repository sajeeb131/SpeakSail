import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//Pages and Components
import LandingPage from './pages/landing-page/LandingPage';
import HomePage from './pages/home/HomePage'
import ListeningMain from './pages/listeningMain/ListeningMain';
import Status503 from './pages/Status/Status503';
import Dashboard from './pages/teachers/dashboard/Dashboard';

function App() {
  return (
    <div className="App">       
        <BrowserRouter>
          {/* Error pages */}
          <Routes>
              <Route path='/503' element={<Status503/>}/>
          </Routes>

          <Routes>
            <Route path='/' element={<LandingPage/>}/>
          </Routes>

          <Routes>
            <Route path='/home' element={<HomePage/>}/>
          </Routes>

          <Routes>
            <Route path='/listening-main' element={<ListeningMain/>}/>
          </Routes>

            {/* Teachers route */}
            <Routes>
            <Route path='/teachers/dashboard' element={<Dashboard/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
