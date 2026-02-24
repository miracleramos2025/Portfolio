import { Hero } from "@/app/components/Hero";
import { Projects } from "@/app/components/Projects";
import { Skills } from "@/app/components/Skills";
import { Experience } from "@/app/components/Experience";
import { About } from "@/app/components/About";
import { Contact } from "@/app/components/Contact";

export default function App() {
  return (
    <div className="min-h-screen">
      {/* Sticky nav lives here, outside all sections */}
      <nav className="sticky top-0 z-50 bg-white py-6 px-8 flex items-center justify-between border-b border-gray-200">
        <h1 className="text-[#0F2656] text-2xl font-bold">Miracle Ramos</h1>
        <div className="flex gap-8">
          <a href="#projects" className="text-lg text-[#0F2656] font-semibold hover:text-[#87D3F8] transition-colors">Projects</a>
          <a href="#about" className="text-lg text-[#0F2656] font-semibold hover:text-[#87D3F8] transition-colors">About Me</a>
          <a href="#skills" className="text-lg text-[#0F2656] font-semibold hover:text-[#87D3F8] transition-colors">Skills</a>
          <a href="#experience" className="text-lg text-[#0F2656] font-semibold hover:text-[#87D3F8] transition-colors">Experience</a>
          <a href="#contact" className="text-lg text-[#0F2656] font-semibold hover:text-[#87D3F8] transition-colors">Contact</a>
        </div>
      </nav>
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Experience />
      <Contact />
    </div>
  );
}