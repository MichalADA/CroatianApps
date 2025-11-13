// Typ dla fiszki
export interface Flashcard {
  id: number;
  word: string; // słowo po chorwacku
  translation: string; // tłumaczenie po polsku
  exampleSentence?: string; // przykładowe zdanie po chorwacku
  exampleTranslation?: string; // tłumaczenie przykładowego zdania
}

// Typ dla piosenki
export interface Song {
  id: number;
  title: string; // tytuł po chorwacku
  artist: string; // wykonawca
  description: string; // opis po polsku
  youtubeUrl: string; // link do YouTube (placeholder)
  difficulty: 'łatwy' | 'średni' | 'trudny';
}

// Typ dla lekcji wideo
export interface VideoLesson {
  id: number;
  title: string; // tytuł po polsku
  description: string; // opis po polsku
  duration: string; // np. "15 min"
  level: 'początkujący' | 'średniozaawansowany' | 'zaawansowany';
}

// Typ dla gry w dopasowywanie
export interface MatchingPair {
  id: number;
  croatian: string;
  polish: string;
}
