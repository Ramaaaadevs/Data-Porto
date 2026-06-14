import { useState } from "react";
import { CERTS } from "../data/projects";
import GithubGraph from "../components/GithubGraph";
import useScrollAnimation from "../hooks/useScrollAnimation";
import { useLanguage } from "../context/LanguageContext";

export default function About() {
  useScrollAnimation();
  const [activeCertIndex, setActiveCertIndex] = useState(-1);
  const [activePage, setActivePage] = useState(0);
  const [isMediaViewerOpen, setIsMediaViewerOpen] = useState(false);
  const { t, tData, language } = useLanguage();

  const openMediaViewer = (index) => {
    setActiveCertIndex(index);
    setActivePage(0);
    setIsMediaViewerOpen(true);
  };

  const closeMediaViewer = () => {
    setIsMediaViewerOpen(false);
  };

  const nextPage = () => {
    const cert = CERTS[activeCertIndex];
    if (cert && cert.pages && activePage < cert.pages.length - 1) {
      setActivePage(activePage + 1);
    }
  };

  const prevPage = () => {
    if (activePage > 0) {
      setActivePage(activePage - 1);
    }
  };

  return (
    <>
      {/* ===== ABOUT HERO ===== */}
      <section className="about-hero-section" style={{ paddingTop: "120px", paddingBottom: "60px" }}>
        <div className="container">
          <div className="about-hero-grid scroll-animate">
            <div className="about-hero-photo">
              <img
                src="/Gambar/WhatsApp Image 2024-10-09 at 09.50.18_5da5c080.png"
                alt="Diwan Ramadhani"
                className="about-hero-img"
                onError={(e) => { e.currentTarget.style.display = "none"; }}
              />
            </div>
            <div className="about-hero-info">
              <h1 className="about-hero-name">Diwan Ramadhani Dwi Putra</h1>
              <p className="about-hero-tagline">{t("about_hero_tagline")}</p>
              <p className="about-hero-bio" dangerouslySetInnerHTML={{ __html: t("about_hero_bio") }}></p>
              
              {/* CV & Portfolio Download Action Buttons */}
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "24px" }}>
                <a href="/CV_Diwan Ramadhani.pdf" download className="cta-button" style={{ padding: "10px 20px", fontSize: "13px" }}>
                  <i className="fas fa-file-download"></i> {t("about_download_cv")}
                </a>
              </div>

              <div className="about-hero-links">
                <a href="https://github.com/Ramaaaadevs" target="_blank" rel="noreferrer" className="contact-chip">
                  <i className="fab fa-github"></i> Ramaaaadevs
                </a>
                <a href="https://www.linkedin.com/in/diwan-ramadhani-dwi-putra/" target="_blank" rel="noreferrer" className="contact-chip">
                  <i className="fab fa-linkedin"></i> LinkedIn
                </a>
                <a href="mailto:diwanrdp6@gmail.com" className="contact-chip">
                  <i className="fas fa-envelope"></i> diwanrdp6@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== EDUCATION & EXPERIENCE ===== */}
      <section className="about-edu-section">
        <div className="container">
          <h2 className="section-title scroll-animate">{t("about_edu_title")}</h2>
          <p
            className="scroll-animate"
            style={{ textAlign: "center", maxWidth: "600px", margin: "-20px auto 40px", color: "var(--text2)", fontSize: "14px", lineHeight: 1.6 }}
          >
            {t("about_edu_subtitle")}
          </p>

          <div className="about-edu-timeline">
            {/* Education 1 */}
            <div className="about-edu-item scroll-animate animate-left-dir">
              <div className="about-edu-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <div className="about-edu-card">
                <div className="about-edu-header">
                  <div>
                    <h3 className="about-edu-title">Institut Teknologi Sumatera (ITERA)</h3>
                    <p className="about-edu-subtitle">
                      {language === "id" ? "S1 Teknik Informatika" : "B.S. Informatics Engineering"}
                    </p>
                  </div>
                  <span className="timeline-date">2023 - {language === "id" ? "Sekarang" : "Present"}</span>
                </div>
                <p className="about-edu-desc">
                  {language === "id" 
                    ? "Mendalami dasar-dasar ilmu komputer, algoritma, struktur data, dan pemrograman. Aktif mengerjakan proyek-proyek data analytics dan machine learning sebagai bagian dari perkuliahan dan kegiatan mandiri."
                    : "Studying computer science fundamentals, algorithms, data structures, and programming. Actively working on data analytics and machine learning projects as part of coursework and independent activities."}
                </p>
              </div>
            </div>

            {/* Bootcamp */}
            <div className="about-edu-item scroll-animate animate-right-dir">
              <div className="about-edu-icon">
                <i className="fas fa-laptop-code"></i>
              </div>
              <div className="about-edu-card">
                <div className="about-edu-header">
                  <div>
                    <h3 className="about-edu-title">DBS Foundation Coding Camp 2026</h3>
                    <p className="about-edu-subtitle">Data Scientist</p>
                  </div>
                  <span className="timeline-date">Feb 2026 - Jun 2026</span>
                </div>
                <p className="about-edu-desc">
                  {language === "id"
                    ? "Program intensif data science yang disponsori DBS Foundation bekerja sama dengan Dicoding. Mempelajari machine learning, deep learning, dan deployment model AI. Mengerjakan capstone project \"FaceFit Barber\" sebagai Team Lead tim CC26-PSU304."
                    : "Intensive data science program sponsored by DBS Foundation in partnership with Dicoding. Learned machine learning, deep learning, and AI model deployment. Completed capstone project \"FaceFit Barber\" as Team Lead of team CC26-PSU304."}
                </p>
              </div>
            </div>

            {/* Dicoding */}
            <div className="about-edu-item scroll-animate animate-left-dir">
              <div className="about-edu-icon">
                <i className="fas fa-book-open"></i>
              </div>
              <div className="about-edu-card">
                <div className="about-edu-header">
                  <div>
                    <h3 className="about-edu-title">Dicoding Academy</h3>
                    <p className="about-edu-subtitle">Self-paced Online Learning</p>
                  </div>
                  <span className="timeline-date">2025 - 2026</span>
                </div>
                <p className="about-edu-desc">
                  {language === "id"
                    ? "Menyelesaikan berbagai kelas online di bidang analisis data, machine learning, dan pengembangan aplikasi. Platform pembelajaran utama yang memperkuat fondasi teknis."
                    : "Completed various online courses in data analysis, machine learning, and application development. The primary learning platform that strengthens technical foundations."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CERTIFICATIONS ===== */}
      <section className="about-cert-section">
        <div className="container">
          <h2 className="section-title scroll-animate">{t("about_cert_title")}</h2>
          <p
            className="scroll-animate"
            style={{ textAlign: "center", maxWidth: "600px", margin: "-20px auto 40px", color: "var(--text2)", fontSize: "14px", lineHeight: 1.6 }}
          >
            {t("about_cert_subtitle")}
          </p>

          <div className="projects-grid animate-right">
            {CERTS.map((c, i) => (
              <div className="project-card-new" key={i} style={{ animationDelay: `${i * 0.08}s` }}>
                <div 
                  className="pcn-thumb-wrap" 
                  onClick={() => openMediaViewer(i)}
                  style={{ 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    background: c.colorLight, 
                    padding: "12px", 
                    boxSizing: "border-box",
                    cursor: "pointer"
                  }}
                >
                  <img
                    src={c.pages && c.pages[0] ? c.pages[0] : c.image}
                    alt={tData(c.title)}
                    className="pcn-thumb"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      borderRadius: "6px",
                      boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
                      background: "#fff"
                    }}
                  />
                </div>
                <div className="pcn-body" style={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between" }}>
                  <div>
                    <div style={{ display: "flex", gap: "12px", alignItems: "flex-start", marginTop: "14px" }}>
                      {/* Issuer Logo Container */}
                      <div style={{ 
                        flexShrink: 0, 
                        width: "42px", 
                        height: "42px", 
                        borderRadius: "8px", 
                        border: "1px solid var(--border)", 
                        background: "#ffffff", 
                        padding: "6px", 
                        display: "flex", 
                        alignItems: "center", 
                        justifyContent: "center",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.04)"
                      }}>
                        <img 
                          src={c.image} 
                          alt={c.issuer} 
                          style={{ width: "100%", height: "100%", objectFit: "contain" }} 
                        />
                      </div>
                      
                      {/* Title & Metadata */}
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <h3 className="pcn-title" style={{ margin: 0, fontSize: "14.5px", lineHeight: "1.3", wordBreak: "break-word" }}>{tData(c.title)}</h3>
                        <p className="pcn-desc" style={{ margin: "4px 0 0 0", fontSize: "12px", color: "var(--text2)" }}>{c.issuer} · {c.year}</p>
                      </div>
                    </div>

                    <div className="pcn-tags" style={{ marginTop: "14px", marginBottom: "16px" }}>
                      {c.tags.map((tItem, j) => (
                        <span key={j} className="pcn-tag">{tItem}</span>
                      ))}
                    </div>
                  </div>
                  <div style={{ marginTop: "auto", paddingTop: "12px" }}>
                    <button
                      onClick={() => openMediaViewer(i)}
                      className="btn-outline-linkedin"
                      type="button"
                    >
                      {t("about_cert_show_credential")} <i className="fas fa-external-link-alt"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== GITHUB CONTRIBUTION GRAPH ===== */}
      <section className="about-github-section">
        <div className="container">
          <div className="github-header scroll-animate">
            <div className="github-header-icon">
              <i className="fab fa-github"></i>
            </div>
            <h2 className="section-title">{t("about_github_title")}</h2>
            <p style={{ textAlign: "center", color: "var(--text2)", fontSize: "14px", margin: "-20px auto 40px" }}>{t("about_github_subtitle")}</p>
          </div>

          <GithubGraph username="Ramaaaadevs" />
        </div>
      </section>

      {/* ===== LINKEDIN-STYLE MEDIA VIEWER MODAL ===== */}
      <div className={`media-viewer-backdrop ${isMediaViewerOpen ? "open" : ""}`} onClick={closeMediaViewer}>
        {isMediaViewerOpen && activeCertIndex >= 0 && activeCertIndex < CERTS.length && (
          <div className="media-viewer-container" onClick={(e) => e.stopPropagation()}>
            
            {/* Close Button */}
            <button className="mv-close-btn" onClick={closeMediaViewer} type="button" aria-label="Close">
              <i className="fas fa-times"></i>
            </button>

            {/* Left Media Viewport Panel */}
            <div className="mv-left-panel">
              {/* Certificate Image Viewport */}
              <div className="mv-cert-img-container">
                <img
                  src={CERTS[activeCertIndex].pages && CERTS[activeCertIndex].pages[activePage] ? CERTS[activeCertIndex].pages[activePage] : CERTS[activeCertIndex].image}
                  alt={`${tData(CERTS[activeCertIndex].title)} - Page ${activePage + 1}`}
                  className="mv-cert-img"
                />
              </div>

              {/* Navigation Arrows & Page Indicator (only if document has multiple pages) */}
              {CERTS[activeCertIndex].pages && CERTS[activeCertIndex].pages.length > 1 && (
                <>
                  {activePage > 0 && (
                    <button
                      className="mv-arrow-btn left"
                      onClick={prevPage}
                      type="button"
                      aria-label="Previous Page"
                    >
                      <i className="fas fa-chevron-left"></i>
                    </button>
                  )}
                  {activePage < CERTS[activeCertIndex].pages.length - 1 && (
                    <button
                      className="mv-arrow-btn right"
                      onClick={nextPage}
                      type="button"
                      aria-label="Next Page"
                    >
                      <i className="fas fa-chevron-right"></i>
                    </button>
                  )}
                  <div className="mv-page-indicator">
                    {activePage + 1} / {CERTS[activeCertIndex].pages.length}
                  </div>
                </>
              )}
            </div>

            {/* Right Details Sidebar Panel */}
            <div className="mv-right-panel" style={{ justifyContent: "flex-start" }}>
              <div className="mv-sidebar-content" style={{ height: "100%", justifyContent: "space-between" }}>
                <div>
                  <div>
                    <h3 className="mv-sidebar-title">{t("about_mv_title")}</h3>
                    <p style={{ fontSize: "12px", color: "var(--text3)", margin: 0 }}>{t("about_mv_subtitle")}</p>
                  </div>
                  
                  <div className="mv-cert-meta">
                    <div className="mv-meta-row">
                      <span className="mv-meta-label">{t("about_mv_label_name")}</span>
                      <span className="mv-meta-value">{tData(CERTS[activeCertIndex].title)}</span>
                    </div>
                    <div className="mv-meta-row">
                      <span className="mv-meta-label">{t("about_mv_label_issuer")}</span>
                      <span className="mv-meta-value">{CERTS[activeCertIndex].issuer}</span>
                    </div>
                    <div className="mv-meta-row">
                      <span className="mv-meta-label">{t("about_mv_label_validity")}</span>
                      <span className="mv-meta-value">{tData(CERTS[activeCertIndex].validity)}</span>
                    </div>
                    <div className="mv-meta-row">
                      <span className="mv-meta-label">{t("about_mv_label_id")}</span>
                      <span className="mv-meta-value" style={{ fontFamily: "monospace" }}>{CERTS[activeCertIndex].credentialId}</span>
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: "24px" }}>
                  <a 
                    href={CERTS[activeCertIndex].credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline-linkedin"
                    style={{ textAlign: "center" }}
                  >
                    {t("about_mv_verify_btn")} <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
            </div>

          </div>
        )}
      </div>
    </>
  );
}
