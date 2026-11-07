import { useLanguage } from "../context/LanguageContext";
import { EDUCATION } from "../data/projects";

export default function About() {
  const { t, tData, language } = useLanguage();

  return (
    <div className="db-page animate-fade">
      {/* ===== 1. ABOUT INTRO ===== */}
      <section className="db-section">
        <h1 className="db-page-heading">{t("nav_about")}</h1>
        <p className="db-page-sub">
          {language === "id"
            ? "Perkenalan singkat mengenai latar belakang dan fokus keahlian saya."
            : "A brief introduction to who I am and what I build."}
        </p>

        <div className="db-sec-divider"></div>

        <div className="db-prose">
          <p dangerouslySetInnerHTML={{ __html: t("about_hero_bio") }}></p>
          {language === "id" ? (
            <>
              <p>
                Dalam ranah <strong>Sains Data & Analitik</strong>, saya terbiasa menangani siklus pengolahan data secara menyeluruh—mulai dari <em>data wrangling</em>, analisis data eksploratif (EDA), penyeimbangan dataset, hingga merancang model <em>computer vision</em> maupun dashboard interaktif menggunakan Python, Tableau, Power BI, dan Streamlit.
              </p>
              <p>
                Di sisi <strong>Rekayasa Perangkat Lunak</strong>, saya mengembangkan platform web dan aplikasi mobile lintas platform menggunakan ekosistem modern seperti Next.js, React, TypeScript, Laravel, dan Kotlin Multiplatform. Saya senang menggabungkan kemampuan teknis dengan komunikasi kolaboratif serta pengalaman mengajar sebagai asisten praktikum di kampus.
              </p>
            </>
          ) : (
            <>
              <p>
                In <strong>Data Science & Analytics</strong>, I handle the end-to-end data lifecycle—from data cleaning, exploratory data analysis (EDA), and dataset balancing to building computer vision pipelines and interactive BI dashboards using Python, Tableau, Power BI, and Streamlit.
              </p>
              <p>
                On the <strong>Software Engineering</strong> side, I build fullstack web platforms and cross-platform mobile apps with Next.js, React, TypeScript, Laravel, and Kotlin Multiplatform. I blend technical adaptability with strong communication honed through mentoring hundreds of students as a university lab assistant.
              </p>
            </>
          )}
        </div>
      </section>

      <div className="db-sec-divider"></div>

      {/* ===== 2. EDUCATION CARDS ===== */}
      <section className="db-section">
        <h2 className="db-sec-title">
          <i className="fas fa-graduation-cap"></i>{" "}
          <span>{t("about_edu_title_col")}</span>
        </h2>
        <p className="db-sec-sub">
          {language === "id"
            ? "Perjalanan pendidikan akademik saya."
            : "My academic educational journey."}
        </p>

        <div className="db-stack-list" style={{ marginTop: "20px" }}>
          {EDUCATION.map((edu, idx) => (
            <div className="db-item-card" key={idx}>
              <img
                src={edu.logo}
                alt={edu.institution}
                className={`db-item-logo ${edu.logo.includes("ITERA") ? "itera-logo-pad" : ""}`}
              />
              <div className="db-item-body">
                <h3 className="db-item-title">{edu.institution}</h3>
                <p className="db-item-sub">
                  {tData(edu.degree)}
                  {edu.grade ? ` • ${edu.grade}` : ""}
                </p>
                <p className="db-item-meta">
                  {edu.period} • Lampung, Indonesia
                </p>
                {edu.desc && <p className="db-item-desc">{tData(edu.desc)}</p>}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
