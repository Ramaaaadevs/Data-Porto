import { useState } from "react";
import { Link } from "react-router-dom";
import { PROJECTS, VIZ_SOURCES, TECH_ICONS, CERTS } from "../data/projects";
import VizCard from "../components/VizCard";
import ProjectModal from "../components/ProjectModal";
import CountUp from "../components/CountUp";
import { useLanguage } from "../context/LanguageContext";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);
  const { t, tData, language } = useLanguage();

  const featuredProjects = PROJECTS.filter((p) => p.featured);

  return (
    <>
      {/* ===== HERO ===== */}
      <section id="home" className="hero-stacked">
        <div className="container">
          <div className="hero-stacked-content animate-fade">
            <h1>
              {language === "id" ? (
                <>
                  Mengubah <span className="data-highlight">Data</span> Menjadi Cerita yang{" "}
                  <span className="story-highlight">Menarik</span>
                </>
              ) : (
                <>
                  Turning <span className="data-highlight">Data</span> Into Compelling{" "}
                  <span className="story-highlight">Stories</span>
                </>
              )}
            </h1>
            <p className="hero-sub">
              {t("about_hero_tagline")}
              <br />
              <span className="hero-sub-small">
                {t("home_hero_sub_small")}
              </span>
            </p>
            <div className="hero-ctas">
              <a href="#projects" className="cta-button">{t("home_explore_my_work")}</a>
              <a href="https://github.com/Ramaaaadevs" target="_blank" rel="noreferrer" className="btn-outline">
                <i className="fab fa-github"></i> GitHub
              </a>
              <a href="https://www.linkedin.com/in/diwan-ramadhani-dwi-putra/" target="_blank" rel="noreferrer" className="btn-outline">
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
            </div>
          </div>

          <div className="hero-stacked-viz animate-fade">
            <VizCard />
          </div>
        </div>
      </section>

      {/* ===== KPI STATS ===== */}
      <section className="kpi-section animate-fade">
        <div className="container">
          <div className="kpi-grid">
            <div className="kpi-card">
              <div className="kpi-icon"><i className="fas fa-database"></i></div>
              <div className="kpi-num">
                <CountUp value="10M+" />
              </div>
              <div className="kpi-label">{t("home_kpi_rows")}</div>
            </div>
            <div className="kpi-card">
              <div className="kpi-icon"><i className="fas fa-laptop-code"></i></div>
              <div className="kpi-num">
                <CountUp value={VIZ_SOURCES.length} />
              </div>
              <div className="kpi-label">{t("home_kpi_dashboards")}</div>
            </div>
            <div className="kpi-card">
              <div className="kpi-icon"><i className="fas fa-award"></i></div>
              <div className="kpi-num">
                <CountUp value={CERTS.length} />
              </div>
              <div className="kpi-label">{t("home_kpi_certs")}</div>
            </div>
            <div className="kpi-card">
              <div className="kpi-icon"><i className="fas fa-folder-open"></i></div>
              <div className="kpi-num">
                <CountUp value={PROJECTS.length} />
              </div>
              <div className="kpi-label">{t("home_kpi_total_projects")}</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROJECTS ===== */}
      <section id="projects" className="projects-section home-projects">
        <div className="container">
          <h2 className="section-title animate-left">{t("home_projects_title")}</h2>

          <div className="projects-grid animate-right">
            {featuredProjects.map((p, idx) => (
              <div
                key={p.id}
                className="project-card-new"
                style={{ "--card-color": p.color, animationDelay: `${idx * 0.05}s` }}
                onClick={() => setSelectedProject(p)}
              >
                <div className="pcn-thumb-wrap">
                  <img src={p.thumbnail} alt={p.title} className="pcn-thumb" />
                </div>
                <div className="pcn-header" style={{ background: p.colorLight }}>
                  <span className="pcn-badge" style={{ background: p.colorLight, color: p.color }}>
                    {tData(p.categoryLabel)}
                  </span>
                  <i className="fas fa-arrow-up-right-from-square pcn-arrow"></i>
                </div>
                <div className="pcn-body">
                  <h3 className="pcn-title">{p.title}</h3>
                  <p className="pcn-desc">{tData(p.shortDesc)}</p>
                  <div className="pcn-tags">
                    {p.tags.map((t, i) => {
                      const iconUrl = TECH_ICONS[t];
                      if (!iconUrl) return null;
                      return (
                        <span key={i} className="pcn-tag tech-tag-icon" title={t}>
                          <img src={iconUrl} alt={t} className="tech-icon-img" />
                        </span>
                      );
                    })}
                  </div>
                </div>
                <div className="pcn-metrics">
                  {p.metrics.map((m, i) => (
                    <div key={i} className="pcn-metric">
                      <p className="pcn-mval">{m.value}</p>
                      <p className="pcn-mlabel">{tData(m.label)}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", justifyContent: "center", marginTop: "40px" }} className="animate-fade">
            <Link to="/projects" className="cta-button" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px" }}>
              {t("home_view_all_projects")} <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== ABOUT (preview) ===== */}
      <section id="about" className="about-section">
        <div className="container">
          <h2 className="section-title">{t("home_about_title")}</h2>
          <div className="about-inner">
            <div className="about-content animate-left">
              <p className="about-bio" dangerouslySetInnerHTML={{ __html: t("home_about_bio") }}></p>

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

            <div className="about-image animate-right">
              <img
                src="/Gambar/formal_baru.png"
                alt="Diwan Ramadhani"
                className="profile-img"
                onError={(e) => { e.currentTarget.style.display = "none"; }}
              />
            </div>
          </div>
        </div>
      </section>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
}
