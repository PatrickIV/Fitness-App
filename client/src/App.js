import { Routes, Route, HashRouter } from 'react-router-dom';
import WelcomePage from "./pages/WelcomePage";
import MainCharacterPage from './pages/MainCharacterPage';

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path='/' element={<WelcomePage />} />
          <Route path='/me' element={<MainCharacterPage />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
