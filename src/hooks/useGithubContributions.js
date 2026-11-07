import { useEffect, useState } from "react";

const LEVEL_COLORS = ["var(--gh-cell-0)", "#0e4429", "#006d32", "#26a641", "#39d353"];
const MONTH_NAMES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/**
 * Hook untuk fetch GitHub contribution graph (live) dari
 * github-contributions-api.jogruber.de
 */
export default function useGithubContributions(username) {
  const [state, setState] = useState({
    loading: true,
    error: null,
    total: 0,
    bestDay: 0,
    avgDay: "0",
    activeDays: 0,
    weeks: [],
    monthLabels: [],
  });

  useEffect(() => {
    let cancelled = false;

    (async function load() {
      try {
        const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`);
        const data = await res.json();
        if (cancelled) return;

        const contributions = data.contributions || [];

        let bestDay = 0;
        let activeDays = 0;
        contributions.forEach((day) => {
          if (day.count > bestDay) bestDay = day.count;
          if (day.count > 0) activeDays += 1;
        });
        const total = data.total?.lastYear || 0;
        const avgDay = contributions.length > 0 ? (total / contributions.length).toFixed(1) : "0";

        // Build weeks (columns of 7 days)
        const weeks = [];
        let currentWeek = [];
        contributions.forEach((day, i) => {
          const d = new Date(day.date);
          if (i === 0) {
            const dayOfWeek = d.getDay();
            for (let p = 0; p < dayOfWeek; p++) {
              currentWeek.push(null);
            }
          }
          currentWeek.push(day);
          if (currentWeek.length === 7) {
            weeks.push(currentWeek);
            currentWeek = [];
          }
        });
        if (currentWeek.length > 0) {
          weeks.push(currentWeek);
        }

        // Month labels
        let lastMonth = -1;
        const monthLabels = [];
        weeks.forEach((week, wi) => {
          const firstDay = week.find((d) => d !== null);
          if (firstDay) {
            const m = new Date(firstDay.date).getMonth();
            if (m !== lastMonth) {
              monthLabels.push({ index: wi, name: MONTH_NAMES[m] });
              lastMonth = m;
            }
          }
        });

        setState({
          loading: false,
          error: null,
          total,
          bestDay,
          avgDay,
          activeDays,
          weeks,
          monthLabels,
        });
      } catch (err) {
        if (!cancelled) {
          setState((prev) => ({ ...prev, loading: false, error: err }));
        }
      }
    })();

    return () => { cancelled = true; };
  }, [username]);

  return { ...state, LEVEL_COLORS };
}
