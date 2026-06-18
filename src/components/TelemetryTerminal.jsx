import { useState, useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";

// Programmatic mock generator matching the 144 campaigns reference schema
const generateMockLedger = (vizId) => {
  const brands = ["Wardah", "Emina", "KAHF", "Make Over", "OMG", "Labore", "Insta Perfect", "Putri"];
  const months = [
    "01 2024", "02 2024", "03 2024", "04 2024", "05 2024", "06 2024",
    "07 2024", "08 2024", "09 2024", "10 2024", "11 2024", "12 2024",
    "01 2025", "02 2025", "03 2025", "04 2025", "05 2025", "06 2025"
  ];
  
  // Custom keywords for different projects to make datasets match
  let projectBrands = brands;
  if (vizId === "streamlit-airquality") {
    projectBrands = ["Tiantan", "Dongsi", "Gucheng", "Wanshou", "Nongzhan", "Chaoyang", "Fengtai", "Haidian"];
  } else if (vizId === "tableau-ukaccident") {
    projectBrands = ["London", "Birmingham", "Leeds", "Glasgow", "Sheffield", "Manchester", "Edinburgh", "Liverpool"];
  } else if (vizId === "gor-nusantara-web") {
    projectBrands = ["Court A", "Court B", "Court C", "VVIP Room", "Futsal A", "Futsal B", "Gym Area", "Pool Side"];
  } else if (vizId === "60kuiz-web") {
    projectBrands = ["SDN39 Kelas 1", "SDN39 Kelas 2", "SDN39 Kelas 3", "SDN39 Kelas 4", "SDN39 Kelas 5", "SDN39 Kelas 6", "SDN39 Ujian", "SDN39 Kuis"];
  } else if (vizId === "libsearch-web") {
    projectBrands = ["Science", "History", "Fiction", "Biography", "Technology", "Art", "Philosophy", "Children"];
  }

  const data = [];
  let id = 1;
  
  for (let m of months) {
    for (let b of projectBrands) {
      if (data.length >= 144) break;
      
      // Seed values with trend
      const baseVal = b.includes("Wardah") || b.includes("London") || b.includes("Tiantan") || b.includes("Court A") || b.includes("Kelas 6") ? 880000000 : 350000000;
      const seasonal = m.startsWith("12") || m.startsWith("04") ? 1.35 : 1.0;
      const noise = 0.8 + Math.random() * 0.4;
      const gmv = Math.round(baseVal * seasonal * noise);
      
      const clicks = Math.round(gmv / (4000 + Math.random() * 800));
      const impressions = Math.round(clicks * (12 + Math.random() * 10));
      const conv = parseFloat((1.8 + Math.random() * 3.2).toFixed(2));
      
      data.push({
        id,
        Month: m,
        Entity: b,
        GMV: gmv,
        Impressions: impressions,
        Clicks: clicks,
        ConversionRate: conv
      });
      id++;
    }
  }
  return data;
};

export default function TelemetryTerminal({ activeId, isFullscreen }) {
  const { t, language } = useLanguage();
  
  // Projection selectors
  const [xAxisCol, setXAxisCol] = useState("Month"); // "Month" | "Entity"
  const [yAxisCol, setYAxisCol] = useState("GMV"); // "GMV" | "Impressions" | "Clicks" | "ConversionRate"
  
  // Streaming simulation states
  const [speed, setSpeed] = useState(5); // 1x, 2x, 5x
  const [paused, setPaused] = useState(false);
  const [streamIndex, setStreamIndex] = useState(30); // Start with first 30 rows loaded
  
  // Search & Pagination states
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  const [fullDataset, setFullDataset] = useState([]);
  
  const defaultSheetId = "1Z9tKEuFrp-AiczzZB5w3MoJzqYVln8m0--wRjw0p5Eg";

  // Re-generate dataset and reset index when project changes
  useEffect(() => {
    const data = generateMockLedger(activeId);
    setFullDataset(data);
    setStreamIndex(30); // reset streaming pointer
    setCurrentPage(1);
  }, [activeId]);

  // Polling stream effect
  useEffect(() => {
    if (paused) return;

    const intervalTime = 1500 / speed;
    const interval = setInterval(() => {
      setStreamIndex((prev) => {
        if (prev >= fullDataset.length) {
          return 30; // restart stream loop if completed
        }
        return prev + 1;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, [paused, speed, fullDataset]);

  // Filter dataset down to the current simulated stream count
  const streamedDataset = fullDataset.slice(0, streamIndex);

  // Compute stats based on selected Y-axis column
  const sumYVal = streamedDataset.reduce((acc, curr) => acc + curr[yAxisCol], 0);
  
  // Find highest contributor for Y-axis
  const getApexContributor = () => {
    if (streamedDataset.length === 0) return { name: "N/A", value: 0 };
    let apex = streamedDataset[0];
    for (let r of streamedDataset) {
      if (r[yAxisCol] > apex[yAxisCol]) {
        apex = r;
      }
    }
    return { name: apex.Entity, value: apex[yAxisCol] };
  };
  const apex = getApexContributor();

  // Helper formatting function
  const formatValue = (val, metric) => {
    if (metric === "GMV") {
      if (val >= 1000000000) return `Rp ${(val / 1000000000).toFixed(2)}B`;
      if (val >= 1000000) return `Rp ${(val / 1000000).toFixed(1)}M`;
      return `Rp ${val.toLocaleString()}`;
    }
    if (metric === "ConversionRate") {
      return `${val}%`;
    }
    if (val >= 1000000) return `${(val / 1000000).toFixed(2)}M`;
    if (val >= 1000) return `${(val / 1000).toFixed(1)}k`;
    return val.toLocaleString();
  };

  // Get dynamic title based on project active ID
  const getDatasetTitle = (vizId) => {
    if (vizId === "streamlit-facefit") return "Paragon Ledger Campaign Trends";
    if (vizId === "streamlit-airquality") return "Beijing AQI Sensor Readings Flow";
    if (vizId === "tableau-ukaccident") return "UK Road Accident Severity Registry";
    if (vizId === "60kuiz-web") return "SDN 39 Assessment Database";
    if (vizId === "gor-nusantara-web") return "GOR Nusantara Booking Transactions";
    if (vizId === "libsearch-web") return "Open Library Query Analytics";
    return "Google Sheets Live Trends";
  };

  // Dynamic headers translated for tabular explorer
  const getHeaderLabel = (colName) => {
    if (colName === "Month") return language === "id" ? "Bulan" : "Month";
    if (colName === "Entity") {
      if (activeId === "streamlit-airquality") return language === "id" ? "Stasiun" : "Station";
      if (activeId === "tableau-ukaccident") return language === "id" ? "Kota" : "City";
      if (activeId === "gor-nusantara-web") return language === "id" ? "Fasilitas" : "Facility";
      if (activeId === "60kuiz-web") return language === "id" ? "Kelas" : "Class";
      if (activeId === "libsearch-web") return language === "id" ? "Kategori" : "Category";
      return language === "id" ? "Brand" : "Entity";
    }
    if (colName === "GMV") return "GMV";
    if (colName === "Impressions") return "Impressions";
    if (colName === "Clicks") return "Clicks";
    if (colName === "ConversionRate") return "Conv. Rate";
    return colName;
  };

  // Filter explorer search query
  const filteredRows = streamedDataset.filter((r) => {
    const search = searchTerm.toLowerCase();
    return (
      r.Month.toLowerCase().includes(search) ||
      r.Entity.toLowerCase().includes(search) ||
      r.GMV.toString().includes(search) ||
      r.Impressions.toString().includes(search) ||
      r.Clicks.toString().includes(search) ||
      r.ConversionRate.toString().includes(search)
    );
  });

  // Calculate table pagination
  const totalPages = Math.max(1, Math.ceil(filteredRows.length / rowsPerPage));
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const paginatedRows = filteredRows.slice(indexOfFirstRow, indexOfLastRow);

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(1, prev - 1));
  };
  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(totalPages, prev + 1));
  };

  // Convert sparkline numbers to SVG point coordinates
  const svgWidth = 600;
  const svgHeight = 110;
  const paddingX = 15;
  const paddingY = 15;

  const yValues = streamedDataset.map((r) => r[yAxisCol]);
  const minYVal = Math.min(...yValues, 0);
  const maxYVal = Math.max(...yValues, 100);

  const pointsString = streamedDataset
    .map((r, index) => {
      const x = paddingX + (index / (streamedDataset.length - 1 || 1)) * (svgWidth - paddingX * 2);
      const y = svgHeight - paddingY - ((r[yAxisCol] - minYVal) / (maxYVal - minYVal || 1)) * (svgHeight - paddingY * 2);
      return `${x},${y}`;
    })
    .join(" ");

  // Create filled polygon under sparkline
  const polygonPoints = streamedDataset.length > 0
    ? `${paddingX},${svgHeight - paddingY} ${pointsString} ${paddingX + (streamedDataset.length - 1) / (streamedDataset.length - 1 || 1) * (svgWidth - paddingX * 2)},${svgHeight - paddingY}`
    : "";

  return (
    <div className="telemetry-terminal animate-fade">
      {/* Dynamic Status Header */}
      <div className="terminal-status-banner">
        <span className="status-indicator">
          <span className={`status-dot ${paused ? "paused" : "active"}`}></span>
          <span className="status-context-text">{getDatasetTitle(activeId)}</span>
        </span>
        <span className="status-gsheet" title="Google Sheets live API synchronization link">
          <i className="fab fa-google-drive"></i> GSheet: <span className="highlight-text">Sync Active</span>
        </span>
      </div>

      {/* Main Flex Grid Workspace */}
      <div className="terminal-layout-grid">
        {/* Left Side: KPIs & Live Sparkline */}
        <div className="t-grid-main">
          {/* Stats Cards Row */}
          <div className="t-kpi-grid">
            <div className="t-kpi-card">
              <span className="t-kpi-label">Cumulative {yAxisCol}</span>
              <span className="t-kpi-val text-lime">{formatValue(sumYVal, yAxisCol)}</span>
            </div>
            <div className="t-kpi-card">
              <span className="t-kpi-label">Apex Contributor</span>
              <span className="t-kpi-val text-blue" title={apex.name}>{apex.name} <span className="t-kpi-subval">({formatValue(apex.value, yAxisCol)})</span></span>
            </div>
            <div className="t-kpi-card">
              <span className="t-kpi-label">Evaluated Records</span>
              <span className="t-kpi-val text-purple">{streamedDataset.length} / {fullDataset.length} rows</span>
            </div>
          </div>

          {/* Dynamic Sparkline Visual Board */}
          <div className="t-chart-box">
            <div className="t-chart-header">
              <span className="chart-title">LIVE SPARKLINE: {yAxisCol.toUpperCase()} TRENDS</span>
              <span className="chart-sub">Window entries size: {streamedDataset.length} nodes plotted</span>
            </div>
            <div className="t-chart-wrapper">
              <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="t-chart-svg" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="gSheetChartGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--lime)" stopOpacity="0.22" />
                    <stop offset="100%" stopColor="var(--lime)" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                <polygon points={polygonPoints} fill="url(#gSheetChartGrad)" />
                <polyline fill="none" stroke="var(--lime)" strokeWidth="1.8" points={pointsString} />
              </svg>
            </div>
          </div>
        </div>

        {/* Right Side: Projections controls */}
        <div className="t-grid-sidebar">
          <div className="t-sidebar-card">
            <span className="sidebar-card-title"><i className="fas fa-filter"></i> Chart Projection Model</span>
            
            <div className="t-control-group">
              <label className="control-label">X-Axis (Label Column)</label>
              <select 
                className="control-select" 
                value={xAxisCol} 
                onChange={(e) => setXAxisCol(e.target.value)}
              >
                <option value="Month">{getHeaderLabel("Month")}</option>
                <option value="Entity">{getHeaderLabel("Entity")}</option>
              </select>
            </div>

            <div className="t-control-group">
              <label className="control-label">Y-Axis (Metrics Plot)</label>
              <select 
                className="control-select" 
                value={yAxisCol} 
                onChange={(e) => setYAxisCol(e.target.value)}
              >
                <option value="GMV">GMV (Sales Value)</option>
                <option value="Impressions">Impressions Count</option>
                <option value="Clicks">Clicks Count</option>
                <option value="ConversionRate">Conversion Rate (%)</option>
              </select>
            </div>

            <div className="sidebar-tip-box">
              <i className="fas fa-info-circle tip-icon"></i>
              <p className="tip-text">
                Plot any numeric column dynamically! Select the variables above to redraw the trendlines and recalculate ledger metrics in real-time.
              </p>
            </div>

            <div className="t-control-group">
              <label className="control-label">Clock Velocity ({speed}x speed)</label>
              <div className="speed-btns-row">
                <button 
                  className={`speed-btn ${speed === 1 ? "active" : ""}`} 
                  onClick={() => setSpeed(1)}
                >1x</button>
                <button 
                  className={`speed-btn ${speed === 2 ? "active" : ""}`} 
                  onClick={() => setSpeed(2)}
                >2x</button>
                <button 
                  className={`speed-btn ${speed === 5 ? "active" : ""}`} 
                  onClick={() => setSpeed(5)}
                >5x</button>
              </div>
            </div>

            <div className="sidebar-action-row">
              <button 
                className={`action-btn-primary ${paused ? "resume" : "pause"}`} 
                onClick={() => setPaused(!paused)}
              >
                <i className={paused ? "fas fa-play" : "fas fa-pause"}></i> 
                {paused ? "Resume Poll" : "Pause Poll"}
              </button>
              <button 
                className="action-btn-sec" 
                onClick={() => setStreamIndex(30)}
                title="Restart stream from first 30 records"
              >
                <i className="fas fa-redo"></i> Reset
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Spreadsheet Grid Explorer */}
      {isFullscreen && (
        <div className="t-explorer-box">
          <div className="explorer-header">
            <span className="explorer-title"><i className="fas fa-table"></i> Spreadsheet Explorer</span>
            <div className="explorer-search-wrap">
              <i className="fas fa-search search-icon"></i>
              <input
                type="text"
                placeholder="Search records..."
                className="explorer-search-input"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
              />
            </div>
          </div>

          <div className="t-table-wrapper">
            <table className="t-table">
              <thead>
                <tr>
                  <th>No</th>
                  <th className={xAxisCol === "Month" ? "highlight-col" : ""}>{getHeaderLabel("Month")}</th>
                  <th className={xAxisCol === "Entity" ? "highlight-col" : ""}>{getHeaderLabel("Entity")}</th>
                  <th className={yAxisCol === "GMV" ? "highlight-col" : ""}>GMV</th>
                  <th className={yAxisCol === "Impressions" ? "highlight-col" : ""}>Impressions</th>
                  <th className={yAxisCol === "Clicks" ? "highlight-col" : ""}>Clicks</th>
                  <th className={yAxisCol === "ConversionRate" ? "highlight-col" : ""}>Conv. Rate</th>
                </tr>
              </thead>
              <tbody>
                {paginatedRows.length > 0 ? (
                  paginatedRows.map((row) => (
                    <tr key={row.id}>
                      <td>{row.id}</td>
                      <td className={xAxisCol === "Month" ? "highlight-col" : ""}>{row.Month}</td>
                      <td className={xAxisCol === "Entity" ? "highlight-col" : ""}>{row.Entity}</td>
                      <td className={yAxisCol === "GMV" ? "highlight-col" : ""}>{formatValue(row.GMV, "GMV")}</td>
                      <td className={yAxisCol === "Impressions" ? "highlight-col" : ""}>{formatValue(row.Impressions, "Impressions")}</td>
                      <td className={yAxisCol === "Clicks" ? "highlight-col" : ""}>{formatValue(row.Clicks, "Clicks")}</td>
                      <td className={yAxisCol === "ConversionRate" ? "highlight-col" : ""}>{formatValue(row.ConversionRate, "ConversionRate")}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" style={{ textAlign: "center", color: "#475569", padding: "16px" }}>
                      No records matched search criteria
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Table Pagination */}
          <div className="t-pagination-bar">
            <span className="pagination-info">
              Showing {filteredRows.length > 0 ? indexOfFirstRow + 1 : 0} to {Math.min(indexOfLastRow, filteredRows.length)} of {filteredRows.length} rows
            </span>
            <div className="pagination-nav">
              <button 
                className="page-nav-btn" 
                onClick={handlePrevPage} 
                disabled={currentPage === 1}
              >
                <i className="fas fa-chevron-left"></i>
              </button>
              <span className="page-indicator">
                {currentPage} / {totalPages}
              </span>
              <button 
                className="page-nav-btn" 
                onClick={handleNextPage} 
                disabled={currentPage === totalPages}
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
