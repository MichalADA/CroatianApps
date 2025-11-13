import React, { useState } from 'react';
import { flashcardsData } from '../data/flashcards';

const Flashcards: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showTranslation, setShowTranslation] = useState(false);

  const currentCard = flashcardsData[currentIndex];
  const totalCards = flashcardsData.length;

  const handleNext = () => {
    if (currentIndex < totalCards - 1) {
      setCurrentIndex(currentIndex + 1);
      setShowTranslation(false);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setShowTranslation(false);
    }
  };

  const toggleTranslation = () => {
    setShowTranslation(!showTranslation);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Nagłówek */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Fiszki 📚</h1>
          <p className="text-gray-600">
            Ucz się nowych słów po chorwacku z pomocą interaktywnych fiszek
          </p>
        </div>

        {/* Wskaźnik postępu */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">
              Fiszka {currentIndex + 1} z {totalCards}
            </span>
            <span className="text-sm text-gray-500">
              Postęp: {Math.round(((currentIndex + 1) / totalCards) * 100)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / totalCards) * 100}%` }}
            />
          </div>
        </div>

        {/* Fiszka */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 mb-8 min-h-[400px] flex flex-col justify-center">
          <div className="text-center">
            {/* Słowo po chorwacku */}
            <div className="mb-8">
              <p className="text-sm text-gray-500 mb-2">Chorwacki</p>
              <h2 className="text-5xl font-bold text-blue-600 mb-4">
                {currentCard.word}
              </h2>
            </div>

            {/* Tłumaczenie (pokazywane po kliknięciu) */}
            {showTranslation && (
              <div className="mb-8 animate-fade-in">
                <div className="border-t-2 border-gray-200 pt-6 mb-6">
                  <p className="text-sm text-gray-500 mb-2">Polski</p>
                  <h3 className="text-3xl font-semibold text-green-600 mb-6">
                    {currentCard.translation}
                  </h3>
                </div>

                {/* Przykładowe zdanie */}
                {currentCard.exampleSentence && (
                  <div className="bg-blue-50 rounded-lg p-6">
                    <p className="text-sm text-gray-600 mb-2">Przykład:</p>
                    <p className="text-lg text-gray-800 italic mb-2">
                      {currentCard.exampleSentence}
                    </p>
                    {currentCard.exampleTranslation && (
                      <p className="text-md text-gray-600">
                        → {currentCard.exampleTranslation}
                      </p>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Przycisk pokazania tłumaczenia */}
          {!showTranslation && (
            <div className="text-center mt-8">
              <button
                onClick={toggleTranslation}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition transform hover:scale-105"
              >
                Pokaż tłumaczenie
              </button>
            </div>
          )}
        </div>

        {/* Przyciski nawigacji */}
        <div className="flex justify-between items-center gap-4">
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className={`flex-1 py-4 px-6 rounded-lg font-semibold transition ${
              currentIndex === 0
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-gray-600 hover:bg-gray-700 text-white'
            }`}
          >
            ← Poprzednia
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex === totalCards - 1}
            className={`flex-1 py-4 px-6 rounded-lg font-semibold transition ${
              currentIndex === totalCards - 1
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
          >
            Następna →
          </button>
        </div>

        {/* Informacja końcowa */}
        {currentIndex === totalCards - 1 && showTranslation && (
          <div className="mt-8 bg-green-50 border-l-4 border-green-400 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              🎉 Gratulacje!
            </h3>
            <p className="text-gray-700">
              Dotarłeś do ostatniej fiszki! Możesz wrócić na początek i powtórzyć materiał.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Flashcards;
