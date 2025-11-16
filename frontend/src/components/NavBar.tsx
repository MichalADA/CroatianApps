import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const NavBar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const navLinks = [
    { path: '/', label: 'Strona główna' },
    { path: '/fiszki', label: 'Fiszki' },
    { path: '/gramatyka', label: 'Gramatyka' },
    { path: '/gry', label: 'Gry' },
    { path: '/piosenki', label: 'Piosenki' },
    { path: '/wideo', label: 'Wideo' },
  ];

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold hover:text-blue-200 transition">
            🇭🇷 Nauka Chorwackiego
          </Link>

          {/* Nav Links */}
          <div className="flex flex-wrap gap-2 md:gap-6 mt-2 md:mt-0">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md transition ${
                  location.pathname === link.path
                    ? 'bg-blue-800 font-semibold'
                    : 'hover:bg-blue-700'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* User Menu */}
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            {user && (
              <div className="flex items-center gap-3">
                <div className="text-sm">
                  <p className="font-semibold">{user.name || user.email}</p>
                  <p className="text-blue-200 text-xs">{user.email}</p>
                </div>
                <button
                  onClick={handleLogout}
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition"
                >
                  Wyloguj
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
```

---

# 🔐 CO TO TOKEN?
```
📱 LOGIN:
User: test@example.com
Pass: password123
           ↓
🚀 Backend zwraca:
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": { "id": 1, "email": "test@...", "name": "Test" }
}
           ↓
💾 Frontend zapisuje:
localStorage.setItem('auth_token', token)
           ↓
🔒 Przy każdym żądaniu:
fetch(url, {
  headers: {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
  }
})
           ↓
✅ Backend weryfikuje token i pozwala dostęp