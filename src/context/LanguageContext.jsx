import { createContext, useContext, useState, useEffect } from "react";
import { TRANSLATIONS } from "../data/translations";

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState(() => {
    const saved = localStorage.getItem("portfolio_lang");
    if (saved) return saved;
    return "en";
  });

  const [theme, setThemeState] = useState(() => {
    const saved = localStorage.getItem("portfolio_theme");
    if (saved === "light" || saved === "dark") return saved;
    return "dark"; // Default ke Dark Mode sesuai referensi
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio_theme", theme);
  }, [theme]);

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

  const toggleTheme = () => {
    setThemeState((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const t = (key) => {
    const translations = TRANSLATIONS[language] || TRANSLATIONS["id"];
    return translations[key] !== undefined ? translations[key] : key;
  };

  const tData = (field) => {
    if (field && typeof field === "object") {
      return field[language] !== undefined ? field[language] : field["id"] || "";
    }
    return field || "";
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        theme,
        toggleTheme,
        t,
        tData,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
