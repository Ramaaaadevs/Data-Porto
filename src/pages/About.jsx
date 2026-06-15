import { useState } from "react";
import GithubGraph from "../components/GithubGraph";
import useScrollAnimation from "../hooks/useScrollAnimation";
import { useLanguage } from "../context/LanguageContext";

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
