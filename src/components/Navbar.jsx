import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname === path;
  };

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="data-navbar">
      <div className="logo">
        Ramaa<span>Portfolio</span>
      </div>
      <nav className={mobileOpen ? "mobile-open" : ""}>
        <ul>
          <li>
            <Link to="/#home" className={`nav-link ${isActive("/") ? "active" : ""}`} onClick={closeMobile}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/projects" className={`nav-link ${isActive("/projects") ? "active" : ""}`} onClick={closeMobile}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/skills" className={`nav-link ${isActive("/skills") ? "active" : ""}`} onClick={closeMobile}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="/about" className={`nav-link ${isActive("/about") ? "active" : ""}`} onClick={closeMobile}>
              About
            </Link>
          </li>
          <li>
            <Link to="/#contact" className="nav-link" onClick={closeMobile}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div
        className={`mobile-menu ${mobileOpen ? "is-active" : ""}`}
        onClick={() => setMobileOpen((prev) => !prev)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
}
