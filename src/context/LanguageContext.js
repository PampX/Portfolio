import { createContext, useState, useCallback } from 'react';
import fr from '../locales/fr.json';
import en from '../locales/en.json';

const translations = { fr, en };

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('language');
    return saved || 'fr';
  });

  const t = useCallback((key) => {
    const keys = key.split('.');
    let value = translations[language];

    for (const k of keys) {
      value = value?.[k];
    }

    return value || key;
  }, [language]);

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => {
      const newLang = prev === 'fr' ? 'en' : 'fr';
      localStorage.setItem('language', newLang);
      return newLang;
    });
  }, []);

  return (
    <LanguageContext.Provider value={{ language, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
