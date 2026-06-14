import useGithubContributions from "../hooks/useGithubContributions";

const CELL_SIZE = 13; // 11px cell + 2px gap

export default function GithubGraph({ username = "Ramaaaadevs" }) {
  const { loading, error, total, weeks, monthLabels, LEVEL_COLORS } = useGithubContributions(username);

  let totalText = "Loading contributions...";
  if (error) totalText = "Unable to load GitHub contributions";
  else if (!loading) totalText = `${total} contributions in the last year`;

  return (
    <div className="github-graph-container scroll-animate">
      <p className="github-total">{totalText}</p>
      <div className="github-graph-scroll">
        <div className="github-months" style={{ position: "relative", width: weeks.length ? `${weeks.length * CELL_SIZE}px` : undefined }}>
          {monthLabels.map((ml) => (
            <span key={ml.index} style={{ position: "absolute", left: `${ml.index * CELL_SIZE}px` }}>
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
                    style={{ background: day ? (LEVEL_COLORS[day.level] || LEVEL_COLORS[0]) : "transparent" }}
                    title={day ? `${day.date}: ${day.count} contribution${day.count !== 1 ? "s" : ""}` : undefined}
                  ></div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="github-legend">
        <span>Less</span>
        <div className="github-legend-box" style={{ background: "#ebedf0" }}></div>
        <div className="github-legend-box" style={{ background: "#9be9a8" }}></div>
        <div className="github-legend-box" style={{ background: "#40c463" }}></div>
        <div className="github-legend-box" style={{ background: "#30a14e" }}></div>
        <div className="github-legend-box" style={{ background: "#216e39" }}></div>
        <span>More</span>
      </div>
    </div>
  );
}
