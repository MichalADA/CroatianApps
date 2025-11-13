import React, { useState, useEffect } from 'react';
import { matchingGameData } from '../data/games';
import { MatchingPair } from '../types';

interface SelectedItem {
  id: number;
  value: string;
  type: 'croatian' | 'polish';
}

const Games: React.FC = () => {
  const [croatianWords, setCroatianWords] = useState<MatchingPair[]>([]);
  const [polishWords, setPolishWords] = useState<MatchingPair[]>([]);
  const [selectedCroatian, setSelectedCroatian] = useState<SelectedItem | null>(null);
  const [selectedPolish, setSelectedPolish] = useState<SelectedItem | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<number[]>([]);
  const [incorrectPairs, setIncorrectPairs] = useState<number[]>([]);
  const [score, setScore] = useState(0);
  const [gameCompleted, setGameCompleted] = useState(false);

  // Inicjalizacja gry - tasowanie słów
  useEffect(() => {
    const shuffledCroatian = [...matchingGameData].sort(() => Math.random() - 0.5);
    const shuffledPolish = [...matchingGameData].sort(() => Math.random() - 0.5);
    setCroatianWords(shuffledCroatian);
    setPolishWords(shuffledPolish);
  }, []);

  // Sprawdzanie czy para jest poprawna
  useEffect(() => {
    if (selectedCroatian && selectedPolish) {
      const isMatch = selectedCroatian.id === selectedPolish.id;
      
      if (isMatch) {
        // Poprawna para
        setMatchedPairs([...matchedPairs, selectedCroatian.id]);
        setScore(score + 10);
        
        // Sprawdź czy gra zakończona
        if (matchedPairs.length + 1 === matchingGameData.length) {
          setGameCompleted(true);
        }
      } else {
        // Niepoprawna para
        setIncorrectPairs([selectedCroatian.id, selectedPolish.id]);
        setTimeout(() => {
          setIncorrectPairs([]);
        }, 1000);
      }

      // Resetuj wybór po krótkiej chwili
      setTimeout(() => {
        setSelectedCroatian(null);
        setSelectedPolish(null);
      }, 500);
    }
  }, [selectedCroatian, selectedPolish]);

  const handleCroatianClick = (pair: MatchingPair) => {
    if (matchedPairs.includes(pair.id)) return;
    setSelectedCroatian({
      id: pair.id,
      value: pair.croatian,
      type: 'croatian',
    });
  };

  const handlePolishClick = (pair: MatchingPair) => {
    if (matchedPairs.includes(pair.id)) return;
    setSelectedPolish({
      id: pair.id,
      value: pair.polish,
      type: 'polish',
    });
  };

  const resetGame = () => {
    const shuffledCroatian = [...matchingGameData].sort(() => Math.random() - 0.5);
    const shuffledPolish = [...matchingGameData].sort(() => Math.random() - 0.5);
    setCroatianWords(shuffledCroatian);
    setPolishWords(shuffledPolish);
    setMatchedPairs([]);
    setScore(0);
    setGameCompleted(false);
    setSelectedCroatian(null);
    setSelectedPolish(null);
  };

  const getButtonClass = (pair: MatchingPair, type: 'croatian' | 'polish') => {
    const isMatched = matchedPairs.includes(pair.id);
    const isSelected = 
      (type === 'croatian' && selectedCroatian?.id === pair.id) ||
      (type === 'polish' && selectedPolish?.id === pair.id);
    const isIncorrect = incorrectPairs.includes(pair.id);

    let baseClass = 'p-4 rounded-lg font-semibold transition transform hover:scale-105 ';

    if (isMatched) {
      return baseClass + 'bg-green-500 text-white cursor-not-allowed opacity-75';
    }
    if (isSelected) {
      return baseClass + 'bg-blue-600 text-white scale-105';
    }
    if (isIncorrect) {
      return baseClass + 'bg-red-500 text-white';
    }
    
    return baseClass + (type === 'croatian' 
      ? 'bg-blue-100 hover:bg-blue-200 text-gray-800'
      : 'bg-purple-100 hover:bg-purple-200 text-gray-800');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Nagłówek */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Gry 🎮</h1>
          <p className="text-gray-600">
            Dopasuj chorwackie słowa do ich polskich tłumaczeń
          </p>
        </div>

        {/* Panel wyników */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex justify-between items-center flex-wrap gap-4">
            <div>
              <p className="text-sm text-gray-600">Wynik</p>
              <p className="text-3xl font-bold text-purple-600">{score} pkt</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Dopasowane pary</p>
              <p className="text-3xl font-bold text-green-600">
                {matchedPairs.length} / {matchingGameData.length}
              </p>
            </div>
            <button
              onClick={resetGame}
              className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition"
            >
              🔄 Nowa gra
            </button>
          </div>
        </div>

        {/* Instrukcja */}
        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg mb-8">
          <h3 className="font-semibold text-gray-800 mb-2">📋 Jak grać?</h3>
          <p className="text-gray-700">
            Kliknij słowo po chorwacku z lewej kolumny, a następnie jego polskie tłumaczenie 
            z prawej kolumny. Jeśli para jest poprawna, zostanie podświetlona na zielono!
          </p>
        </div>

        {/* Gra zakończona */}
        {gameCompleted && (
          <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-lg mb-8 animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              🎉 Gratulacje!
            </h3>
            <p className="text-gray-700 mb-4">
              Ukończyłeś grę z wynikiem {score} punktów! Świetna robota!
            </p>
            <button
              onClick={resetGame}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition"
            >
              Zagraj ponownie
            </button>
          </div>
        )}

        {/* Plansza gry */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Kolumna chorwacka */}
          <div>
            <h2 className="text-2xl font-bold text-blue-700 mb-4 text-center">
              🇭🇷 Chorwacki
            </h2>
            <div className="space-y-3">
              {croatianWords.map((pair) => (
                <button
                  key={`croatian-${pair.id}`}
                  onClick={() => handleCroatianClick(pair)}
                  disabled={matchedPairs.includes(pair.id)}
                  className={getButtonClass(pair, 'croatian')}
                >
                  {pair.croatian}
                </button>
              ))}
            </div>
          </div>

          {/* Kolumna polska */}
          <div>
            <h2 className="text-2xl font-bold text-purple-700 mb-4 text-center">
              🇵🇱 Polski
            </h2>
            <div className="space-y-3">
              {polishWords.map((pair) => (
                <button
                  key={`polish-${pair.id}`}
                  onClick={() => handlePolishClick(pair)}
                  disabled={matchedPairs.includes(pair.id)}
                  className={getButtonClass(pair, 'polish')}
                >
                  {pair.polish}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Wskazówka */}
        <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            💡 Wskazówka
          </h3>
          <p className="text-gray-700">
            Jeśli masz trudności, wróć do fiszek aby powtórzyć słownictwo!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Games;
