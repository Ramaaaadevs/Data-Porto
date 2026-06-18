import { useState, useEffect, useRef } from "react";
import { VIZ_SOURCES } from "../data/projects";
import { useLanguage } from "../context/LanguageContext";
import TelemetryTerminal from "./TelemetryTerminal";

export default function VizCard() {
  const [activeIdTop, setActiveIdTop] = useState(VIZ_SOURCES[0].id);
  const [activeIdBottom, setActiveIdBottom] = useState(VIZ_SOURCES[0].id);
  
  const [dropdownOpenTop, setDropdownOpenTop] = useState(false);
  const [dropdownOpenBottom, setDropdownOpenBottom] = useState(false);
  
  const [loadingTop, setLoadingTop] = useState(true);
  
  const [isClosedTop, setIsClosedTop] = useState(false);
  const [isClosedBottom, setIsClosedBottom] = useState(false);
  
  const [isFullscreenTop, setIsFullscreenTop] = useState(false);
  const [isExitingTop, setIsExitingTop] = useState(false);
  const [isFullscreenBottom, setIsFullscreenBottom] = useState(false);
  const [isExitingBottom, setIsExitingBottom] = useState(false);
  
  const { t, tData } = useLanguage();

  const dropdownRefTop = useRef(null);
  const dropdownRefBottom = useRef(null);

  const closeFullscreenTop = () => {
    setIsFullscreenTop(false);
    setIsExitingTop(false);
  };

  const closeFullscreenBottom = () => {
    setIsFullscreenBottom(false);
    setIsExitingBottom(false);
  };

  const toggleFullscreenTop = () => {
    if (isFullscreenTop) {
      closeFullscreenTop();
    } else {
      setIsFullscreenTop(true);
    }
  };

  const toggleFullscreenBottom = () => {
    if (isFullscreenBottom) {
      closeFullscreenBottom();
    } else {
      setIsFullscreenBottom(true);
    }
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRefTop.current && !dropdownRefTop.current.contains(event.target)) {
        setDropdownOpenTop(false);
      }
      if (dropdownRefBottom.current && !dropdownRefBottom.current.contains(event.target)) {
        setDropdownOpenBottom(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Escape key listener to exit fullscreen smoothly
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        closeFullscreenTop();
        closeFullscreenBottom();
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isFullscreenTop, isFullscreenBottom]);

  const activeTop = VIZ_SOURCES.find((v) => v.id === activeIdTop);
  const activeBottom = VIZ_SOURCES.find((v) => v.id === activeIdBottom);

  const handleSelectTop = (id) => {
    if (id !== activeIdTop) {
      setLoadingTop(true);
      setActiveIdTop(id);
    }
    setDropdownOpenTop(false);
  };

  const handleSelectBottom = (id) => {
    if (id !== activeIdBottom) {
      setActiveIdBottom(id);
    }
    setDropdownOpenBottom(false);
  };

  return (
    <div className="viz-workspace-container">
      {/* TOP WINDOW: Project Viewer */}
      <div className={`viz-card project-window ${isFullscreenTop ? "fullscreen-mode" : ""} ${isExitingTop ? "fullscreen-exiting" : ""} ${isClosedTop ? "collapsed" : ""}`}>
        <div className="viz-header">
          <button
            className="dot red"
            onClick={() => {
              setIsClosedTop(true);
              setIsFullscreenTop(false);
              setIsExitingTop(false);
            }}
            title="Close Viewer"
            style={{ border: "none", cursor: "pointer" }}
          ></button>
          <button
            className="dot yellow"
            onClick={() => {
              setIsClosedTop((prev) => !prev);
            }}
            title="Toggle Collapse"
            style={{ border: "none", cursor: "pointer" }}
          ></button>
          <button
            className="dot green"
            onClick={() => {
              if (!isClosedTop) {
                toggleFullscreenTop();
              }
            }}
            disabled={isClosedTop}
            title="Toggle Fullscreen"
            style={{ border: "none", cursor: isClosedTop ? "not-allowed" : "pointer" }}
          ></button>

          <div className="viz-dropdown" ref={dropdownRefTop}>
            <button
              className="viz-dropdown-btn"
              onClick={() => {
                if (!isClosedTop) {
                  setDropdownOpenTop((prev) => !prev);
                }
              }}
              disabled={isClosedTop}
              style={{ cursor: isClosedTop ? "not-allowed" : "pointer" }}
            >
              <span>{activeTop.label}</span>
              <i className={`fas fa-chevron-down viz-chevron`} style={{ transform: dropdownOpenTop ? "rotate(180deg)" : "none" }}></i>
            </button>
            <ul className={`viz-dropdown-list ${dropdownOpenTop ? "open" : ""}`}>
              {VIZ_SOURCES.map((v) => (
                <li
                  key={v.id}
                  className={`viz-dropdown-item ${v.id === activeIdTop ? "active" : ""}`}
                  onClick={() => handleSelectTop(v.id)}
                >
                  <span>{v.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <a
            href={activeTop.link}
            target="_blank"
            rel="noreferrer"
            className="viz-open-btn"
            title="Open in new tab"
            style={{ pointerEvents: isClosedTop ? "none" : "auto", opacity: isClosedTop ? 0.4 : 1 }}
          >
            <i className="fas fa-external-link-alt"></i>
          </a>
        </div>
        
        <div className="viz-content">
          <div className="viz-iframe-container">
            <iframe
              key={activeTop.id}
              src={activeTop.src}
              title="Live Project View"
              loading="lazy"
              allow="fullscreen"
              onLoad={() => setLoadingTop(false)}
              style={{ width: "100%", height: "100%", border: "none" }}
            ></iframe>
            {loadingTop && (
              <div className="viz-fallback">
                <i className="fas fa-chart-line"></i>
                <p>{tData(activeTop.fallbackText)}</p>
                <p className="viz-fallback-sub">{tData(activeTop.fallbackSub)}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* BOTTOM WINDOW: Telemetry Dashboard */}
      <div className={`viz-card telemetry-window ${isFullscreenBottom ? "fullscreen-mode" : ""} ${isExitingBottom ? "fullscreen-exiting" : ""} ${isClosedBottom ? "collapsed" : ""}`}>
        <div className="viz-header">
          <button
            className="dot red"
            onClick={() => {
              setIsClosedBottom(true);
              setIsFullscreenBottom(false);
              setIsExitingBottom(false);
            }}
            title="Close Telemetry"
            style={{ border: "none", cursor: "pointer" }}
          ></button>
          <button
            className="dot yellow"
            onClick={() => {
              setIsClosedBottom((prev) => !prev);
            }}
            title="Toggle Collapse"
            style={{ border: "none", cursor: "pointer" }}
          ></button>
          <button
            className="dot green"
            onClick={() => {
              if (!isClosedBottom) {
                toggleFullscreenBottom();
              }
            }}
            disabled={isClosedBottom}
            title="Toggle Fullscreen"
            style={{ border: "none", cursor: isClosedBottom ? "not-allowed" : "pointer" }}
          ></button>

          {/* Bottom Dropdown matching top dropdown */}
          <div className="viz-dropdown" ref={dropdownRefBottom}>
            <button
              className="viz-dropdown-btn"
              onClick={() => {
                if (!isClosedBottom) {
                  setDropdownOpenBottom((prev) => !prev);
                }
              }}
              disabled={isClosedBottom}
              style={{ cursor: isClosedBottom ? "not-allowed" : "pointer" }}
            >
              <span>{activeBottom.label} - Telemetry</span>
              <i className={`fas fa-chevron-down viz-chevron`} style={{ transform: dropdownOpenBottom ? "rotate(180deg)" : "none" }}></i>
            </button>
            <ul className={`viz-dropdown-list ${dropdownOpenBottom ? "open" : ""}`}>
              {VIZ_SOURCES.map((v) => (
                <li
                  key={v.id}
                  className={`viz-dropdown-item ${v.id === activeIdBottom ? "active" : ""}`}
                  onClick={() => handleSelectBottom(v.id)}
                >
                  <span>{v.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <a
            href={activeBottom.link}
            target="_blank"
            rel="noreferrer"
            className="viz-open-btn"
            title="Open in new tab"
            style={{ pointerEvents: isClosedBottom ? "none" : "auto", opacity: isClosedBottom ? 0.4 : 1 }}
          >
            <i className="fas fa-external-link-alt"></i>
          </a>
        </div>

        <div className="viz-content">
          <TelemetryTerminal activeId={activeIdBottom} isFullscreen={isFullscreenBottom} />
        </div>
      </div>
    </div>
  );
}
