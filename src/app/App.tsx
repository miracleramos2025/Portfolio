import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Resume } from "./components/Resume";
import { HuronDetail } from "./components/HuronDetail";
import { NUITDetail } from "./components/NUITDetail";
import { PixarProjectDetail } from "./components/PixarProjectDetail";
import { AirbnbProjectDetail } from "./components/AirbnbProjectDetail";
import { DisneyProjectDetail } from "./components/DisneyProjectDetail";
// import { CTAProjectDetail } from "./components/CTAProjectDetail";
// import { CompostProjectDetail } from "./components/CompostProjectDetail";
// import { CampusConnectProjectDetail } from "./components/CampusConnectProjectDetail";

function Home() {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  // Smooth scroll for home nav buttons
  const scrollToId = (id: string) => {
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Instant jump when navigating FROM a detail page
  useEffect(() => {
    const id = (location.state as any)?.scrollTo as string | undefined;
    if (id) {
      setTimeout(() => {
        if (id === "top") {
          window.scrollTo({ top: 0, behavior: "instant" });
        } else {
          document.getElementById(id)?.scrollIntoView({ behavior: "instant" });
        }
        navigate(".", { replace: true, state: {} });
      }, 0);
    }
  }, [location, navigate]);

  return (
    <div className="min-h-screen">
      <nav className="sticky top-0 z-50 bg-white py-6 px-8 flex items-center justify-between border-b border-gray-200">
        <button onClick={() => scrollToId("top")} className="text-left">
          <h1 className="text-[#0F2656] text-2xl font-bold">Miracle Ramos</h1>
        </button>
        <div className="hidden md:flex gap-8">
          <button onClick={() => scrollToId("experience")} className="text-lg text-[#0F2656] font-semibold hover:text-[#87D3F8] transition-colors">Experience</button>
          <button onClick={() => scrollToId("projects")} className="text-lg text-[#0F2656] font-semibold hover:text-[#87D3F8] transition-colors">Projects</button>
          <button onClick={() => scrollToId("about")} className="text-lg text-[#0F2656] font-semibold hover:text-[#87D3F8] transition-colors">About Me</button>
          <button onClick={() => scrollToId("skills")} className="text-lg text-[#0F2656] font-semibold hover:text-[#87D3F8] transition-colors">Skills</button>
          <button onClick={() => scrollToId("contact")} className="text-lg text-[#0F2656] font-semibold hover:text-[#87D3F8] transition-colors">Contact</button>
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
          <button onClick={() => { setMenuOpen(false); scrollToId("experience"); }} className="text-left text-lg text-[#0F2656] font-semibold hover:text-[#87D3F8] transition-colors">Experience</button>
          <button onClick={() => { setMenuOpen(false); scrollToId("projects"); }} className="text-left text-lg text-[#0F2656] font-semibold hover:text-[#87D3F8] transition-colors">Projects</button>
          <button onClick={() => { setMenuOpen(false); scrollToId("about"); }} className="text-left text-lg text-[#0F2656] font-semibold hover:text-[#87D3F8] transition-colors">About Me</button>
          <button onClick={() => { setMenuOpen(false); scrollToId("skills"); }} className="text-left text-lg text-[#0F2656] font-semibold hover:text-[#87D3F8] transition-colors">Skills</button>
          <button onClick={() => { setMenuOpen(false); scrollToId("contact"); }} className="text-left text-lg text-[#0F2656] font-semibold hover:text-[#87D3F8] transition-colors">Contact</button>
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
        <Route path="/projects/pixar" element={<PixarProjectDetail />} />
        {<Route path="/projects/airbnb" element={<AirbnbProjectDetail />} />}
        {<Route path="/projects/disney" element={<DisneyProjectDetail />} />}
        {/* <Route path="/projects/cta" element={<CTAProjectDetail />} /> */}
        {/* <Route path="/projects/compost" element={<CompostProjectDetail />} /> */}
        {/* <Route path="/projects/campus-connect" element={<CampusConnectProjectDetail />} /> */}
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}