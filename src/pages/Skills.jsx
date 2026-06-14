import { SKILLS_DETAILED, TIMELINE } from "../data/projects";
import useScrollAnimation from "../hooks/useScrollAnimation";
import { useLanguage } from "../context/LanguageContext";

export default function Skills() {
  useScrollAnimation();
  const { t, tData } = useLanguage();

  return (
    <>
      {/* ===== SKILLS GRID ===== */}
      <section className="skills-page-section" style={{ paddingTop: "120px", paddingBottom: "40px" }}>
        <div className="container">
          <h2 className="section-title scroll-animate">{t("skills_title")}</h2>
          <p
            className="scroll-animate"
            style={{ textAlign: "center", maxWidth: "600px", margin: "-20px auto 40px", color: "var(--text2)", fontSize: "14px", lineHeight: 1.6 }}
          >
            {t("skills_subtitle")}
          </p>

          <div className="skills-grid-detailed">
            {SKILLS_DETAILED.map((s, i) => (
              <div
                key={s.name}
                className="skill-card-detailed scroll-animate"
                style={{ transitionDelay: `${i * 0.05}s` }}
              >
                <div className="skill-ring-wrap" style={{ "--skill-color": s.color, "--percentage": s.pct }}>
                  <div className="skill-ring-inner">
                    <img src={s.icon} alt={s.name} />
                  </div>
                </div>
                <h3 className="skill-title-detailed">{s.name}</h3>
                <span className="skill-pct-detailed">{s.pct}%</span>
                <p className="skill-label-detailed">{tData(s.desc)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROJECT TIMELINE ===== */}
      <section className="timeline-section">
        <div className="container">
          <h2 className="section-title scroll-animate">{t("timeline_title")}</h2>
          <p
            className="scroll-animate"
            style={{ textAlign: "center", maxWidth: "600px", margin: "-20px auto 40px", color: "var(--text2)", fontSize: "14px", lineHeight: 1.6 }}
          >
            {t("timeline_subtitle")}
          </p>

          <div className="timeline-container">
            <div className="timeline-line"></div>

            {TIMELINE.map((tItem, i) => (
              <div key={i} className={`timeline-item scroll-animate animate-${tItem.dir}-dir`}>
                <div className="timeline-badge"></div>
                <div className="timeline-card">
                  <div className="timeline-header">
                    <div className="timeline-title-wrap">
                      <h3 className="timeline-title">{tItem.title}</h3>
                      <p className="timeline-role">{tData(tItem.role)}</p>
                    </div>
                    <span className="timeline-date">{tItem.date}</span>
                  </div>
                  <p className="timeline-desc">{tData(tItem.desc)}</p>
                  <div className="timeline-tags">
                    {tItem.tags.map((tag, j) => (
                      <span key={j} className="timeline-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
