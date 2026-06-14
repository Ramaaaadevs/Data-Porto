import { useEffect, useState } from "react";

const LEVEL_COLORS = ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"];
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

        const contributions = data.contributions;

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
          total: data.total.lastYear,
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
