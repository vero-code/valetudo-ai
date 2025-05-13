import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import AskPage from './components/AskPage';
import * as Tooltip from '@radix-ui/react-tooltip';

function App() {
  return (
    <Tooltip.Provider delayDuration={0} skipDelayDuration={0}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/ask" element={<AskPage />} />
        </Routes>
      </Router>
    </Tooltip.Provider>
  )
}

export default App
