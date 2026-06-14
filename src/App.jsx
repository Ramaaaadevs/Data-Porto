import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import About from "./pages/About";

function ScrollToHashOrTop() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      // Tunggu render selesai dulu sebelum scroll ke elemen target
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 0);
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollToHashOrTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}
