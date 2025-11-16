import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Flashcards from './pages/Flashcards';
import Grammar from './pages/Grammar';
import Games from './pages/Games';
import Songs from './pages/Songs';
import Videos from './pages/Videos';
import Login from './pages/Login';

// 🛡️ Protected Route - Tylko zalogowani mogą wejść
interface ProtectedRouteProps {
  element: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
  const { isLoggedIn, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">⏳ Ładowanie...</p>
        </div>
      </div>
    );
  }

  return isLoggedIn ? <>{element}</> : <Navigate to="/login" replace />;
};

// Main App
const AppContent: React.FC = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      {isLoggedIn && <NavBar />}
      <Routes>
        {/* 🔓 Public Route */}
        <Route path="/login" element={<Login />} />

        {/* 🛡️ Protected Routes */}
        <Route path="/" element={<ProtectedRoute element={<Home />} />} />
        <Route path="/fiszki" element={<ProtectedRoute element={<Flashcards />} />} />
        <Route path="/gramatyka" element={<ProtectedRoute element={<Grammar />} />} />
        <Route path="/gry" element={<ProtectedRoute element={<Games />} />} />
        <Route path="/piosenki" element={<ProtectedRoute element={<Songs />} />} />
        <Route path="/wideo" element={<ProtectedRoute element={<Videos />} />} />

        {/* Catch all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Router>
  );
};

export default App;