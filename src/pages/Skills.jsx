import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { CERTS, SKILLS_DETAILED } from "../data/projects";
import { useLanguage } from "../context/LanguageContext";

export default function Skills() {
  const [searchQuery, setSearchQuery] = useState("");
  const [issuerFilter, setIssuerFilter] = useState("all");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeCertIndex, setActiveCertIndex] = useState(-1);
  const [activePage, setActivePage] = useState(0);
  const [isMediaViewerOpen, setIsMediaViewerOpen] = useState(false);
  const { t, tData, language } = useLanguage();
  const dropdownRef = useRef(null);

  const issuers = ["all", ...Array.from(new Set(CERTS.map((c) => c.issuer)))];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredCerts = CERTS.map((c, originalIndex) => ({ ...c, originalIndex })).filter((c) => {
    const titleStr = tData(c.title).toLowerCase();
    const issuerStr = c.issuer.toLowerCase();
    const idStr = (c.credentialId || "").toLowerCase();
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      !q || titleStr.includes(q) || issuerStr.includes(q) || idStr.includes(q);
    const matchesIssuer = issuerFilter === "all" || c.issuer === issuerFilter;
    return matchesSearch && matchesIssuer;
  });

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

  useEffect(() => {
    if (!isMediaViewerOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsMediaViewerOpen(false);
      } else if (e.key === "ArrowRight") {
        const cert = CERTS[activeCertIndex];
        if (cert && cert.pages) {
          setActivePage((prev) => Math.min(cert.pages.length - 1, prev + 1));
        }
      } else if (e.key === "ArrowLeft") {
        setActivePage((prev) => Math.max(0, prev - 1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMediaViewerOpen, activeCertIndex]);

  return (
    <div className="db-page animate-fade">
      {/* ===== 1. ACHIEVEMENTS & CERTIFICATES ===== */}
      <section className="db-section">
        <h1 className="db-page-heading">
          {language === "id" ? "Pencapaian & Sertifikasi" : "Achievements"}
        </h1>
        <p className="db-page-sub">{t("about_cert_subtitle")}</p>

        <div className="db-sec-divider"></div>

        {/* Search & Custom Filter Controls Bar */}
        <div className="db-ach-controls">
          <div className="db-search-box">
            <i className="fas fa-search"></i>
            <input
              type="text"
              placeholder={
                language === "id"
                  ? "Cari sertifikat, penerbit, atau ID..."
                  : "Search certificate, issuer, or ID..."
              }
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                type="button"
                className="db-search-clear"
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
              >
                <i className="fas fa-times"></i>
              </button>
            )}
          </div>

          <div className="db-custom-select" ref={dropdownRef}>
            <button
              type="button"
              className={`db-select-trigger ${dropdownOpen ? "open" : ""}`}
              onClick={() => setDropdownOpen((prev) => !prev)}
              aria-expanded={dropdownOpen}
            >
              <div className="db-select-trigger-left">
                <i className="fas fa-sliders db-select-icon"></i>
                <span className="db-select-label">
                  {issuerFilter === "all"
                    ? language === "id"
                      ? "Semua Penerbit"
                      : "Filter by Issuer (All)"
                    : issuerFilter}
                </span>
              </div>
              <i
                className={`fas fa-chevron-down db-select-chevron ${
                  dropdownOpen ? "rotate" : ""
                }`}
              ></i>
            </button>

            <div className={`db-select-menu ${dropdownOpen ? "open" : ""}`}>
              {issuers.map((iss) => {
                const isSelected = issuerFilter === iss;
                const label =
                  iss === "all"
                    ? language === "id"
                      ? "Semua Penerbit"
                      : "Filter by Issuer (All)"
                    : iss;
                return (
                  <button
                    key={iss}
                    type="button"
                    className={`db-select-option ${isSelected ? "selected" : ""}`}
                    onClick={() => {
                      setIssuerFilter(iss);
                      setDropdownOpen(false);
                    }}
                  >
                    <span className="db-select-opt-text">{label}</span>
                    {isSelected && <i className="fas fa-check db-select-check"></i>}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <p className="db-ach-total">
          Total: <strong>{filteredCerts.length}</strong>
        </p>

        {/* 3-Column Certificate Grid */}
        <div className="db-ach-grid">
          {filteredCerts.map((c) => (
            <div
              key={c.originalIndex}
              className="db-ach-card"
              onClick={() => openMediaViewer(c.originalIndex)}
            >
              <div className="db-ach-thumb-wrap">
                <img
                  src={c.pages && c.pages[0] ? c.pages[0] : c.image}
                  alt={tData(c.title)}
                  className="db-ach-thumb"
                  loading="lazy"
                />
                <div className="db-ach-overlay">
                  <span>
                    <i className="fas fa-expand"></i>{" "}
                    {t("about_cert_show_credential")}
                  </span>
                </div>
              </div>

              <div className="db-ach-body">
                <span className="db-ach-id">{c.credentialId}</span>
                <h3 className="db-ach-title">{tData(c.title)}</h3>
                <p className="db-ach-issuer">{c.issuer}</p>

                {c.tags && c.tags.length > 0 && (
                  <div className="db-ach-tags">
                    {c.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="db-ach-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <p className="db-ach-date">{tData(c.validity).toUpperCase()}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="db-sec-divider"></div>

      {/* ===== 2. TECHNICAL PROFICIENCY BREAKDOWN ===== */}
      <section className="db-section">
        <h2 className="db-sec-title">
          <i className="fas fa-layer-group"></i>{" "}
          <span>
            {language === "id" ? "Detail Kompetensi Teknis" : "Technical Proficiency Breakdown"}
          </span>
        </h2>
        <p className="db-sec-sub">{t("skills_subtitle")}</p>

        <div className="db-prof-grid" style={{ marginTop: "18px" }}>
          {SKILLS_DETAILED.map((s) => (
            <div key={s.name} className="db-prof-card">
              <div className="db-prof-head">
                <div className="db-prof-icon">
                  <img src={s.icon} alt={s.name} />
                </div>
                <div className="db-prof-info">
                  <h4>{s.name}</h4>
                  <span>{s.pct}%</span>
                </div>
              </div>
              <p className="db-prof-desc">{tData(s.desc)}</p>
              <div className="db-prof-bar">
                <div
                  className="db-prof-fill"
                  style={{ width: `${s.pct}%`, background: s.color }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== LINKEDIN-STYLE MEDIA VIEWER MODAL (PORTALED TO BODY) ===== */}
      {isMediaViewerOpen &&
        activeCertIndex >= 0 &&
        activeCertIndex < CERTS.length &&
        createPortal(
          <div className="media-viewer-backdrop open" onClick={closeMediaViewer}>
            <div className="media-viewer-container" onClick={(e) => e.stopPropagation()}>
              <button
                className="mv-close-btn"
                onClick={closeMediaViewer}
                type="button"
                aria-label="Close"
              >
                <i className="fas fa-times"></i>
              </button>

              <div className="mv-left-panel">
                <div className="mv-cert-img-container">
                  <img
                    src={
                      CERTS[activeCertIndex].pages && CERTS[activeCertIndex].pages[activePage]
                        ? CERTS[activeCertIndex].pages[activePage]
                        : CERTS[activeCertIndex].image
                    }
                    alt={`${tData(CERTS[activeCertIndex].title)} - Page ${activePage + 1}`}
                    className="mv-cert-img"
                  />
                </div>

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

              <div className="mv-right-panel" style={{ justifyContent: "flex-start" }}>
                <div
                  className="mv-sidebar-content"
                  style={{ height: "100%", justifyContent: "space-between" }}
                >
                  <div>
                    <div>
                      <h3 className="mv-sidebar-title">{t("about_mv_title")}</h3>
                      <p style={{ fontSize: "12px", color: "var(--text-muted)", margin: 0 }}>
                        {t("about_mv_subtitle")}
                      </p>
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
                        <span className="mv-meta-value" style={{ fontFamily: "monospace" }}>
                          {CERTS[activeCertIndex].credentialId}
                        </span>
                      </div>
                    </div>
                  </div>

                  {CERTS[activeCertIndex].credentialUrl && (
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
                  )}
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}
