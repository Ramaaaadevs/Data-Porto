import { useState } from "react";
import { TECH_ICONS, PROJECTS, VIZ_SOURCES, CERTS } from "../data/projects";
import GithubGraph from "../components/GithubGraph";
import VizCard from "../components/VizCard";
import CountUp from "../components/CountUp";
import { useLanguage } from "../context/LanguageContext";

const SKILL_ITEMS = [
  { name: "Python", cat: "data", icon: TECH_ICONS["Python"], color: "#3572A5" },
  { name: "Pandas", cat: "data", icon: TECH_ICONS["Pandas"], color: "#150458" },
  { name: "Matplotlib", cat: "data", icon: TECH_ICONS["Matplotlib"], color: "#11557c" },
  { name: "OpenCV", cat: "data", icon: TECH_ICONS["OpenCV"], color: "#5C3EE8" },
  { name: "MediaPipe", cat: "data", fa: "fa-face-viewfinder", color: "#0097A7" },
  { name: "Scikit-learn", cat: "data", fa: "fa-brain", color: "#F7931E" },
  { name: "Gemini API", cat: "data", icon: TECH_ICONS["Gemini API"], color: "#8E75B2" },
  { name: "Tableau", cat: "bi", icon: TECH_ICONS["Tableau"], color: "#E97627" },
  { name: "Power BI", cat: "bi", icon: TECH_ICONS["Power BI"], color: "#F2C811" },
  { name: "Streamlit", cat: "bi", icon: TECH_ICONS["Streamlit"], color: "#FF4B4B" },
  { name: "Kepler.gl", cat: "bi", fa: "fa-earth-asia", color: "#1fbad6" },
  {
    name: "Microsoft Excel",
    cat: "bi",
    icon: "https://cdn.jsdelivr.net/gh/vscode-icons/vscode-icons/icons/file_type_excel.svg",
    color: "#107C41",
  },
  { name: "React.js", cat: "web", icon: TECH_ICONS["React"], color: "#61DAFB" },
  { name: "Next.js", cat: "web", icon: TECH_ICONS["Next.js"], color: "#a1a1aa" },
  { name: "TypeScript", cat: "web", icon: TECH_ICONS["TypeScript"], color: "#3178C6" },
  { name: "JavaScript", cat: "web", icon: TECH_ICONS["JavaScript"], color: "#F7DF1E" },
  { name: "Tailwind CSS", cat: "web", icon: TECH_ICONS["Tailwind CSS"], color: "#38B2AC" },
  { name: "HTML5", cat: "web", icon: TECH_ICONS["HTML"], color: "#E34F26" },
  { name: "CSS3", cat: "web", icon: TECH_ICONS["CSS"], color: "#1572B6" },
  { name: "Node.js", cat: "web", icon: TECH_ICONS["Node.js"], color: "#339933" },
  { name: "Express.js", cat: "web", icon: TECH_ICONS["Express"], color: "#a1a1aa" },
  { name: "Laravel", cat: "web", icon: TECH_ICONS["Laravel"], color: "#FF2D20" },
  { name: "Kotlin Multiplatform", cat: "mobile", icon: TECH_ICONS["Kotlin"], color: "#7F52FF" },
  { name: "Compose Multiplatform", cat: "mobile", icon: TECH_ICONS["Compose Multiplatform"], color: "#4285F4" },
  { name: "MySQL", cat: "tools", icon: TECH_ICONS["MySQL"], color: "#4479A1" },
  { name: "PostgreSQL", cat: "tools", icon: TECH_ICONS["PostgreSQL"], color: "#336791" },
  { name: "Redis", cat: "tools", icon: TECH_ICONS["Redis"], color: "#DC382D" },
  { name: "Docker", cat: "tools", icon: TECH_ICONS["Docker"], color: "#2496ED" },
  {
    name: "Git & GitHub",
    cat: "tools",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/git/git-original.svg",
    color: "#F05032",
  },
  { name: "Vercel", cat: "tools", icon: TECH_ICONS["Vercel"], color: "#a1a1aa" },
];

export default function Home() {
  const { t, language } = useLanguage();
  const [skillCat, setSkillCat] = useState("all");

  const skillTabs = [
    { id: "all", label: language === "id" ? "Semua" : "All", count: SKILL_ITEMS.length },
    {
      id: "data",
      label: language === "id" ? "Data & AI" : "Data & AI",
      count: SKILL_ITEMS.filter((s) => s.cat === "data").length,
    },
    {
      id: "bi",
      label: "BI & Viz",
      count: SKILL_ITEMS.filter((s) => s.cat === "bi").length,
    },
    {
      id: "web",
      label: "Web & Backend",
      count: SKILL_ITEMS.filter((s) => s.cat === "web").length,
    },
    {
      id: "mobile",
      label: "Mobile",
      count: SKILL_ITEMS.filter((s) => s.cat === "mobile").length,
    },
    {
      id: "tools",
      label: "DB & DevOps",
      count: SKILL_ITEMS.filter((s) => s.cat === "tools").length,
    },
  ];

  const visibleSkills =
    skillCat === "all" ? SKILL_ITEMS : SKILL_ITEMS.filter((s) => s.cat === skillCat);

  return (
    <div className="db-page animate-fade">
      {/* ===== 1. INTRO BIO ===== */}
      <section className="db-section">
        <h1 className="db-hero-title">
          {language === "id"
            ? "Halo, Saya Diwan Ramadhani Dwi Putra"
            : "Hi, I'm Diwan Ramadhani Dwi Putra"}
        </h1>

        <div className="db-meta-bullets">
          <span>
            • {language === "id" ? "Berdomisili di Bandar Lampung, Indonesia" : "Based in Bandar Lampung, Indonesia"}
          </span>
          <span>• {language === "id" ? "Teknik Informatika @ ITERA" : "Informatics @ ITERA"}</span>
        </div>

        <div className="db-prose">
          {language === "id" ? (
            <>
              <p>
                Saya adalah mahasiswa <strong>Teknik Informatika di Institut Teknologi Sumatera (ITERA)</strong> dengan fokus mendalam pada <strong>Sains Data, Analisis Data, dan Pengembangan Web Fullstack</strong>. Saat ini saya juga aktif sebagai peserta terpilih dalam program <strong>DBS Foundation Coding Camp 2026 (Data Scientist Cohort)</strong> serta melaksanakan magang TI di <strong>PT Kereta Api Indonesia (Persero)</strong>.
              </p>
              <p>
                Fokus utama saya adalah mengubah kumpulan data mentah menjadi wawasan strategis melalui pemodelan prediktif, visualisasi informasi interaktif, serta merancang sistem aplikasi web terotomatisasi yang bersih, skalabel, dan berdampak nyata.
              </p>
            </>
          ) : (
            <>
              <p>
                I am an <strong>Informatics Engineering student at Sumatra Institute of Technology (ITERA)</strong> specializing in <strong>Data Science, Data Analytics, and Fullstack Web Development</strong>. Currently, I am an active scholar in the <strong>DBS Foundation Coding Camp 2026 (Data Scientist Cohort)</strong> and an IT Intern at <strong>PT Kereta Api Indonesia (Persero)</strong>.
              </p>
              <p>
                My primary focus is transforming raw, complex datasets into actionable insights through predictive modeling and interactive visual storytelling—while engineering clean, automated web platforms that deliver real-world impact.
              </p>
            </>
          )}
        </div>

        {/* Highlight KPI Strip (Unique differentiator from reference) */}
        <div className="db-kpi-mini-grid">
          <div className="db-kpi-mini-card">
            <span className="db-kpi-mini-val">
              <CountUp value="10M+" />
            </span>
            <span className="db-kpi-mini-label">{t("home_kpi_rows")}</span>
          </div>
          <div className="db-kpi-mini-card">
            <span className="db-kpi-mini-val">
              <CountUp value={PROJECTS.length} />
            </span>
            <span className="db-kpi-mini-label">{t("home_kpi_total_projects")}</span>
          </div>
          <div className="db-kpi-mini-card">
            <span className="db-kpi-mini-val">
              <CountUp value={VIZ_SOURCES.length} />
            </span>
            <span className="db-kpi-mini-label">{t("home_kpi_dashboards")}</span>
          </div>
          <div className="db-kpi-mini-card">
            <span className="db-kpi-mini-val">
              <CountUp value={CERTS.length} />
            </span>
            <span className="db-kpi-mini-label">{t("home_kpi_certs")}</span>
          </div>
        </div>
      </section>

      <div className="db-sec-divider"></div>

      {/* ===== 2. INTERACTIVE LIVE DASHBOARDS & APPS ===== */}
      <section className="db-section">
        <div className="gh-header-row" style={{ marginBottom: "16px" }}>
          <div>
            <h2 className="db-sec-title">
              <i className="fas fa-chart-line"></i>{" "}
              <span>
                {language === "id"
                  ? "Sandbox Dashboard & Aplikasi Live"
                  : "Interactive Live Dashboards & Apps"}
              </span>
            </h2>
            <p className="db-sec-sub">
              {language === "id"
                ? "Eksplorasi langsung proyek Streamlit, Tableau, dan Web yang sudah di-deploy."
                : "Test and explore my deployed Streamlit, Tableau, and Web apps directly inside this sandbox."}
            </p>
          </div>
        </div>

        <VizCard />
      </section>

      <div className="db-sec-divider"></div>

      {/* ===== 3. SKILLS PILL BADGES ===== */}
      <section className="db-section">
        <h2 className="db-sec-title">
          <i className="fas fa-code"></i> <span>{t("skills_title")}</span>
        </h2>
        <p className="db-sec-sub">{t("skills_subtitle")}</p>

        {/* Category Filter Tabs with Counter */}
        <div className="db-filter-pills">
          {skillTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`db-filter-pill ${skillCat === tab.id ? "active" : ""}`}
              onClick={() => setSkillCat(tab.id)}
            >
              <span>{tab.label}</span>
              <span className="db-pill-count">{tab.count}</span>
            </button>
          ))}
        </div>

        {/* Colored Bordered Skill Badges */}
        <div className="db-skill-badges-wrap">
          {visibleSkills.map((sk) => (
            <div
              key={sk.name}
              className="db-skill-badge"
              style={{
                "--badge-color": sk.color,
              }}
            >
              {sk.icon ? (
                <img src={sk.icon} alt={sk.name} className="db-skill-badge-img" />
              ) : (
                <i className={`fas ${sk.fa}`} style={{ color: sk.color }}></i>
              )}
              <span>{sk.name}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="db-sec-divider"></div>

      {/* ===== 4. GITHUB CONTRIBUTIONS ===== */}
      <section className="db-section">
        <GithubGraph username="Ramaaaadevs" />
      </section>
    </div>
  );
}
