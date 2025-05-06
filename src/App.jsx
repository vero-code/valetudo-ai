import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import AskPage from './components/AskPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/ask" element={<AskPage />} />
      </Routes>
    </Router>
  )
}

export default App
