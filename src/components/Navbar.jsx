import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname === path;
  };

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="data-navbar">
      <div className="logo">
        Ramaa<span>Portfolio</span>
      </div>
      <nav className={mobileOpen ? "mobile-open" : ""}>
        <ul>
          <li>
            <Link to="/#home" className={`nav-link ${isActive("/") ? "active" : ""}`} onClick={closeMobile}>
              {t("nav_home")}
            </Link>
          </li>
          <li>
            <Link to="/projects" className={`nav-link ${isActive("/projects") ? "active" : ""}`} onClick={closeMobile}>
              {t("nav_projects")}
            </Link>
          </li>
          <li>
            <Link to="/skills" className={`nav-link ${isActive("/skills") ? "active" : ""}`} onClick={closeMobile}>
              {t("nav_skills")}
            </Link>
          </li>
          <li>
            <Link to="/about" className={`nav-link ${isActive("/about") ? "active" : ""}`} onClick={closeMobile}>
              {t("nav_about")}
            </Link>
          </li>
        </ul>

        {/* Language Switcher Pill */}
        <div className="lang-switcher">
          <button
            className={`lang-btn ${language === "id" ? "active" : ""}`}
            onClick={() => { setLanguage("id"); closeMobile(); }}
            type="button"
          >
            ID
          </button>
          <span className="lang-divider">|</span>
          <button
            className={`lang-btn ${language === "en" ? "active" : ""}`}
            onClick={() => { setLanguage("en"); closeMobile(); }}
            type="button"
          >
            EN
          </button>
        </div>
      </nav>
      <div
        className={`mobile-menu ${mobileOpen ? "is-active" : ""}`}
        onClick={() => setMobileOpen((prev) => !prev)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
}
