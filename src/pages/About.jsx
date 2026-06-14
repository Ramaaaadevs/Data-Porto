import { CERTS } from "../data/projects";
import GithubGraph from "../components/GithubGraph";
import useScrollAnimation from "../hooks/useScrollAnimation";

export default function About() {
  useScrollAnimation();

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
              <p className="about-hero-tagline">Data Analyst &nbsp;·&nbsp; Data Science &nbsp;·&nbsp; AI Automation</p>
              <p className="about-hero-bio">
                Mahasiswa Teknik Informatika di <strong>Institut Teknologi Sumatera (ITERA)</strong>, Bandar Lampung.
                Saya berfokus pada analisis data eksploratif, visualisasi informasi, dan pengembangan model kecerdasan buatan.
                Saya percaya bahwa data yang mentah dapat diubah menjadi insight bermakna melalui proses analisis yang tepat,
                storytelling visual, dan otomasi cerdas.
              </p>
              
              {/* CV & Portfolio Download Action Buttons */}
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "24px" }}>
                <a href="/CV_Diwan_Ramadhani.pdf" download className="cta-button" style={{ padding: "10px 20px", fontSize: "13px" }}>
                  <i className="fas fa-file-download"></i> Download CV
                </a>
                <a href="/Portfolio_Diwan_Ramadhani.pdf" download className="btn-outline" style={{ padding: "9px 18px", fontSize: "13px" }}>
                  <i className="fas fa-file-pdf"></i> Download Portfolio (PDF)
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
          <h2 className="section-title scroll-animate">Pendidikan & Pengalaman</h2>
          <p
            className="scroll-animate"
            style={{ textAlign: "center", maxWidth: "600px", margin: "-20px auto 40px", color: "var(--text2)", fontSize: "14px", lineHeight: 1.6 }}
          >
            Perjalanan akademik dan profesional yang membentuk keahlian saya di bidang data.
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
                    <p className="about-edu-subtitle">S1 Teknik Informatika</p>
                  </div>
                  <span className="timeline-date">2023 - Sekarang</span>
                </div>
                <p className="about-edu-desc">
                  Mendalami dasar-dasar ilmu komputer, algoritma, struktur data, dan pemrograman.
                  Aktif mengerjakan proyek-proyek data analytics dan machine learning sebagai bagian dari perkuliahan dan kegiatan mandiri.
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
                    <p className="about-edu-subtitle">Data Scientist Track</p>
                  </div>
                  <span className="timeline-date">Feb 2026 - Jun 2026</span>
                </div>
                <p className="about-edu-desc">
                  Program intensif data science yang disponsori DBS Foundation bekerja sama dengan Dicoding.
                  Mempelajari machine learning, deep learning, dan deployment model AI.
                  Mengerjakan capstone project "FaceFit Barber" sebagai Team Lead tim CC26-PSU304.
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
                  Menyelesaikan berbagai kelas online di bidang analisis data, machine learning,
                  dan pengembangan aplikasi. Platform pembelajaran utama yang memperkuat fondasi teknis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CERTIFICATIONS ===== */}
      <section className="about-cert-section">
        <div className="container">
          <h2 className="section-title scroll-animate">Sertifikasi</h2>
          <p
            className="scroll-animate"
            style={{ textAlign: "center", maxWidth: "600px", margin: "-20px auto 40px", color: "var(--text2)", fontSize: "14px", lineHeight: 1.6 }}
          >
            Sertifikat kompetensi yang telah saya peroleh dari platform dan program pembelajaran terpercaya.
          </p>

          <div className="projects-grid animate-right">
            {CERTS.map((c, i) => (
              <div className="project-card-new" key={i} style={{ animationDelay: `${i * 0.08}s` }}>
                <div className="pcn-thumb-wrap">
                  <div
                    style={{
                      width: "100%", height: "100%", background: c.colorLight,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexDirection: "column", gap: "10px", padding: "20px",
                    }}
                  >
                    <div style={{ background: c.color, borderRadius: "12px", width: "56px", height: "56px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                      </svg>
                    </div>
                    <div style={{ textAlign: "center" }}>
                      <p style={{ fontSize: "11px", fontWeight: 700, color: c.color, letterSpacing: "0.05em", textTransform: "uppercase", margin: 0 }}>
                        {c.issuer}
                      </p>
                      <p style={{ fontSize: "10px", color: "#888", margin: "2px 0 0" }}>{c.year}</p>
                    </div>
                  </div>
                </div>
                <div className="pcn-header">
                  <div className="pcn-icon" style={{ background: c.colorLight, color: c.color }}>
                    <i className="fas fa-certificate"></i>
                  </div>
                  <span className="pcn-badge" style={{ background: c.colorLight, color: c.color }}>Certificate</span>
                  <i className="fas fa-arrow-up-right-from-square pcn-arrow"></i>
                </div>
                <div className="pcn-body">
                  <h3 className="pcn-title">{c.title}</h3>
                  <p className="pcn-desc">{c.issuer} · {c.year}</p>
                  <div className="pcn-tags">
                    {c.tags.map((t, j) => (
                      <span key={j} className="pcn-tag">{t}</span>
                    ))}
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
            <h2 className="section-title">Coding Activity</h2>
            <p style={{ textAlign: "center", color: "var(--text2)", fontSize: "14px", margin: "-20px auto 40px" }}>Year of consistent development</p>
          </div>

          <GithubGraph username="Ramaaaadevs" />
        </div>
      </section>
    </>
  );
}
