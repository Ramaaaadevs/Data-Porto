import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { EXPERIENCE } from "../data/projects";

export default function Experience() {
  const { tData, language } = useLanguage();
  // Default open the first item so visitors immediately see rich details
  const [openMap, setOpenMap] = useState({ "work-0": true, "boot-0": true });

  const toggleDetail = (key) => {
    setOpenMap((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Separate experience into categories like the reference
  const workList = EXPERIENCE.filter(
    (e) => e.type === "single" && !e.company.toLowerCase().includes("coding camp")
  );
  const bootcampList = EXPERIENCE.filter(
    (e) => e.type === "single" && e.company.toLowerCase().includes("coding camp")
  );
  const teachingGroups = EXPERIENCE.filter((e) => e.type === "grouped");

  const renderExpandableCard = ({ key, logo, company, role, location, period, employmentType, bullets }) => {
    const isOpen = !!openMap[key];
    return (
      <div className={`db-item-card ${isOpen ? "is-expanded" : ""}`} key={key}>
        <img
          src={logo}
          alt={company}
          className={`db-item-logo ${logo.includes("ITERA") ? "itera-logo-pad" : ""}`}
        />
        <div className="db-item-body">
          <h3 className="db-item-title">{role}</h3>
          <p className="db-item-sub">
            {company} • {location}
          </p>
          <p className="db-item-meta">
            {period} • {employmentType}
          </p>

          <button
            type="button"
            className={`db-show-details-btn ${isOpen ? "open" : ""}`}
            onClick={() => toggleDetail(key)}
            aria-expanded={isOpen}
          >
            <i className="fas fa-chevron-right db-chevron-icon"></i>
            <span>
              {isOpen
                ? language === "id"
                  ? "Sembunyikan detail"
                  : "Hide details"
                : language === "id"
                ? "Lihat detail"
                : "Show details"}
            </span>
          </button>

          <div
            className={`db-detail-collapse ${isOpen ? "open" : ""}`}
            aria-hidden={!isOpen}
          >
            <div className="db-detail-collapse-inner">
              <ul className="db-detail-bullets">
                {bullets.map((b, bIdx) => (
                  <li key={bIdx} style={{ "--stagger": `${bIdx * 70}ms` }}>
                    {tData(b)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="db-page animate-fade">
      <section className="db-section">
        <h1 className="db-page-heading">
          {language === "id" ? "Pengalaman" : "Experience"}
        </h1>
        <p className="db-page-sub">
          {language === "id"
            ? "Perjalanan karier profesional, program intensif, dan asisten akademik."
            : "My professional career journey, intensive bootcamps, and academic mentorship."}
        </p>
      </section>

      <div className="db-sec-divider"></div>

      {/* ===== 1. WORK EXPERIENCE ===== */}
      <section className="db-section">
        <h2 className="db-sec-title">
          <i className="fas fa-briefcase"></i>{" "}
          <span>{language === "id" ? "Pengalaman Kerja" : "Work Experience"}</span>
        </h2>
        <p className="db-sec-sub">
          {language === "id"
            ? "Pengalaman magang dan kontribusi profesional di industri."
            : "My professional industry experience."}
        </p>

        <div className="db-stack-list" style={{ marginTop: "18px" }}>
          {workList.map((exp, idx) =>
            renderExpandableCard({
              key: `work-${idx}`,
              logo: exp.logo,
              company: exp.company,
              role: tData(exp.role),
              location: tData(exp.location),
              period: tData(exp.period),
              employmentType: tData(exp.employmentType),
              bullets: exp.bullets,
            })
          )}
        </div>
      </section>

      <div className="db-sec-divider"></div>

      {/* ===== 2. BOOTCAMP & TRAINING ===== */}
      <section className="db-section">
        <h2 className="db-sec-title">
          <i className="fas fa-graduation-cap"></i>{" "}
          <span>{language === "id" ? "Bootcamp & Pelatihan Intensif" : "Bootcamp & Training"}</span>
        </h2>
        <p className="db-sec-sub">
          {language === "id"
            ? "Program pengembangan keahlian intensif dan beasiswa teknologi."
            : "Intensive learning and scholarship skill development programs."}
        </p>

        <div className="db-stack-list" style={{ marginTop: "18px" }}>
          {bootcampList.map((exp, idx) =>
            renderExpandableCard({
              key: `boot-${idx}`,
              logo: exp.logo,
              company: exp.company,
              role: tData(exp.role),
              location: tData(exp.location),
              period: tData(exp.period),
              employmentType: tData(exp.employmentType),
              bullets: exp.bullets,
            })
          )}
        </div>
      </section>

      <div className="db-sec-divider"></div>

      {/* ===== 3. ACADEMIC TEACHING & PRACTICUM ASSISTANT ===== */}
      <section className="db-section">
        <h2 className="db-sec-title">
          <i className="fas fa-chalkboard-user"></i>{" "}
          <span>
            {language === "id"
              ? "Asisten Praktikum & Pengajaran Akademik"
              : "Academic Mentorship & Teaching Assistant"}
          </span>
        </h2>
        <p className="db-sec-sub">
          {language === "id"
            ? "Kontribusi pengajaran laboratorium dan bimbingan mahasiswa di ITERA."
            : "University lab teaching and student mentorship roles at ITERA."}
        </p>

        <div className="db-stack-list" style={{ marginTop: "18px" }}>
          {teachingGroups.map((group, gIdx) =>
            group.roles.map((r, rIdx) =>
              renderExpandableCard({
                key: `teach-${gIdx}-${rIdx}`,
                logo: group.logo,
                company: group.company,
                role: tData(r.role),
                location: tData(group.location),
                period: tData(r.period),
                employmentType: tData(group.employmentType),
                bullets: r.bullets,
              })
            )
          )}
        </div>
      </section>
    </div>
  );
}
