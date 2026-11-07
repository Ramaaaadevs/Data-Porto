import useGithubContributions from "../hooks/useGithubContributions";
import { useLanguage } from "../context/LanguageContext";

const CELL_SIZE = 13; // 11px cell + 2px gap

export default function GithubGraph({ username = "Ramaaaadevs" }) {
  const { loading, error, total, bestDay, avgDay, activeDays, weeks, monthLabels, LEVEL_COLORS } =
    useGithubContributions(username);
  const { language } = useLanguage();

  return (
    <div className="gh-dashboard-wrap">
      <div className="gh-header-row">
        <div>
          <h3 className="db-sec-title">
            <i className="fab fa-github"></i>{" "}
            <span>{language === "id" ? "Kontribusi GitHub" : "GitHub Contributions"}</span>
          </h3>
          <p className="db-sec-sub">
            {language === "id"
              ? "Aktivitas pengembangan kode saya selama satu tahun terakhir."
              : "My GitHub coding activity over the past year."}
          </p>
        </div>
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noreferrer"
          className="gh-handle-link"
        >
          @{username}
        </a>
      </div>

      {/* Stat Cards Row (Inspired by reference) */}
      <div className="gh-stats-grid">
        <div className="gh-stat-box">
          <span className="gh-stat-label">
            {language === "id" ? "Total Kontribusi" : "Total"}
          </span>
          <span className="gh-stat-val">{loading ? "..." : total.toLocaleString()}</span>
        </div>
        <div className="gh-stat-box">
          <span className="gh-stat-label">
            {language === "id" ? "Hari Aktif" : "Active Days"}
          </span>
          <span className="gh-stat-val">{loading ? "..." : activeDays}</span>
        </div>
        <div className="gh-stat-box">
          <span className="gh-stat-label">
            {language === "id" ? "Rekor Harian" : "Best Day"}
          </span>
          <span className="gh-stat-val">{loading ? "..." : bestDay}</span>
        </div>
        <div className="gh-stat-box">
          <span className="gh-stat-label">
            {language === "id" ? "Rata-rata" : "Average"}
          </span>
          <span className="gh-stat-val">
            {loading ? "..." : avgDay} <small>/ {language === "id" ? "hari" : "day"}</small>
          </span>
        </div>
      </div>

      {/* Heatmap Box */}
      <div className="gh-heatmap-card">
        {error ? (
          <p className="gh-error-msg">Unable to load GitHub contributions.</p>
        ) : (
          <>
            <div className="github-graph-scroll">
              <div
                className="github-months"
                style={{
                  position: "relative",
                  width: weeks.length ? `${weeks.length * CELL_SIZE}px` : undefined,
                }}
              >
                {monthLabels.map((ml) => (
                  <span
                    key={ml.index}
                    style={{ position: "absolute", left: `${ml.index * CELL_SIZE}px` }}
                  >
                    {ml.name}
                  </span>
                ))}
              </div>
              <div className="github-grid-wrap">
                <div className="github-days-labels">
                  <span></span>
                  <span>Mon</span>
                  <span></span>
                  <span>Wed</span>
                  <span></span>
                  <span>Fri</span>
                  <span></span>
                </div>
                <div className="github-grid">
                  {weeks.map((week, wi) => (
                    <div className="github-week" key={wi}>
                      {week.map((day, di) => (
                        <div
                          key={di}
                          className="github-cell"
                          style={{
                            background: day
                              ? LEVEL_COLORS[day.level] || LEVEL_COLORS[0]
                              : "transparent",
                          }}
                          title={
                            day
                              ? `${day.date}: ${day.count} contribution${
                                  day.count !== 1 ? "s" : ""
                                }`
                              : undefined
                          }
                        ></div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="github-legend">
              <span>{language === "id" ? "Sedikit" : "Less"}</span>
              <div className="github-legend-box" style={{ background: "var(--gh-cell-0)" }}></div>
              <div className="github-legend-box" style={{ background: "#0e4429" }}></div>
              <div className="github-legend-box" style={{ background: "#006d32" }}></div>
              <div className="github-legend-box" style={{ background: "#26a641" }}></div>
              <div className="github-legend-box" style={{ background: "#39d353" }}></div>
              <span>{language === "id" ? "Banyak" : "More"}</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
