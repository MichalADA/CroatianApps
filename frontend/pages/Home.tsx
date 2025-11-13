import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const modules = [
    {
      title: 'Fiszki',
      description: 'Ucz się słówek z pomocą interaktywnych fiszek',
      icon: '📚',
      path: '/fiszki',
      color: 'bg-blue-100 hover:bg-blue-200',
    },
    {
      title: 'Gramatyka',
      description: 'Poznaj podstawy gramatyki chorwackiej',
      icon: '📖',
      path: '/gramatyka',
      color: 'bg-green-100 hover:bg-green-200',
    },
    {
      title: 'Gry',
      description: 'Ćwicz słownictwo poprzez zabawę',
      icon: '🎮',
      path: '/gry',
      color: 'bg-purple-100 hover:bg-purple-200',
    },
    {
      title: 'Piosenki',
      description: 'Ucz się przez chorwackie piosenki',
      icon: '🎵',
      path: '/piosenki',
      color: 'bg-pink-100 hover:bg-pink-200',
    },
    {
      title: 'Wideo',
      description: 'Oglądaj lekcje wideo dla wszystkich poziomów',
      icon: '🎬',
      path: '/wideo',
      color: 'bg-orange-100 hover:bg-orange-200',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-12">
        {/* Sekcja powitalna */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Witaj w nauce języka chorwackiego! 🇭🇷
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Rozpocznij swoją przygodę z językiem chorwackim. Nauka przez fiszki, 
            gramatykę, gry, piosenki i wideo - wszystko w jednym miejscu!
          </p>
        </div>

        {/* Karty modułów */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {modules.map((module) => (
            <Link
              key={module.path}
              to={module.path}
              className={`${module.color} rounded-xl shadow-lg p-8 transition transform hover:scale-105 hover:shadow-xl`}
            >
              <div className="text-6xl mb-4 text-center">{module.icon}</div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3 text-center">
                {module.title}
              </h2>
              <p className="text-gray-700 text-center">{module.description}</p>
            </Link>
          ))}
        </div>

        {/* Dodatkowa informacja */}
        <div className="mt-16 text-center">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 max-w-3xl mx-auto rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              💡 Wskazówka
            </h3>
            <p className="text-gray-700">
              Regularność jest kluczem do sukcesu! Poświęć 15-20 minut dziennie 
              na naukę, aby szybko zobaczyć postępy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
