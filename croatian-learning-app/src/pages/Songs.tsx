import React from 'react';
import { songsData } from '../data/songs';

const Songs: React.FC = () => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'łatwy':
        return 'bg-green-100 text-green-800';
      case 'średni':
        return 'bg-yellow-100 text-yellow-800';
      case 'trudny':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Nagłówek */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Piosenki 🎵</h1>
          <p className="text-gray-600">
            Ucz się chorwackiego przez muzykę - najlepsze piosenki do nauki języka
          </p>
        </div>

        {/* Wskazówka jak uczyć się z piosenek */}
        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            🎧 Jak uczyć się z piosenek?
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="mr-2">1️⃣</span>
              <span>Słuchaj piosenki kilka razy, aby przyzwyczaić się do melodii i rytmu</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">2️⃣</span>
              <span>Przeczytaj tekst i sprawdź znaczenie nieznanych słów</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">3️⃣</span>
              <span>Śpiewaj wraz z piosenką - to pomoże w wymowie i zapamiętywaniu</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">4️⃣</span>
              <span>Zwróć uwagę na powtarzające się zwroty i wyrażenia</span>
            </li>
          </ul>
        </div>

        {/* Lista piosenek */}
        <div className="grid gap-6">
          {songsData.map((song) => (
            <div
              key={song.id}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-4xl">🎵</span>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800 mb-1">
                        {song.title}
                      </h2>
                      <p className="text-gray-600 font-medium">{song.artist}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{song.description}</p>

                  <div className="flex items-center gap-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(song.difficulty)}`}>
                      {song.difficulty}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <a
                    href={song.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition text-center"
                  >
                    ▶️ YouTube
                  </a>
                  <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg transition">
                    📄 Tekst
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dodatkowa informacja */}
        <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            💡 Dlaczego piosenki?
          </h3>
          <p className="text-gray-700">
            Nauka przez piosenki jest skuteczna, ponieważ melodia pomaga w zapamiętywaniu 
            słów i zwrotów. Dodatkowo poznasz współczesny język i kulturę Chorwacji!
          </p>
        </div>

        {/* Placeholder dla przyszłych funkcji */}
        <div className="mt-8 bg-gray-50 border border-gray-200 p-6 rounded-lg text-center">
          <p className="text-gray-600">
            <strong>Wkrótce:</strong> Interaktywne ćwiczenia z tekstami piosenek, 
            karaoke i quizy sprawdzające rozumienie!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Songs;
