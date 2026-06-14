import { useState } from "react";
import { PROJECTS, CATEGORIES, VIZ_SOURCES } from "../data/projects";
import VizCard from "../components/VizCard";
import ProjectModal from "../components/ProjectModal";
import CountUp from "../components/CountUp";

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const filtered =
    activeFilter === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <>
      {/* ===== HERO ===== */}
      <section id="home" className="hero-stacked">
        <div className="container">
          <div className="hero-stacked-content animate-fade">
            <p className="eyebrow-label">Data Portfolio</p>
            <h1>
              Turning <span className="data-highlight">Data</span> Into Compelling{" "}
              <span className="story-highlight">Stories</span>
            </h1>
            <p className="hero-sub">
              Data Analyst &nbsp;·&nbsp; Data Science &nbsp;·&nbsp; AI Automation
              <br />
              <span className="hero-sub-small">
                Informatics Engineering @ ITERA · DBS Foundation Coding Camp 2026
              </span>
            </p>
            <div className="hero-ctas">
              <a href="#projects" className="cta-button">Explore My Work</a>
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
              <div className="kpi-label">Data Rows Analyzed</div>
            </div>
            <div className="kpi-card">
              <div className="kpi-icon"><i className="fas fa-chart-line"></i></div>
              <div className="kpi-num">
                <CountUp value={VIZ_SOURCES.length} />
              </div>
              <div className="kpi-label">Interactive Dashboards</div>
            </div>
            <div className="kpi-card">
              <div className="kpi-icon"><i className="fas fa-brain"></i></div>
              <div className="kpi-num">
                <CountUp value="5+" />
              </div>
              <div className="kpi-label">ML Models Deployed</div>
            </div>
            <div className="kpi-card">
              <div className="kpi-icon"><i className="fas fa-folder-open"></i></div>
              <div className="kpi-num">
                <CountUp value={PROJECTS.length} />
              </div>
              <div className="kpi-label">Total Projects</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROJECTS ===== */}
      <section id="projects" className="projects-section">
        <div className="container">
          <h2 className="section-title animate-left">Data Projects</h2>

          <div className="filter-buttons animate-right">
            {CATEGORIES.map((c) => (
              <button
                key={c.value}
                className={`filter-btn ${activeFilter === c.value ? "active" : ""}`}
                onClick={() => setActiveFilter(c.value)}
              >
                {c.label}
              </button>
            ))}
          </div>

          <div className="projects-grid animate-right">
            {filtered.map((p, idx) => (
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
                  <div className="pcn-icon" style={{ color: p.color }}>
                    <i className={`fas ${p.icon}`}></i>
                  </div>
                  <span className="pcn-badge" style={{ background: p.colorLight, color: p.color }}>
                    {p.categoryLabel}
                  </span>
                  <i className="fas fa-arrow-up-right-from-square pcn-arrow"></i>
                </div>
                <div className="pcn-body">
                  <h3 className="pcn-title">{p.title}</h3>
                  <p className="pcn-desc">{p.shortDesc}</p>
                  <div className="pcn-tags">
                    {p.tags.map((t, i) => (
                      <span key={i} className="pcn-tag">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="pcn-metrics">
                  {p.metrics.map((m, i) => (
                    <div key={i} className="pcn-metric">
                      <p className="pcn-mval">{m.value}</p>
                      <p className="pcn-mlabel">{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT (preview) ===== */}
      <section id="about" className="about-section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-inner">
            <div className="about-content animate-left">
              <p className="about-bio">
                Informatics Engineering student at <strong>ITERA, Bandar Lampung</strong>.
                I transform raw data into meaningful insights through analysis,
                visualization, and storytelling. Currently part of{" "}
                <strong>DBS Foundation Coding Camp 2026</strong> as a Data Scientist.
              </p>

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
                src="/Gambar/WhatsApp Image 2024-10-09 at 09.50.18_5da5c080.png"
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
