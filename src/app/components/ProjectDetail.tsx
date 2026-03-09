import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface ProjectImage {
  src: string;
  caption: string;
  position?: string;
}

interface ProcessStep {
  title: string;
  description: string;
}

interface Reflection {
  title: string;
  description: string;
}

interface ProjectDetailProps {
  coverPhoto: string;
  coverPosition?: string;
  title: string;
  className?: string;
  quarter?: string;
  overview: string;
  githubUrl?: string;
  slidesUrl?: string;
  presentationUrl?: string;
  reportUrl?: string;
  pipelineDiagram?: React.ReactNode;
  customHighlights?: React.ReactNode;
  process: ProcessStep[];
  images: ProjectImage[];
  outcomes: string[];
  reflections: Reflection[];
}

export function ProjectDetail({
  coverPhoto,
  coverPosition = "center center",
  title,
  className,
  quarter,
  overview,
  githubUrl,
  presentationUrl,
  reportUrl,
  slidesUrl,
  pipelineDiagram,
  customHighlights,
  process,
  images,
  outcomes,
  reflections,
}: ProjectDetailProps) {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "instant" });
    }, 0);
  }, []);

  const navigate = useNavigate();
  const goHomeTo = (id: string) => {
    navigate("/", { state: { scrollTo: id } });
  };

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0F2656]">

      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-white py-3 md:py-6 px-8 flex items-center justify-between border-b border-gray-200">
        <button onClick={() => goHomeTo("top")} className="text-left">
          <h1 className="text-[#0F2656] text-2xl font-bold">Miracle Ramos</h1>
        </button>
        <div className="hidden md:flex gap-8">
          <button onClick={() => goHomeTo("experience")} className="text-lg text-[#0F2656] font-semibold hover:text-[#87D3F8] transition-colors">Experience</button>
          <button onClick={() => goHomeTo("projects")} className="text-lg text-[#0F2656] font-semibold hover:text-[#87D3F8] transition-colors">Projects</button>
          <button onClick={() => goHomeTo("about")} className="text-lg text-[#0F2656] font-semibold hover:text-[#87D3F8] transition-colors">About Me</button>
          <button onClick={() => goHomeTo("skills")} className="text-lg text-[#0F2656] font-semibold hover:text-[#87D3F8] transition-colors">Skills</button>
          <button onClick={() => goHomeTo("contact")} className="text-lg text-[#0F2656] font-semibold hover:text-[#87D3F8] transition-colors">Contact</button>
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
        <div className="md:hidden sticky top-[50px] z-40 bg-white border-b border-gray-200 flex flex-col px-8 py-4 gap-4">
          <button onClick={() => { setMenuOpen(false); goHomeTo("experience"); }} className="text-left text-lg text-[#0F2656] font-semibold hover:text-[#87D3F8] transition-colors">Experience</button>
          <button onClick={() => { setMenuOpen(false); goHomeTo("projects"); }} className="text-left text-lg text-[#0F2656] font-semibold hover:text-[#87D3F8] transition-colors">Projects</button>
          <button onClick={() => { setMenuOpen(false); goHomeTo("about"); }} className="text-left text-lg text-[#0F2656] font-semibold hover:text-[#87D3F8] transition-colors">About Me</button>
          <button onClick={() => { setMenuOpen(false); goHomeTo("skills"); }} className="text-left text-lg text-[#0F2656] font-semibold hover:text-[#87D3F8] transition-colors">Skills</button>
          <button onClick={() => { setMenuOpen(false); goHomeTo("contact"); }} className="text-left text-lg text-[#0F2656] font-semibold hover:text-[#87D3F8] transition-colors">Contact</button>
        </div>
      )}

      {/* Banner */}
      <div className="relative w-full" style={{ height: "220px" }}>
        <img
          src={coverPhoto}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: coverPosition }}
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(15, 38, 86, 0.48)" }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
        <h2
        className="text-white font-bold text-3xl md:text-5xl text-center px-4"
        style={{ letterSpacing: "0.06em", textShadow: "0 2px 12px rgba(0,0,0,0.7)" }}
        >
            {title}
          </h2>
          {(className || quarter) && (
            <p className="text-[#87D3F8] text-sm md:text-lg font-semibold px-4 text-center" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.7)" }}>
              {[className, quarter].filter(Boolean).join(" · ")}
            </p>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-8 py-12 flex flex-col gap-10 pb-28">

        {/* 1. Overview */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[#87D3F8] text-xl font-semibold tracking-widest">Overview</h3>
            <button
              onClick={() => goHomeTo("projects")}
              className="flex items-center gap-2 text-white font-semibold hover:text-[#87D3F8] transition-colors text-sm"
            >
              ← Back
            </button>
          </div>
          <div className="h-px bg-white opacity-20 mb-8" />
          <div className="flex flex-col md:flex-row gap-10 items-start">
            <div className="flex-1 max-w-[600px]">
              <p className="text-white text-lg leading-relaxed">{overview}</p>
            </div>
            {(presentationUrl || reportUrl || githubUrl || slidesUrl) && (
              <div className="w-full md:w-56 shrink-0">
                <p className="text-[#87D3F8] text-sm font-semibold tracking-widest mb-3">PROJECT LINKS</p>
                <div className="flex flex-col gap-3">
                  {presentationUrl && (
                    <a
                      href={presentationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-4 w-full rounded-lg font-semibold text-white transition-all whitespace-nowrap"
                      style={{ backgroundColor: "#002147", border: "1px solid #87D3F8" }}
                      onMouseEnter={e => { e.currentTarget.style.backgroundColor = "#87D3F8"; e.currentTarget.style.color = "#0F2656"; }}
                      onMouseLeave={e => { e.currentTarget.style.backgroundColor = "#002147"; e.currentTarget.style.color = "#ffffff"; }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
                        <polygon points="10,8 16,12 10,16"/>
                      </svg>
                      Watch Presentation
                    </a>
                  )}
                  {slidesUrl && (
                    <a
                      href={slidesUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-4 w-full rounded-lg font-semibold text-white transition-all whitespace-nowrap"
                      style={{ backgroundColor: "#002147", border: "1px solid #87D3F8" }}
                      onMouseEnter={e => { e.currentTarget.style.backgroundColor = "#87D3F8"; e.currentTarget.style.color = "#0F2656"; }}
                      onMouseLeave={e => { e.currentTarget.style.backgroundColor = "#002147"; e.currentTarget.style.color = "#ffffff"; }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="3" width="20" height="14" rx="2"/>
                        <line x1="8" y1="21" x2="16" y2="21"/>
                        <line x1="12" y1="17" x2="12" y2="21"/>
                      </svg>
                      View Slides
                    </a>
                  )}
                  {reportUrl && (
                    <a
                      href={reportUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-4 w-full rounded-lg font-semibold text-white transition-all whitespace-nowrap"
                      style={{ backgroundColor: "#002147", border: "1px solid #87D3F8" }}
                      onMouseEnter={e => { e.currentTarget.style.backgroundColor = "#87D3F8"; e.currentTarget.style.color = "#0F2656"; }}
                      onMouseLeave={e => { e.currentTarget.style.backgroundColor = "#002147"; e.currentTarget.style.color = "#ffffff"; }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                        <polyline points="14 2 14 8 20 8"/>
                        <line x1="16" y1="13" x2="8" y2="13"/>
                        <line x1="16" y1="17" x2="8" y2="17"/>
                        <polyline points="10 9 9 9 8 9"/>
                      </svg>
                      View Report
                    </a>
                  )}
                  {githubUrl && (
                    <a
                      href={githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-4 w-full rounded-lg font-semibold text-white transition-all whitespace-nowrap"
                      style={{ backgroundColor: "#002147", border: "1px solid #87D3F8" }}
                      onMouseEnter={e => { e.currentTarget.style.backgroundColor = "#87D3F8"; e.currentTarget.style.color = "#0F2656"; }}
                      onMouseLeave={e => { e.currentTarget.style.backgroundColor = "#002147"; e.currentTarget.style.color = "#ffffff"; }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .322.216.694.825.576C20.565 21.795 24 17.298 24 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                      View on GitHub
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 2. Pipeline Diagram */}
        {pipelineDiagram && (
          <div>
            <h3 className="text-[#87D3F8] text-xl font-semibold tracking-widest mb-4">Animation Pipeline</h3>
            <div className="h-px bg-white opacity-20 mb-8" />
            {pipelineDiagram}
          </div>
        )}

        {/* 3. Project Highlights */}
        {customHighlights && (
          <div>
            <h3 className="text-[#87D3F8] text-xl font-semibold tracking-widest mb-4">Project Highlights</h3>
            <div className="h-px bg-white opacity-20 mb-8" />
            {customHighlights}
          </div>
        )}

        {/* Default images grid */}
        {images.length > 0 && (
          <div>
            <h3 className="text-[#87D3F8] text-xl font-semibold tracking-widest mb-4">Project Highlights</h3>
            <div className="h-px bg-white opacity-20 mb-8" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {images.map((img, i) => (
                <div key={i} className="flex flex-col gap-3">
                  <img
                    src={img.src}
                    alt={img.caption}
                    className="w-full rounded-2xl object-cover border border-white/10 shadow-[0_12px_30px_rgba(0,0,0,0.25)] transition-transform duration-200 hover:scale-[1.01]"
                    style={{ height: "240px", objectPosition: img.position ?? "center center" }}
                  />
                  <p className="text-white/60 text-sm text-center italic">{img.caption}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4. Process & Methodology */}
        {process.length > 0 && (
          <div>
            <h3 className="text-[#87D3F8] text-xl font-semibold tracking-widest mb-4">Process & Methodology</h3>
            <div className="h-px bg-white opacity-20 mb-10" />
            <div className="flex flex-col md:grid md:grid-cols-2 xl:grid-cols-4 gap-8">
  {process.slice(0, 4).map((step, i) => (
    <div key={i} className="flex md:flex-col gap-6 md:gap-2 items-start">
      <span
        className="font-bold shrink-0 leading-none"
        style={{ fontSize: "3rem", color: "#87D3F8", opacity: 0.25, lineHeight: 1, minWidth: "60px", textAlign: "right" }}
      >
        {String(i + 1).padStart(2, "0")}
      </span>
      <div className="flex flex-col gap-2 flex-1">
        <h4 className="text-white font-semibold text-base tracking-wide">{step.title}</h4>
        <p className="text-white/75 text-sm leading-6">{step.description}</p>
      </div>
    </div>
  ))}
</div>
          </div>
        )}

        {/* 5. Outcomes */}
        {outcomes.length > 0 && (
          <div>
            <h3 className="text-[#87D3F8] text-xl font-semibold tracking-widest mb-4">Outcomes</h3>
            <div className="h-px bg-white opacity-20 mb-10" />
            <div className="flex flex-col gap-8">
              {outcomes.map((outcome, i) => (
                <div key={i} className="flex gap-8 items-start">
                  <span
                    className="font-bold shrink-0 leading-none"
                    style={{ fontSize: "4rem", color: "#87D3F8", opacity: 0.25, lineHeight: 1, width: "70px", minWidth: "70px", textAlign: "right" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex flex-col gap-2 pt-1 flex-1">
                    <p className="text-white/90 text-sm leading-7">{outcome}</p>
                    <div className="h-px bg-white/10 mt-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 6. Reflections */}
        {reflections.length > 0 && (
          <div>
            <h3 className="text-[#87D3F8] text-xl font-semibold tracking-widest mb-4">Reflections & Takeaways</h3>
            <div className="h-px bg-white opacity-20 mb-10" />
            <div className="flex flex-col gap-8">
              {reflections.map((r, i) => (
                <div key={i} className="flex gap-8 items-start">
                  <span
                    className="font-bold shrink-0 leading-none"
                    style={{ fontSize: "4rem", color: "#87D3F8", opacity: 0.25, lineHeight: 1, width: "70px", minWidth: "70px", textAlign: "right" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex flex-col gap-2 pt-1" style={{ maxWidth: "440px" }}>
                    <h4 className="text-white font-semibold text-lg tracking-wide">{r.title}</h4>
                    <p className="text-white/90 text-sm leading-7">{r.description}</p>
                    <div className="h-px bg-white/10 mt-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Back Button */}
        <div className="flex justify-center pt-4">
          <button
            onClick={() => goHomeTo("projects")}
            className="flex items-center gap-2 text-white font-semibold hover:text-[#87D3F8] transition-colors"
          >
            ← Back
          </button>
        </div>

      </div>
    </div>
  );
}