import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Resume } from "./components/Resume";
import { HuronDetail } from "./components/HuronDetail";
import { NUITDetail } from "./components/NUITDetail";

function Home() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        document.getElementById(location.state.scrollTo)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location]);

  return (
    <div className="min-h-screen">
      <nav className="sticky top-0 z-50 bg-white py-6 px-8 flex items-center justify-between border-b border-gray-200">
        <a href="#top">
          <h1 className="text-[#0F2656] text-2xl font-bold">Miracle Ramos</h1>
        </a>
        <div className="hidden md:flex gap-8">
          <a href="#experience" className="text-lg text-[#0F2656] font-semibold hover:text-[#87D3F8] transition-colors">Experience</a>
          <a href="#projects" className="text-lg text-[#0F2656] font-semibold hover:text-[#87D3F8] transition-colors">Projects</a>
          <a href="#about" className="text-lg text-[#0F2656] font-semibold hover:text-[#87D3F8] transition-colors">About Me</a>
          <a href="#skills" className="text-lg text-[#0F2656] font-semibold hover:text-[#87D3F8] transition-colors">Skills</a>
          <a href="#contact" className="text-lg text-[#0F2656] font-semibold hover:text-[#87D3F8] transition-colors">Contact</a>
        </div>
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block w-6 h-0.5 bg-[#0F2656] transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#0F2656] transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#0F2656] transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden sticky top-[73px] z-40 bg-white border-b border-gray-200 flex flex-col px-8 py-4 gap-4">
          <a href="#experience" onClick={() => setMenuOpen(false)} className="text-lg text-[#0F2656] font-semibold hover:text-[#87D3F8] transition-colors">Experience</a>
          <a href="#projects" onClick={() => setMenuOpen(false)} className="text-lg text-[#0F2656] font-semibold hover:text-[#87D3F8] transition-colors">Projects</a>
          <a href="#about" onClick={() => setMenuOpen(false)} className="text-lg text-[#0F2656] font-semibold hover:text-[#87D3F8] transition-colors">About Me</a>
          <a href="#skills" onClick={() => setMenuOpen(false)} className="text-lg text-[#0F2656] font-semibold hover:text-[#87D3F8] transition-colors">Skills</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="text-lg text-[#0F2656] font-semibold hover:text-[#87D3F8] transition-colors">Contact</a>
        </div>
      )}

      <Hero />
      <Experience />
      <Projects />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/huron" element={<HuronDetail />} />
        <Route path="/northwestern" element={<NUITDetail />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}