import React from 'react';

const Grammar: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Nagłówek */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Gramatyka 📖</h1>
          <p className="text-gray-600">
            Poznaj podstawy gramatyki języka chorwackiego
          </p>
        </div>

        {/* Sekcja 1: Alfabet i wymowa */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4 flex items-center">
            <span className="mr-2">🔤</span> Alfabet i wymowa
          </h2>
          <p className="text-gray-700 mb-4">
            Język chorwacki używa alfabetu łacińskiego z dodatkowymi znakami diakrytycznymi.
            Alfabet chorwacki składa się z 30 liter.
          </p>
          
          <div className="bg-green-50 p-4 rounded-lg mb-4">
            <h3 className="font-semibold text-gray-800 mb-2">Litery specjalne:</h3>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Č, č</strong> - wymawiane jak polskie "cz" (npr. "čaj" - herbata)</li>
              <li><strong>Ć, ć</strong> - miększe "ć" (npr. "ćevapi" - danie mięsne)</li>
              <li><strong>Dž, dž</strong> - jak angielskie "j" w "jazz" (npr. "džem" - dżem)</li>
              <li><strong>Đ, đ</strong> - jak "dź" (npr. "điđa" - dziadek)</li>
              <li><strong>Š, š</strong> - jak polskie "sz" (npr. "šuma" - las)</li>
              <li><strong>Ž, ž</strong> - jak polskie "ż" (npr. "život" - życie)</li>
            </ul>
          </div>

          <p className="text-gray-700">
            <strong>Ważne:</strong> Akcent w języku chorwackim jest ruchomy i może zmieniać 
            znaczenie słowa. Większość słów ma akcent na pierwszej sylabie.
          </p>
        </div>

        {/* Sekcja 2: Rodzaje rzeczowników */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4 flex items-center">
            <span className="mr-2">⚡</span> Rodzaje rzeczowników
          </h2>
          <p className="text-gray-700 mb-4">
            W języku chorwackim istnieją trzy rodzaje gramatyczne: męski, żeński i nijaki.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">Męski</h3>
              <p className="text-sm text-gray-700 mb-2">Zazwyczaj kończy się na spółgłoskę</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• <strong>pas</strong> (pies)</li>
                <li>• <strong>stol</strong> (stół)</li>
                <li>• <strong>auto</strong> (samochód)</li>
              </ul>
            </div>

            <div className="bg-pink-50 p-4 rounded-lg">
              <h3 className="font-semibold text-pink-800 mb-2">Żeński</h3>
              <p className="text-sm text-gray-700 mb-2">Zazwyczaj kończy się na -a</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• <strong>kuća</strong> (dom)</li>
                <li>• <strong>mačka</strong> (kot)</li>
                <li>• <strong>knjiga</strong> (książka)</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-semibold text-purple-800 mb-2">Nijaki</h3>
              <p className="text-sm text-gray-700 mb-2">Zazwyczaj kończy się na -o lub -e</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• <strong>selo</strong> (wieś)</li>
                <li>• <strong>dijete</strong> (dziecko)</li>
                <li>• <strong>more</strong> (morze)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sekcja 3: Czasowniki */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4 flex items-center">
            <span className="mr-2">⚙️</span> Podstawowe czasowniki
          </h2>
          <p className="text-gray-700 mb-4">
            Chorwackie czasowniki odmieniają się przez osoby. Oto przykłady podstawowych czasowników:
          </p>

          <div className="space-y-6">
            {/* Czasownik BITI (być) */}
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-3">
                BITI (być) - czas teraźniejszy
              </h3>
              <div className="grid md:grid-cols-2 gap-3 text-gray-700">
                <div>ja <strong>sam</strong> - ja jestem</div>
                <div>mi <strong>smo</strong> - my jesteśmy</div>
                <div>ti <strong>si</strong> - ty jesteś</div>
                <div>vi <strong>ste</strong> - wy jesteście</div>
                <div>on/ona <strong>je</strong> - on/ona jest</div>
                <div>oni <strong>su</strong> - oni są</div>
              </div>
            </div>

            {/* Czasownik IĆI (iść) */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-3">
                IĆI (iść) - czas teraźniejszy
              </h3>
              <div className="grid md:grid-cols-2 gap-3 text-gray-700">
                <div>ja <strong>idem</strong> - ja idę</div>
                <div>mi <strong>idemo</strong> - my idziemy</div>
                <div>ti <strong>ideš</strong> - ty idziesz</div>
                <div>vi <strong>idete</strong> - wy idziecie</div>
                <div>on/ona <strong>ide</strong> - on/ona idzie</div>
                <div>oni <strong>idu</strong> - oni idą</div>
              </div>
            </div>

            {/* Czasownik RADITI (pracować) */}
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-3">
                RADITI (pracować) - czas teraźniejszy
              </h3>
              <div className="grid md:grid-cols-2 gap-3 text-gray-700">
                <div>ja <strong>radim</strong> - ja pracuję</div>
                <div>mi <strong>radimo</strong> - my pracujemy</div>
                <div>ti <strong>radiš</strong> - ty pracujesz</div>
                <div>vi <strong>radite</strong> - wy pracujecie</div>
                <div>on/ona <strong>radi</strong> - on/ona pracuje</div>
                <div>oni <strong>rade</strong> - oni pracują</div>
              </div>
            </div>
          </div>
        </div>

        {/* Sekcja 4: Podstawowe zwroty */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-green-700 mb-4 flex items-center">
            <span className="mr-2">💬</span> Podstawowe zwroty
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2 text-gray-700">
              <p><strong>Dobro jutro</strong> - Dzień dobry (rano)</p>
              <p><strong>Dobar dan</strong> - Dzień dobry (po południu)</p>
              <p><strong>Dobra večer</strong> - Dobry wieczór</p>
              <p><strong>Laku noć</strong> - Dobranoc</p>
              <p><strong>Hvala</strong> - Dziękuję</p>
            </div>
            <div className="space-y-2 text-gray-700">
              <p><strong>Molim</strong> - Proszę</p>
              <p><strong>Oprostite</strong> - Przepraszam</p>
              <p><strong>Da</strong> - Tak</p>
              <p><strong>Ne</strong> - Nie</p>
              <p><strong>Kako si?</strong> - Jak się masz?</p>
            </div>
          </div>
        </div>

        {/* Wskazówka */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            💡 Wskazówka do nauki
          </h3>
          <p className="text-gray-700">
            Zacznij od nauczenia się podstawowych czasowników i ich odmian. 
            To fundamenty, które pozwolą Ci tworzyć proste zdania i komunikować się w codziennych sytuacjach.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Grammar;
