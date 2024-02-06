import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//Pages and Components
import LandingPage from './pages/landing-page/LandingPage';
import HomePage from './pages/home/HomePage'

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LandingPage/>}/>
          </Routes>
          <Routes>
            <Route path='/home' element={<HomePage/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
