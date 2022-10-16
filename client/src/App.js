import { Routes, Route, HashRouter } from 'react-router-dom';
import WelcomePage from "./pages/WelcomePage";
import MainCharacterPage from './pages/MainCharacterPage';
import ChooseSkill from "./pages/ChooseSkill";
import Profile from './components/Profile';
import LoginPage from './pages/LoginPage';
import StrengthPath from "./pages/StrengthPath";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path='/' element={<WelcomePage />} />
          <Route path='/me' element={<MainCharacterPage />} />
          <Route path='/choose' element={<ChooseSkill />} />
          <Route path='/strength' element={<StrengthPath />} />
          <Route path='/prof' element={<Profile />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/404' element={<NotFoundPage />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
