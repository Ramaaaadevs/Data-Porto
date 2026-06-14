import { createContext, useContext, useState } from "react";
import { TRANSLATIONS } from "../data/translations";

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState(() => {
    const saved = localStorage.getItem("portfolio_lang");
    if (saved) return saved;
    return "en"; // Default ke Bahasa Inggris untuk pengunjung baru
  });

  const setLanguage = (lang) => {
    if (lang === "id" || lang === "en") {
      setLanguageState(lang);
      localStorage.setItem("portfolio_lang", lang);
    }
  };

  const toggleLanguage = () => {
    const nextLang = language === "id" ? "en" : "id";
    setLanguageState(nextLang);
    localStorage.setItem("portfolio_lang", nextLang);
  };

  // Helper to translate static keys
  const t = (key) => {
    const translations = TRANSLATIONS[language] || TRANSLATIONS["id"];
    return translations[key] !== undefined ? translations[key] : key;
  };

  // Helper to dynamically pick localized fields from data objects
  const tData = (field) => {
    if (field && typeof field === "object") {
      return field[language] !== undefined ? field[language] : (field["id"] || "");
    }
    return field || "";
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t, tData }}>
      {children}
    </LanguageContext.Provider>
  );
};
