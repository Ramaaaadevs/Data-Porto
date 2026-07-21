import { useState } from "react";
import { SKILLS_DETAILED, CERTS } from "../data/projects";
import useScrollAnimation from "../hooks/useScrollAnimation";
import { useLanguage } from "../context/LanguageContext";

export default function Skills() {
  // ============================================================
  // CONFIGURATION: Ubah angka di bawah untuk mengubah jumlah kolom grid skill di desktop (3 atau 4)
  // ============================================================
  const cols = 4;

  useScrollAnimation([]);
  const [activeCertIndex, setActiveCertIndex] = useState(-1);
  const [activePage, setActivePage] = useState(0);
  const [isMediaViewerOpen, setIsMediaViewerOpen] = useState(false);
  const { t, tData } = useLanguage();

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
      {/* ===== SKILLS GRID ===== */}
      <section className="skills-page-section" style={{ paddingTop: "120px", paddingBottom: "40px" }}>
        <div className="container">
          <h2 className="section-title scroll-animate">{t("skills_title")}</h2>
          <p
            className="scroll-animate"
            style={{ textAlign: "center", maxWidth: "600px", margin: "-20px auto 40px", color: "var(--text2)", fontSize: "14px", lineHeight: 1.6 }}
          >
            {t("skills_subtitle")}
          </p>

          <div className={`skills-grid-detailed cols-${cols}`}>
            {SKILLS_DETAILED.map((s, i) => (
              <div
                key={s.name}
                className="skill-card-detailed scroll-animate"
                style={{ transitionDelay: `${i * 0.05}s` }}
              >
                <div className="skill-ring-wrap" style={{ "--skill-color": s.color, "--percentage": s.pct }}>
                  <div className="skill-ring-inner">
                    <img src={s.icon} alt={s.name} />
                  </div>
                </div>
                <h3 className="skill-title-detailed">{s.name}</h3>
                <span className="skill-pct-detailed">{s.pct}%</span>
                <p className="skill-label-detailed">{tData(s.desc)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CERTIFICATIONS ===== */}
      <section className="about-cert-section" style={{ paddingBottom: "80px" }}>
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
