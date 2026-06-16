import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { TECH_ICONS } from "../data/projects";

export default function ProjectModal({ project, onClose }) {
  const { t, tData } = useLanguage();
  const [showSlideshow, setShowSlideshow] = useState(false);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  useEffect(() => {
    if (!showSlideshow || !project || !project.slides) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setShowSlideshow(false);
      } else if (e.key === "ArrowLeft") {
        setActiveSlideIndex(prev => Math.max(0, prev - 1));
      } else if (e.key === "ArrowRight") {
        setActiveSlideIndex(prev => Math.min(project.slides.length - 1, prev + 1));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showSlideshow, project]);

  if (!project) return null;
  const p = project;

  return (
    <div className="project-modal open" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal-content">
        <button className="close-modal" onClick={onClose}>&times;</button>

        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
          <div
            style={{
              width: "44px", height: "44px", borderRadius: "10px",
              background: p.colorLight, color: p.color,
              display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px",
            }}
          >
            <i className={`fas ${p.icon}`}></i>
          </div>
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: "18px", fontWeight: 700, color: "#0d1f3d", marginBottom: "4px" }}>{p.title}</h2>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
              <span
                style={{
                  fontSize: "10.5px", fontWeight: 600, padding: "2px 8px", borderRadius: "99px",
                  background: p.colorLight, color: p.color,
                }}
              >
                {tData(p.categoryLabel)}
              </span>
              <span style={{ fontSize: "11px", color: "#888" }}>•</span>
              <span style={{ fontSize: "11px", color: "#666", fontWeight: 500 }}>
                {tData(p.context)}
              </span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", fontSize: "11px", color: "#666" }}>
              <span><i className="far fa-user" style={{ marginRight: "4px", color: p.color }}></i><strong>Role:</strong> {tData(p.role)}</span>
              <span><i className="far fa-calendar-alt" style={{ marginRight: "4px", color: p.color }}></i>{p.date}</span>
            </div>
          </div>
        </div>

        <p style={{ color: "#555", fontSize: "14px", lineHeight: 1.75, marginBottom: "20px" }}>{tData(p.fullDesc)}</p>

        <div className="cs-section">
          <div className="cs-title"><i className="fas fa-exclamation-circle"></i> {t("proj_modal_challenge")}</div>
          <div className="cs-text">{tData(p.problem)}</div>
        </div>

        <div className="cs-section">
          <div className="cs-title"><i className="fas fa-cogs"></i> {t("proj_modal_methodology")}</div>
          <div className="cs-text">{tData(p.methodology)}</div>
        </div>

        <div className="cs-section">
          <div className="cs-title"><i className="fas fa-chart-line"></i> {t("proj_modal_impact")}</div>
          <div className="cs-text">{tData(p.impact)}</div>
        </div>

        <div
          style={{
            display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "8px",
            background: "#f5f6fa", borderRadius: "12px", padding: "14px",
            marginBottom: "20px", border: "1px solid rgba(13,31,61,0.06)",
          }}
        >
          {p.metrics.map((m, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <p style={{ fontWeight: 700, fontSize: "15px", color: "#0d1f3d" }}>{m.value}</p>
              <p style={{ fontSize: "11px", color: "#888" }}>{tData(m.label)}</p>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "20px" }}>
          {p.tags.map((t, i) => {
            const iconUrl = TECH_ICONS[t];
            if (!iconUrl) return null;
            return (
              <span
                key={i}
                className="tech-tag-icon"
                title={t}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img src={iconUrl} alt={t} className="tech-icon-img" />
              </span>
            );
          })}
        </div>

        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <a
            href={p.github}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: "6px", padding: "9px 18px",
              borderRadius: "8px", border: "1px solid #ddd", fontSize: "13px", fontWeight: 600,
              color: "#333", textDecoration: "none", background: "#fff", transition: "all 0.2s",
            }}
          >
            <i className="fab fa-github"></i> {t("proj_modal_view_github")}
          </a>
          {p.demo && (
            <a
              href={p.demo}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: "6px", padding: "9px 18px",
                borderRadius: "8px", background: "linear-gradient(135deg,#6558f5,#4a7cf7)",
                color: "#fff", fontSize: "13px", fontWeight: 600, textDecoration: "none",
                border: "none", transition: "all 0.2s",
              }}
            >
              <i className="fas fa-external-link-alt"></i> {t("proj_modal_live_demo")}
            </a>
          )}
          {p.slides && p.slides.length > 0 && (
            <button
              onClick={() => {
                setActiveSlideIndex(0);
                setShowSlideshow(true);
              }}
              style={{
                display: "inline-flex", alignItems: "center", gap: "6px", padding: "9px 18px",
                borderRadius: "8px", background: "linear-gradient(135deg,#10b981,#059669)",
                color: "#fff", fontSize: "13px", fontWeight: 600, border: "none", cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              <i className="fas fa-desktop"></i> {t("proj_modal_view_presentation")}
            </button>
          )}
        </div>
      </div>

      {/* Slideshow Lightbox Overlay */}
      {showSlideshow && p.slides && p.slides.length > 0 && (
        <div
          className="presentation-backdrop open"
          onClick={(e) => { if (e.target === e.currentTarget) setShowSlideshow(false); }}
        >
          <div className="presentation-container">
            <div className="presentation-header">
              <div className="presentation-title">
                <i className="fas fa-desktop" style={{ color: p.color }}></i>
                <span>{p.title} - {t("proj_modal_view_presentation")}</span>
              </div>
              <button className="presentation-close-btn" onClick={() => setShowSlideshow(false)}>&times;</button>
            </div>

            <div className="presentation-viewport">
              <button
                className="presentation-nav-btn prev"
                onClick={() => setActiveSlideIndex(prev => Math.max(0, prev - 1))}
                disabled={activeSlideIndex === 0}
              >
                <i className="fas fa-chevron-left"></i>
              </button>

              <div className="presentation-slide-wrap">
                <img
                  key={activeSlideIndex}
                  src={p.slides[activeSlideIndex]}
                  alt={`${p.title} - Slide ${activeSlideIndex + 1}`}
                  className="presentation-slide-img"
                  style={{ color: "#fff" }}
                />
              </div>

              <button
                className="presentation-nav-btn next"
                onClick={() => setActiveSlideIndex(prev => Math.min(p.slides.length - 1, prev + 1))}
                disabled={activeSlideIndex === p.slides.length - 1}
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>

            <div className="presentation-footer">
              <div className="presentation-dots">
                {p.slides.map((_, idx) => (
                  <button
                    key={idx}
                    className={`presentation-dot ${idx === activeSlideIndex ? "active" : ""}`}
                    onClick={() => setActiveSlideIndex(idx)}
                    style={{
                      background: idx === activeSlideIndex ? p.color : "rgba(0,0,0,0.15)"
                    }}
                  />
                ))}
              </div>
              <div className="presentation-counter">
                {activeSlideIndex + 1} / {p.slides.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

