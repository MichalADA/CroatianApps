import React from 'react';
import { videosData } from '../data/videos';

const Videos: React.FC = () => {
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'początkujący':
        return 'bg-green-100 text-green-800';
      case 'średniozaawansowany':
        return 'bg-yellow-100 text-yellow-800';
      case 'zaawansowany':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getLevelIcon = (level: string) => {
    switch (level) {
      case 'początkujący':
        return '🌱';
      case 'średniozaawansowany':
        return '🌿';
      case 'zaawansowany':
        return '🌳';
      default:
        return '📚';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Nagłówek */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Wideo 🎬</h1>
          <p className="text-gray-600">
            Lekcje wideo dla wszystkich poziomów zaawansowania
          </p>
        </div>

        {/* Informacja o poziomach */}
        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            📊 Poziomy trudności
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🌱</span>
              <div>
                <p className="font-semibold text-gray-800">Początkujący</p>
                <p className="text-sm text-gray-600">Podstawy języka</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🌿</span>
              <div>
                <p className="font-semibold text-gray-800">Średniozaawansowany</p>
                <p className="text-sm text-gray-600">Rozwinięte umiejętności</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🌳</span>
              <div>
                <p className="font-semibold text-gray-800">Zaawansowany</p>
                <p className="text-sm text-gray-600">Biegłość językowa</p>
              </div>
            </div>
          </div>
        </div>

        {/* Siatka lekcji wideo */}
        <div className="grid md:grid-cols-2 gap-6">
          {videosData.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              {/* Placeholder wideo */}
              <div className="bg-gradient-to-br from-orange-400 to-pink-500 h-48 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl mb-2">🎬</div>
                  <p className="text-lg font-semibold">Tutaj będzie wideo</p>
                  <p className="text-sm opacity-90">{video.duration}</p>
                </div>
              </div>

              {/* Informacje o lekcji */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h2 className="text-xl font-bold text-gray-800 flex-1">
                    {video.title}
                  </h2>
                  <span className="text-2xl">{getLevelIcon(video.level)}</span>
                </div>

                <p className="text-gray-700 mb-4">{video.description}</p>

                <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getLevelColor(video.level)}`}>
                    {video.level}
                  </span>
                  <span className="text-sm text-gray-500">⏱️ {video.duration}</span>
                </div>

                <button className="w-full mt-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition">
                  ▶️ Odtwórz lekcję
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Wskazówka */}
        <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            💡 Jak korzystać z lekcji wideo?
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Oglądaj lekcje w kolejności od podstawowych do zaawansowanych</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Rób notatki podczas oglądania i powtarzaj materiał</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Ćwicz wymowę głośno wraz z lektorem</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Wracaj do trudniejszych tematów gdy poczujesz się gotowy</span>
            </li>
          </ul>
        </div>

        {/* Placeholder dla przyszłych funkcji */}
        <div className="mt-8 bg-gray-50 border border-gray-200 p-6 rounded-lg text-center">
          <p className="text-gray-600">
            <strong>Wkrótce:</strong> Interaktywne quizy po każdej lekcji, 
            pobieranie napisów i możliwość śledzenia postępów!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Videos;
