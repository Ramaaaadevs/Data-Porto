import { useState, useEffect, useRef } from "react";
import { VIZ_SOURCES } from "../data/projects";
import { useLanguage } from "../context/LanguageContext";

export default function VizCard() {
  const [activeId, setActiveId] = useState(VIZ_SOURCES[0].id);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const { tData } = useLanguage();

  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const active = VIZ_SOURCES.find((v) => v.id === activeId);

  const handleSelect = (id) => {
    if (id !== activeId) {
      setLoading(true);
      setActiveId(id);
    }
    setDropdownOpen(false);
  };

  return (
    <div className="viz-card">
      <div className="viz-header">
        <div className="dot red"></div>
        <div className="dot yellow"></div>
        <div className="dot green"></div>

        <div className="viz-dropdown" ref={dropdownRef}>
          <button
            className="viz-dropdown-btn"
            onClick={() => setDropdownOpen((prev) => !prev)}
          >
            <span>{active.label}</span>
            <i className={`fas fa-chevron-down viz-chevron`} style={{ transform: dropdownOpen ? "rotate(180deg)" : "none" }}></i>
          </button>
          <ul className={`viz-dropdown-list ${dropdownOpen ? "open" : ""}`}>
            {VIZ_SOURCES.map((v) => (
              <li
                key={v.id}
                className={`viz-dropdown-item ${v.id === activeId ? "active" : ""}`}
                onClick={() => handleSelect(v.id)}
              >
                <span>{v.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <a href={active.link} target="_blank" rel="noreferrer" className="viz-open-btn" title="Open in new tab">
          <i className="fas fa-external-link-alt"></i>
        </a>
      </div>
      <div className="viz-content">
        <iframe
          key={active.id}
          src={active.src}
          title="Live Visualization"
          loading="lazy"
          allow="fullscreen"
          onLoad={() => setLoading(false)}
          style={{ width: "100%", height: "100%", border: "none", borderRadius: "0 0 20px 20px" }}
        ></iframe>
        {loading && (
          <div className="viz-fallback">
            <i className="fas fa-chart-line"></i>
            <p>{tData(active.fallbackText)}</p>
            <p className="viz-fallback-sub">{tData(active.fallbackSub)}</p>
          </div>
        )}
      </div>
    </div>
  );
}
