import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Flashcards from './pages/Flashcards';
import Grammar from './pages/Grammar';
import Games from './pages/Games';
import Songs from './pages/Songs';
import Videos from './pages/Videos';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fiszki" element={<Flashcards />} />
          <Route path="/gramatyka" element={<Grammar />} />
          <Route path="/gry" element={<Games />} />
          <Route path="/piosenki" element={<Songs />} />
          <Route path="/wideo" element={<Videos />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
