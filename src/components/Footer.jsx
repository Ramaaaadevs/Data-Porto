import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="site-footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">

            {/* Col 1: Mini profile */}
            <div className="footer-col footer-brand">
              <div className="footer-profile">
                <img
                  src="/Gambar/WhatsApp Image 2024-10-09 at 09.50.18_5da5c080.png"
                  alt="Diwan Ramadhani"
                  className="footer-avatar"
                  onError={(e) => { e.currentTarget.style.display = "none"; }}
                />
                <div>
                  <p className="footer-name">Diwan Ramadhani Dwi Putra</p>
                  <p className="footer-title">{t("footer_title")}</p>
                </div>
              </div>
              <p className="footer-bio">
                {t("footer_bio")}
              </p>
              <div className="footer-socials">
                <a href="https://github.com/Ramaaaadevs" target="_blank" rel="noreferrer" title="GitHub">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/diwan-ramadhani-dwi-putra/" target="_blank" rel="noreferrer" title="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="mailto:diwanrdp6@gmail.com" title="Email">
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            </div>

            {/* Col 2: Quick links */}
            <div className="footer-col">
              <p className="footer-col-title">{t("footer_quick_links")}</p>
              <div className="footer-links-grid">
                <div className="footer-links-col">
                  <Link to="/#home">{t("nav_home")}</Link>
                  <Link to="/projects">{t("nav_projects")}</Link>
                  <Link to="/skills">{t("nav_skills")}</Link>
                </div>
                <div className="footer-links-col">
                  <Link to="/about">{t("nav_about")}</Link>
                  <a href="https://github.com/Ramaaaadevs" target="_blank" rel="noreferrer">GitHub</a>
                  <a href="https://www.linkedin.com/in/diwan-ramadhani-dwi-putra/" target="_blank" rel="noreferrer">LinkedIn</a>
                </div>
              </div>
            </div>

            {/* Col 3: Get In Touch */}
            <div className="footer-col">
              <p className="footer-col-title">{t("footer_get_in_touch")}</p>
              <div className="footer-contact-list">
                <a href="mailto:diwanrdp6@gmail.com" className="footer-contact-item">
                  <i className="fas fa-envelope"></i>
                  <span>diwanrdp6@gmail.com</span>
                </a>
                <a href="https://wa.me/6281278437207" target="_blank" rel="noreferrer" className="footer-contact-item">
                  <i className="fab fa-whatsapp"></i>
                  <span>WhatsApp</span>
                </a>
                <a href="https://www.linkedin.com/in/diwan-ramadhani-dwi-putra/" target="_blank" rel="noreferrer" className="footer-contact-item">
                  <i className="fab fa-linkedin"></i>
                  <span>LinkedIn</span>
                </a>
              </div>
              <button className="back-to-top-btn" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                <i className="fas fa-arrow-up"></i> {t("footer_back_to_top")}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bar">
        <div className="container">
          <p>© 2026 Diwan Ramadhani Dwi Putra. {t("footer_all_rights")}</p>
        </div>
      </div>
    </footer>
  );
}
