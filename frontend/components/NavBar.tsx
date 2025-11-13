import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar: React.FC = () => {
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Strona główna' },
    { path: '/fiszki', label: 'Fiszki' },
    { path: '/gramatyka', label: 'Gramatyka' },
    { path: '/gry', label: 'Gry' },
    { path: '/piosenki', label: 'Piosenki' },
    { path: '/wideo', label: 'Wideo' },
  ];

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between py-4">
          <Link to="/" className="text-2xl font-bold hover:text-blue-200 transition">
            🇭🇷 Nauka Chorwackiego
          </Link>
          
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
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
