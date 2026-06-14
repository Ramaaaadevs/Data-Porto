import { useState } from "react";
import { PROJECTS, CATEGORIES } from "../data/projects";
import ProjectModal from "../components/ProjectModal";
import { useLanguage } from "../context/LanguageContext";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const { t, tData } = useLanguage();

  const filtered =
    activeFilter === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="projects-section" style={{ paddingTop: "120px" }}>
      <div className="container">
        <h2 className="section-title animate-left">{t("proj_title")}</h2>

        <div className="filter-buttons animate-right">
          {CATEGORIES.map((c) => (
            <button
              key={c.value}
              className={`filter-btn ${activeFilter === c.value ? "active" : ""}`}
              onClick={() => setActiveFilter(c.value)}
            >
              {tData(c.label)}
            </button>
          ))}
        </div>

        <div className="projects-list-vertical animate-right">
          {filtered.map((p, idx) => (
            <div
              key={p.id}
              className="project-card-horizontal"
              style={{ "--card-color": p.color, animationDelay: `${idx * 0.05}s` }}
              onClick={() => setSelectedProject(p)}
            >
              <div className="pch-thumb-wrap">
                <img src={p.thumbnail} alt={p.title} className="pch-thumb" />
              </div>
              <div className="pch-content">
                <div className="pch-header">
                  <div className="pch-icon-title">
                    <div className="pch-icon" style={{ background: p.colorLight, color: p.color }}>
                      <i className={`fas ${p.icon}`}></i>
                    </div>
                    <h3 className="pch-title">{p.title}</h3>
                  </div>
                  <span className="pch-badge" style={{ background: p.colorLight, color: p.color }}>
                    {tData(p.categoryLabel)}
                  </span>
                </div>
                <p className="pch-desc">{tData(p.shortDesc)}</p>
                <div className="pch-tags">
                  {p.tags.map((t, i) => (
                    <span key={i} className="pch-tag">{t}</span>
                  ))}
                </div>
                <div className="pch-footer">
                  <div className="pch-metrics">
                    {p.metrics.map((m, i) => (
                      <div key={i} className="pch-metric">
                        <span className="pch-mval">{m.value}</span>
                        <span className="pch-mlabel">{tData(m.label)}</span>
                      </div>
                    ))}
                  </div>
                  <i className="fas fa-arrow-right pch-arrow"></i>
                </div>
              </div>
            </div>
          ))}
        </div>

        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      </div>
    </section>
  );
}
