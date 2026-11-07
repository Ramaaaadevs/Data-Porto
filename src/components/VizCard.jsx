import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { VIZ_SOURCES } from "../data/projects";
import { useLanguage } from "../context/LanguageContext";

export default function VizCard() {
  const [activeId, setActiveId] = useState(VIZ_SOURCES[0].id);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const { tData, language } = useLanguage();
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
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

  // Listen for ESC to exit fullscreen mode & lock body scroll when maximized
  useEffect(() => {
    if (!isMaximized) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(e) {
      if (e.key === "Escape") {
        setIsMaximized(false);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMaximized]);

  const active = VIZ_SOURCES.find((v) => v.id === activeId) || VIZ_SOURCES[0];

  const handleSelect = (id) => {
    if (id !== activeId) {
      setLoading(true);
      setActiveId(id);
    }
    setDropdownOpen(false);
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    setLoading(true);
    setRefreshKey((prev) => prev + 1);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 600);
  };

  // If user closed the window, show a macOS-like reopen dock bar
  if (isClosed) {
    return (
      <div className="viz-closed-dock animate-fade">
        <div className="vcd-left">
          <span className="vcd-dot-off"></span>
          <span>
            {language === "id"
              ? "Jendela Sandbox ditutup"
              : "Sandbox window closed"}
          </span>
        </div>
        <button
          type="button"
          className="vcd-reopen-btn"
          onClick={() => {
            setIsClosed(false);
            setIsMinimized(false);
          }}
        >
          <i className="fas fa-arrow-rotate-left"></i>
          <span>{language === "id" ? "Buka Kembali" : "Reopen Window"}</span>
        </button>
      </div>
    );
  }

  const windowElement = (
    <div
      className={`viz-card macos-window ${isMinimized ? "is-minimized" : ""} ${
        isMaximized ? "is-maximized" : ""
      }`}
      onClick={(e) => e.stopPropagation()}
    >
      {/* macOS Titlebar */}
      <div
        className="viz-header macos-header"
        onDoubleClick={() => setIsMaximized((prev) => !prev)}
      >
        {/* macOS Traffic Light Buttons */}
        <div className="macos-traffic-lights" aria-label="macOS Window Controls">
          <button
            type="button"
            className="mac-dot red"
            onClick={() => {
              setIsMaximized(false);
              setIsClosed(true);
            }}
            title={language === "id" ? "Tutup (Close)" : "Close"}
            aria-label="Close"
          >
            <span className="mac-icon">×</span>
          </button>
          <button
            type="button"
            className="mac-dot yellow"
            onClick={() => {
              if (isMaximized) {
                setIsMaximized(false);
              } else {
                setIsMinimized((prev) => !prev);
              }
            }}
            title={
              isMaximized
                ? language === "id"
                  ? "Kembalikan Ukuran"
                  : "Restore Size"
                : isMinimized
                ? language === "id"
                  ? "Pulihkan (Restore)"
                  : "Restore"
                : language === "id"
                ? "Minimalkan (Minimize)"
                : "Minimize"
            }
            aria-label="Minimize"
          >
            <span className="mac-icon">−</span>
          </button>
          <button
            type="button"
            className="mac-dot green"
            onClick={() => {
              if (isMinimized) setIsMinimized(false);
              setIsMaximized((prev) => !prev);
            }}
            title={
              isMaximized
                ? language === "id"
                  ? "Keluar Layar Penuh (Esc)"
                  : "Exit Fullscreen (Esc)"
                : language === "id"
                ? "Perbesar (Maximize)"
                : "Maximize"
            }
            aria-label="Maximize"
          >
            <span className="mac-icon">{isMaximized ? "⤡" : "⤢"}</span>
          </button>
        </div>

        {/* Center: Interactive Project Selector Dropdown */}
        <div className="viz-dropdown" ref={dropdownRef}>
          <button
            type="button"
            className="viz-dropdown-btn"
            onClick={() => setDropdownOpen((prev) => !prev)}
          >
            <i className="fas fa-layer-group" style={{ fontSize: "11px", opacity: 0.7 }}></i>
            <span>{active.label}</span>
            <i
              className="fas fa-chevron-down viz-chevron"
              style={{ transform: dropdownOpen ? "rotate(180deg)" : "none" }}
            ></i>
          </button>
          <ul className={`viz-dropdown-list ${dropdownOpen ? "open" : ""}`}>
            {VIZ_SOURCES.map((v) => (
              <li
                key={v.id}
                className={`viz-dropdown-item ${v.id === activeId ? "active" : ""}`}
                onClick={() => handleSelect(v.id)}
              >
                <i className={`fas ${v.icon || "fa-chart-pie"}`}></i>
                <span>{v.label}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Window Status & Action Controls */}
        <div className="macos-actions-right">
          {isMinimized && (
            <span
              className="mac-minimized-pill"
              onClick={() => setIsMinimized(false)}
            >
              {language === "id" ? "Terminimalisir" : "Minimized"}
            </span>
          )}

          <button
            type="button"
            className={`viz-action-icon-btn ${isRefreshing ? "spin" : ""}`}
            onClick={handleRefresh}
            title={language === "id" ? "Muat ulang frame" : "Reload frame"}
            aria-label="Refresh"
          >
            <i className="fas fa-arrow-rotate-right"></i>
          </button>

          <a
            href={active.link}
            target="_blank"
            rel="noreferrer"
            className="viz-action-icon-btn"
            title={language === "id" ? "Buka di tab baru" : "Open in new tab"}
          >
            <i className="fas fa-arrow-up-right-from-square"></i>
          </a>

          {isMaximized && (
            <button
              type="button"
              className="viz-action-icon-btn close-max"
              onClick={() => setIsMaximized(false)}
              title={language === "id" ? "Kembali ke ukuran normal (Esc)" : "Restore normal view (Esc)"}
            >
              <i className="fas fa-compress"></i>
            </button>
          )}
        </div>
      </div>

      {/* Window Content / Viewport */}
      {!isMinimized && (
        <div className="viz-content macos-content">
          <iframe
            key={`${active.id}-${refreshKey}`}
            src={active.src}
            title="Live Visualization"
            loading="lazy"
            allow="fullscreen"
            onLoad={() => setLoading(false)}
            className={
              active.src.includes("streamlit.app")
                ? "viz-iframe is-streamlit-embed"
                : "viz-iframe"
            }
          ></iframe>
          {loading && (
            <div className="viz-fallback macos-fallback">
              <div className="mac-spinner"></div>
              <p className="mac-fallback-title">{tData(active.fallbackText)}</p>
              <p className="viz-fallback-sub">{tData(active.fallbackSub)}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );

  if (isMaximized) {
    return (
      <>
        {/* Keep layout height intact on the Home page while modal is open */}
        <div className="viz-maximized-placeholder" />
        {createPortal(
          <div
            className="viz-maximized-backdrop"
            onClick={() => setIsMaximized(false)}
          >
            {windowElement}
          </div>,
          document.body
        )}
      </>
    );
  }

  return windowElement;
}
