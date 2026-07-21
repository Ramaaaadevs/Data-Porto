import { useState } from "react";
import GithubGraph from "../components/GithubGraph";
import useScrollAnimation from "../hooks/useScrollAnimation";
import { useLanguage } from "../context/LanguageContext";
import { EDUCATION, EXPERIENCE } from "../data/projects";

export default function About() {
  useScrollAnimation();
  const { t, tData, language } = useLanguage();

  return (
    <>
      {/* ===== ABOUT HERO ===== */}
      <section className="about-hero-section" style={{ paddingTop: "120px", paddingBottom: "60px" }}>
        <div className="container">
          <div className="about-hero-grid scroll-animate">
            <div className="about-hero-photo">
              <img
                src="/Gambar/formal_baru.png"
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
              <div className="about-hero-actions">
                <a href="/CV_Diwan Ramadhani.pdf" download className="cta-button" style={{ padding: "10px 20px", fontSize: "13px" }}>
                  <i className="fas fa-file-download"></i> {t("about_download_cv")}
                </a>
              </div>

              <div className="about-hero-links">
                <a href="https://github.com/Ramaaaadevs" target="_blank" rel="noreferrer" className="contact-chip">
                  <i className="fab fa-github"></i> <span>Ramaaaadevs</span>
                </a>
                <a href="https://www.linkedin.com/in/diwan-ramadhani-dwi-putra/" target="_blank" rel="noreferrer" className="contact-chip">
                  <i className="fab fa-linkedin"></i> <span>LinkedIn</span>
                </a>
                <a href="mailto:diwanrdp6@gmail.com" className="contact-chip">
                  <i className="fas fa-envelope"></i> <span>diwanrdp6@gmail.com</span>
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
            style={{ textAlign: "center", maxWidth: "750px", margin: "-20px auto 40px", color: "var(--text2)", fontSize: "14px", lineHeight: 1.6 }}
          >
            {t("about_edu_subtitle")}
          </p>

          <div className="edu-exp-grid">
            {/* Left Column: Education */}
            <div className="edu-column">
              <h3 className="column-title"><i className="fas fa-graduation-cap"></i> {t("about_edu_title_col")}</h3>
              {EDUCATION.map((edu, idx) => (
                <div className="linkedin-card scroll-animate animate-left-dir" key={idx}>
                  <div className="lic-logo-container">
                    <img src={edu.logo} alt={edu.institution} className="lic-logo" />
                  </div>
                  <div className="lic-content">
                    <h4 className="lic-title">{edu.institution}</h4>
                    <p className="lic-subtitle">{tData(edu.degree)}</p>
                    <p className="lic-meta">{edu.period} {edu.grade ? `· ${edu.grade}` : ""}</p>
                    <p className="lic-desc">{tData(edu.desc)}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column: Experience */}
            <div className="exp-column">
              <h3 className="column-title"><i className="fas fa-briefcase"></i> {t("about_exp_title_col")}</h3>
              {EXPERIENCE.map((exp, idx) => {
                if (exp.type === "single") {
                  return (
                    <div className="linkedin-card scroll-animate animate-right-dir" key={idx}>
                      <div className="lic-logo-container">
                        <img src={exp.logo} alt={exp.company} className="lic-logo" />
                      </div>
                      <div className="lic-content">
                        <h4 className="lic-role">{tData(exp.role)}</h4>
                        <p className="lic-company">{exp.company} · {tData(exp.employmentType)}</p>
                        <p className="lic-meta">{tData(exp.period)}</p>
                        <p className="lic-meta" style={{ marginTop: "2px", color: "var(--text3)" }}>{tData(exp.location)}</p>
                        <ul className="lic-bullets">
                          {exp.bullets.map((b, bIdx) => (
                            <li key={bIdx}>{tData(b)}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div className="linkedin-card grouped scroll-animate animate-right-dir" key={idx}>
                      <div className="lic-logo-container">
                        <img src={exp.logo} alt={exp.company} className="lic-logo" />
                      </div>
                      <div className="lic-content">
                        <h4 className="lic-company-grouped">{exp.company}</h4>
                        <p className="lic-company-meta-grouped">{tData(exp.employmentType)}</p>
                        <p className="lic-company-meta-grouped" style={{ color: "var(--text3)" }}>{tData(exp.location)}</p>
                        
                        <div className="lic-nested-roles-container">
                          <div className="lic-timeline-line"></div>
                          {exp.roles.map((r, rIdx) => (
                            <div key={rIdx} className="lic-nested-role-item">
                              <div className="lic-timeline-dot"></div>
                              <div className="lic-nested-role-content">
                                <h5 className="lic-nested-role-title">{tData(r.role)}</h5>
                                <p className="lic-nested-role-period">{tData(r.period)}</p>
                                <ul className="lic-bullets" style={{ marginTop: "8px" }}>
                                  {r.bullets.map((b, bIdx) => (
                                    <li key={bIdx}>{tData(b)}</li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
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


    </>
  );
}
