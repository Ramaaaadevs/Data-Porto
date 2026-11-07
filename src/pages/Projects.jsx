import { useState } from "react";
import { PROJECTS, CATEGORIES, TECH_ICONS } from "../data/projects";
import ProjectModal from "../components/ProjectModal";
import { useLanguage } from "../context/LanguageContext";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const { tData, language } = useLanguage();

  const filtered =
    activeFilter === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  const getCategoryCount = (val) => {
    if (val === "all") return PROJECTS.length;
    return PROJECTS.filter((p) => p.category === val).length;
  };

  return (
    <div className="db-page animate-fade">
      <section className="db-section">
        <h1 className="db-page-heading">
          {language === "id" ? "Proyek" : "Projects"}
        </h1>
        <p className="db-page-sub">
          {language === "id"
            ? "Kumpulan proyek sains data, visualisasi analitik, aplikasi web, dan mobile yang telah saya bangun."
            : "A showcase of data science pipelines, analytics dashboards, and fullstack applications I've built."}
        </p>

        <div className="db-sec-divider"></div>

        {/* Filter Pills with Counts */}
        <div className="db-filter-pills" style={{ marginBottom: "24px" }}>
          {CATEGORIES.map((c) => (
            <button
              key={c.value}
              type="button"
              className={`db-filter-pill ${activeFilter === c.value ? "active" : ""}`}
              onClick={() => setActiveFilter(c.value)}
            >
              <span>{tData(c.label)}</span>
              <span className="db-pill-count">{getCategoryCount(c.value)}</span>
            </button>
          ))}
        </div>

        {/* 2-Column Project Cards Grid */}
        <div className="db-projects-grid">
          {filtered.map((p) => (
            <div
              key={p.id}
              className="db-proj-card"
              onClick={() => setSelectedProject(p)}
            >
              <div className="db-proj-thumb-wrap">
                <img src={p.thumbnail} alt={p.title} className="db-proj-thumb" loading="lazy" />
                {p.featured && (
                  <span className="db-featured-ribbon">
                    <i className="fas fa-thumbtack"></i> Featured
                  </span>
                )}
              </div>

              <div className="db-proj-body">
                {/* Category & Context Chips */}
                <div className="db-proj-meta-tags">
                  <span className="db-proj-meta-chip">{tData(p.categoryLabel)}</span>
                  <span className="db-proj-meta-chip">{tData(p.context)}</span>
                </div>

                <h3 className="db-proj-title">{p.title}</h3>
                <p className="db-proj-desc">{tData(p.shortDesc)}</p>

                {/* Key Metrics Strip inside Card (Differentiator!) */}
                {p.metrics && p.metrics.length > 0 && (
                  <div className="db-proj-metrics">
                    {p.metrics.map((m, idx) => (
                      <div key={idx} className="db-proj-metric-cell">
                        <span className="db-proj-mval">{m.value}</span>
                        <span className="db-proj-mlabel">{tData(m.label)}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech Stack Pill Badges */}
                <div className="db-proj-tech-row">
                  {p.tags.map((tag, i) => {
                    const iconUrl = TECH_ICONS[tag];
                    return (
                      <span key={i} className="db-proj-tech-pill">
                        {iconUrl && <img src={iconUrl} alt={tag} />}
                        <span>{tag}</span>
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}
