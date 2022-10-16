import { Routes, Route, HashRouter } from 'react-router-dom';
import WelcomePage from "./pages/WelcomePage";
import MainCharacterPage from './pages/MainCharacterPage';
import ChooseSkill from "./pages/ChooseSkill";
import Profile from './components/Profile';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path='/' element={<WelcomePage />} />
          <Route path='/me' element={<MainCharacterPage />} />
          <Route path='/choose' element={<ChooseSkill />} />
          <Route path='/prof' element={<Profile />} />
          <Route path='/login' element={<LoginPage />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
