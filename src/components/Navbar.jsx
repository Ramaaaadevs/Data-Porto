import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, theme, toggleTheme, t } = useLanguage();

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  const closeMobile = () => setMobileOpen(false);

  const navItems = [
    { path: "/", icon: "fa-house", label: t("nav_home") },
    { path: "/experience", icon: "fa-briefcase", label: language === "id" ? "Pengalaman" : "Experience" },
    { path: "/projects", icon: "fa-folder-open", label: t("nav_projects") },
    { path: "/achievements", icon: "fa-award", label: language === "id" ? "Pencapaian" : "Achievements" },
    { path: "/about", icon: "fa-user", label: t("nav_about") },
    { path: "/contact", icon: "fa-paper-plane", label: t("nav_contact") },
  ];

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="db-mobile-topbar">
        <Link to="/" className="db-mobile-brand" onClick={closeMobile}>
          <img
            src="/Gambar/formal_baru.png"
            alt="Diwan Ramadhani"
            className="db-mobile-avatar"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
          <div>
            <span className="db-mobile-name">
              Diwan Ramadhani <i className="fas fa-circle-check db-verified"></i>
            </span>
            <span className="db-mobile-handle">@Ramaaaadevs</span>
          </div>
        </Link>

        <div className="db-mobile-actions">
          <button
            type="button"
            className="db-icon-circle"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
          >
            <i className={`fas ${theme === "dark" ? "fa-sun" : "fa-moon"}`}></i>
          </button>
          <button
            type="button"
            className={`db-burger-btn ${mobileOpen ? "open" : ""}`}
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Backdrop */}
      {mobileOpen && <div className="db-sidebar-backdrop" onClick={closeMobile}></div>}

      {/* Left Sticky Sidebar */}
      <aside className={`db-sidebar ${mobileOpen ? "mobile-open" : ""}`}>
        {/* Profile Header */}
        <div className="db-profile-card">
          <div className="db-avatar-wrap">
            <img
              src="/Gambar/formal_baru.png"
              alt="Diwan Ramadhani Dwi Putra"
              className="db-avatar-img"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
            <span className="db-online-dot" title="Available for opportunities"></span>
          </div>

          <h2 className="db-profile-name">
            Diwan Ramadhani <i className="fas fa-circle-check db-verified" title="Verified"></i>
          </h2>
          <p className="db-profile-role">
            {language === "id"
              ? "Data Scientist & Web Builder"
              : "Data Scientist & Web Builder"}
          </p>

          {/* Controls Pill Row: Lang + Theme + CV */}
          <div className="db-controls-row">
            <div className="db-lang-pill">
              <button
                type="button"
                className={`db-lang-btn ${language === "en" ? "active" : ""}`}
                onClick={() => setLanguage("en")}
                title="English"
              >
                <span className="flag-emoji">🇺🇸</span> EN
              </button>
              <button
                type="button"
                className={`db-lang-btn ${language === "id" ? "active" : ""}`}
                onClick={() => setLanguage("id")}
                title="Bahasa Indonesia"
              >
                <span className="flag-emoji">🇮🇩</span> ID
              </button>
            </div>

            <button
              type="button"
              className="db-icon-circle"
              onClick={toggleTheme}
              title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              <i className={`fas ${theme === "dark" ? "fa-sun" : "fa-moon"}`}></i>
            </button>

            <a
              href="/CV_Diwan Ramadhani.pdf"
              download
              className="db-icon-circle"
              title={t("about_download_cv")}
            >
              <i className="fas fa-file-arrow-down"></i>
            </a>
          </div>
        </div>

        <div className="db-divider"></div>

        {/* Navigation Menu */}
        <nav className="db-nav">
          {navItems.map((item) => {
            const active = isActive(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`db-nav-link ${active ? "active" : ""}`}
                onClick={closeMobile}
              >
                <div className="db-nav-left">
                  <i className={`fas ${item.icon} db-nav-icon`}></i>
                  <span>{item.label}</span>
                </div>
                {active && <i className="fas fa-arrow-right db-nav-arrow"></i>}
              </Link>
            );
          })}
        </nav>

        <div className="db-divider"></div>

        {/* Sidebar Footer Socials */}
        <div className="db-sidebar-footer">
          <div className="db-sidebar-socials">
            <a
              href="https://github.com/Ramaaaadevs"
              target="_blank"
              rel="noreferrer"
              title="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/diwan-ramadhani-dwi-putra/"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="mailto:diwanrdp6@gmail.com" title="Email">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
          <p className="db-copyright">© 2026 Diwan Ramadhani</p>
        </div>
      </aside>
    </>
  );
}
