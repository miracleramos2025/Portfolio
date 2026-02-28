import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { Hero } from "@/app/components/Hero";
import { Projects } from "@/app/components/Projects";
import { Skills } from "@/app/components/Skills";
import { Experience } from "@/app/components/Experience";
import { About } from "@/app/components/About";
import { Contact } from "@/app/components/Contact";
import { Resume } from "@/app/components/Resume";
import { HuronDetail } from "@/app/components/HuronDetail";
import { NUITDetail } from "@/app/components/NUITDetail";

function Home() {
  const location = useLocation();

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
        <div className="flex gap-8">
        <a href="#experience" className="text-lg text-[#0F2656] font-semibold hover:text-[#87D3F8] transition-colors">Experience</a>
          <a href="#projects" className="text-lg text-[#0F2656] font-semibold hover:text-[#87D3F8] transition-colors">Projects</a>
          <a href="#about" className="text-lg text-[#0F2656] font-semibold hover:text-[#87D3F8] transition-colors">About Me</a>
          <a href="#skills" className="text-lg text-[#0F2656] font-semibold hover:text-[#87D3F8] transition-colors">Skills</a>
          <a href="#contact" className="text-lg text-[#0F2656] font-semibold hover:text-[#87D3F8] transition-colors">Contact</a>
        </div>
      </nav>
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