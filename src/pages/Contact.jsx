import { useState } from "react";
import { createPortal } from "react-dom";
import { useLanguage } from "../context/LanguageContext";

const EXTERNAL_LOGOS = {
  gmail: "https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/svg/gmail.svg",
  linkedin: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
  github: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  pdf: "https://cdn.jsdelivr.net/gh/vscode-icons/vscode-icons/icons/file_type_pdf2.svg",
};

export default function Contact() {
  const { t, language } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [isCvPreviewOpen, setIsCvPreviewOpen] = useState(false);

  const emailAddress = "diwanrdp6@gmail.com";

  const handleCopyEmail = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const channels = [
    {
      id: "email",
      name: "Gmail",
      handle: emailAddress,
      desc:
        language === "id"
          ? "Korespondensi formal untuk tawaran kerja, konsultasi, dan kolaborasi proyek."
          : "Direct correspondence for career opportunities, consulting, and project collaborations.",
      href: `mailto:${emailAddress}`,
      logo: EXTERNAL_LOGOS.gmail,
      actionLabel: language === "id" ? "Kirim Email" : "Compose Email",
      copyable: true,
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      handle: "linkedin.com/in/diwan-ramadhani-dwi-putra",
      desc:
        language === "id"
          ? "Jejaring profesional, rekam jejak karier, dan sertifikasi terverifikasi."
          : "Professional network, career milestones, and verified credentials.",
      href: "https://www.linkedin.com/in/diwan-ramadhani-dwi-putra/",
      logo: EXTERNAL_LOGOS.linkedin,
      actionLabel: language === "id" ? "Buka LinkedIn" : "Connect on LinkedIn",
    },
    {
      id: "github",
      name: "GitHub",
      handle: "github.com/Ramaaaadevs",
      desc:
        language === "id"
          ? "Koleksi repositori open-source, proyek machine learning, dan kode produksi."
          : "Open-source repositories, machine learning projects, and production code.",
      href: "https://github.com/Ramaaaadevs",
      logo: EXTERNAL_LOGOS.github,
      invertInDark: true,
      actionLabel: language === "id" ? "Lihat GitHub" : "Explore GitHub",
    },
  ];

  return (
    <div className="db-page animate-fade">
      <section className="db-section">
        <h1 className="db-page-heading">{t("nav_contact")}</h1>
        <p className="db-page-sub">
          {language === "id"
            ? "Terbuka untuk kolaborasi proyek Sains Data, Pengembangan Web, maupun peluang karier profesional."
            : "Open for Data Science collaborations, Web Engineering projects, and professional career opportunities."}
        </p>

        <div className="db-sec-divider"></div>

        {/* ===== 1. STACKED INTERACTIVE CHANNEL ROWS ===== */}
        <div className="contact-rows-list">
          {channels.map((ch) => (
            <div key={ch.id} className="contact-row-item">
              <div className="contact-row-left">
                <img
                  src={ch.logo}
                  alt={ch.name}
                  className={`contact-ext-logo ${ch.invertInDark ? "invert-dark" : ""}`}
                  loading="lazy"
                />

                <div className="contact-row-info">
                  <div className="contact-row-title-line">
                    <h3 className="contact-row-title">{ch.name}</h3>
                  </div>
                  <a
                    href={ch.href}
                    target={ch.id === "email" ? undefined : "_blank"}
                    rel={ch.id === "email" ? undefined : "noreferrer"}
                    className="contact-row-handle"
                  >
                    {ch.handle}
                  </a>
                  <p className="contact-row-desc">{ch.desc}</p>
                </div>
              </div>

              <div className="contact-row-actions">
                {ch.copyable && (
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className={`contact-btn-secondary ${copied ? "copied" : ""}`}
                  >
                    {copied
                      ? language === "id"
                        ? "Tersalin!"
                        : "Copied!"
                      : language === "id"
                      ? "Salin Email"
                      : "Copy Email"}
                  </button>
                )}
                <a
                  href={ch.href}
                  target={ch.id === "email" ? undefined : "_blank"}
                  rel={ch.id === "email" ? undefined : "noreferrer"}
                  className="contact-btn-primary"
                >
                  <span>{ch.actionLabel}</span>
                  <span className="contact-arrow">↗</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* ===== 2. CURRICULUM VITAE (PDF SHOWCASE BAR WITH PDF LOGO & LIVE PREVIEW) ===== */}
        <div className="contact-cv-showcase">
          <div className="contact-cv-left">
            <img
              src={EXTERNAL_LOGOS.pdf}
              alt="PDF Document"
              className="contact-ext-logo"
              loading="lazy"
            />
            <div className="contact-cv-meta">
              <div className="contact-row-title-line">
                <h3 className="contact-row-title">Curriculum Vitae (Resume)</h3>
              </div>
              <span className="contact-row-handle">CV_Diwan Ramadhani.pdf</span>
              <p className="contact-row-desc">
                {language === "id"
                  ? "Ringkasan komprehensif riwayat pendidikan, pengalaman industri, dan keahlian teknis."
                  : "Comprehensive summary of education, industry experience, and technical competencies."}
              </p>
            </div>
          </div>

          <div className="contact-row-actions">
            <button
              type="button"
              onClick={() => setIsCvPreviewOpen(true)}
              className="contact-btn-secondary"
            >
              {language === "id" ? "Pratinjau PDF" : "Preview PDF"}
            </button>
            <a
              href="/CV_Diwan Ramadhani.pdf"
              download="CV_Diwan_Ramadhani.pdf"
              className="contact-btn-primary"
            >
              <span>{language === "id" ? "Unduh CV" : "Download PDF"}</span>
              <span className="contact-arrow">↓</span>
            </a>
          </div>
        </div>
      </section>

      {/* ===== PORTALED FULLSCREEN CV PDF PREVIEW MODAL ===== */}
      {isCvPreviewOpen &&
        createPortal(
          <div
            className="media-viewer-backdrop open"
            onClick={() => setIsCvPreviewOpen(false)}
          >
            <div
              className="contact-pdf-modal"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="contact-pdf-modal-header">
                <div className="contact-pdf-modal-title">
                  <img
                    src={EXTERNAL_LOGOS.pdf}
                    alt="PDF"
                    style={{ width: "20px", height: "20px", objectFit: "contain" }}
                  />
                  <span>CV_Diwan Ramadhani.pdf</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <a
                    href="/CV_Diwan Ramadhani.pdf"
                    download="CV_Diwan_Ramadhani.pdf"
                    className="contact-btn-primary"
                    style={{ padding: "6px 12px", fontSize: "12px" }}
                  >
                    <span>{language === "id" ? "Unduh PDF" : "Download PDF"}</span>
                    <span>↓</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setIsCvPreviewOpen(false)}
                    className="contact-pdf-close"
                    aria-label="Close Preview"
                  >
                    ✕
                  </button>
                </div>
              </div>
              <iframe
                src="/CV_Diwan Ramadhani.pdf"
                title="Curriculum Vitae Preview"
                className="contact-pdf-iframe"
              />
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}
