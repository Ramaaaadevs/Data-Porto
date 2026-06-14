import { SKILLS_DETAILED, TIMELINE } from "../data/projects";
import useScrollAnimation from "../hooks/useScrollAnimation";

export default function Skills() {
  useScrollAnimation();

  return (
    <>
      {/* ===== SKILLS GRID ===== */}
      <section className="skills-page-section" style={{ paddingTop: "120px", paddingBottom: "40px" }}>
        <div className="container">
          <h2 className="section-title scroll-animate">Skills &amp; Expertise</h2>
          <p
            className="scroll-animate"
            style={{ textAlign: "center", maxWidth: "600px", margin: "-20px auto 40px", color: "var(--text2)", fontSize: "14px", lineHeight: 1.6 }}
          >
            Teknologi dan tools yang saya kuasai untuk analisis data eksploratif, pemodelan prediktif, dan visualisasi informasi.
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
                <p className="skill-label-detailed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROJECT TIMELINE ===== */}
      <section className="timeline-section">
        <div className="container">
          <h2 className="section-title scroll-animate">Riwayat Proyek</h2>
          <p
            className="scroll-animate"
            style={{ textAlign: "center", maxWidth: "600px", margin: "-20px auto 40px", color: "var(--text2)", fontSize: "14px", lineHeight: 1.6 }}
          >
            Kronologi pengerjaan proyek analisis data, visualisasi interaktif, dan rekayasa model kecerdasan buatan.
          </p>

          <div className="timeline-container">
            <div className="timeline-line"></div>

            {TIMELINE.map((t, i) => (
              <div key={i} className={`timeline-item scroll-animate animate-${t.dir}-dir`}>
                <div className="timeline-badge"></div>
                <div className="timeline-card">
                  <div className="timeline-header">
                    <div className="timeline-title-wrap">
                      <h3 className="timeline-title">{t.title}</h3>
                      <p className="timeline-role">{t.role}</p>
                    </div>
                    <span className="timeline-date">{t.date}</span>
                  </div>
                  <p className="timeline-desc">{t.desc}</p>
                  <div className="timeline-tags">
                    {t.tags.map((tag, j) => (
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
