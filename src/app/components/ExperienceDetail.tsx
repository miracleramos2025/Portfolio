import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Stat {
  value: string;
  label: string;
}

interface Role {
  title: string;
  timeline: string;
  description: string;
  promoted?: boolean;
}

interface TeamSection {
  title: string;
  description: string;
}

interface Reflection {
  title: string;
  description: string;
}

interface ExperienceDetailProps {
  coverPhoto: string;
  company: string;
  role: string;
  roles?: Role[];
  roleDescription?: string;
  timeline?: string;
  team?: string;
  teams?: TeamSection[];
  stats: Stat[];
  tools: string[];
  photos: string[];
  reflection?: string;
  reflections?: Reflection[];
  coverContent?: React.ReactNode;
  coverPosition?: string;
  photoPositions?: string[];
}

export function ExperienceDetail({
  coverPhoto,
  company,
  role,
  roles,
  roleDescription,
  timeline,
  team,
  teams,
  stats,
  tools,
  photos,
  reflection,
  reflections,
  coverContent,
  coverPosition = "center center",
  photoPositions = [],
}: ExperienceDetailProps) {
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
      <nav className="sticky top-0 z-50 bg-white py-3 md:py-6 px-8 flex items-center justify-between border-b border-gray-200">
        <button onClick={() => goHomeTo("top")} className="text-left">
          <h1 className="text-[#0F2656] text-2xl font-bold">Miracle Ramos</h1>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex gap-8">
          <button onClick={() => goHomeTo("experience")} className="text-lg text-[#0F2656] font-semibold hover:text-[#87D3F8] transition-colors">Experience</button>
          <button onClick={() => goHomeTo("projects")} className="text-lg text-[#0F2656] font-semibold hover:text-[#87D3F8] transition-colors">Projects</button>
          <button onClick={() => goHomeTo("about")} className="text-lg text-[#0F2656] font-semibold hover:text-[#87D3F8] transition-colors">About Me</button>
          <button onClick={() => goHomeTo("skills")} className="text-lg text-[#0F2656] font-semibold hover:text-[#87D3F8] transition-colors">Skills</button>
          <button onClick={() => goHomeTo("contact")} className="text-lg text-[#0F2656] font-semibold hover:text-[#87D3F8] transition-colors">Contact</button>
        </div>

        {/* Hamburger button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block w-6 h-0.5 bg-[#0F2656] transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#0F2656] transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#0F2656] transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden sticky top-[50] z-40 bg-white border-b border-gray-200 flex flex-col px-8 py-4 gap-4">
          <button onClick={() => { setMenuOpen(false); goHomeTo("experience"); }} className="text-left text-lg text-[#0F2656] font-semibold hover:text-[#87D3F8] transition-colors">Experience</button>
          <button onClick={() => { setMenuOpen(false); goHomeTo("projects"); }} className="text-left text-lg text-[#0F2656] font-semibold hover:text-[#87D3F8] transition-colors">Projects</button>
          <button onClick={() => { setMenuOpen(false); goHomeTo("about"); }} className="text-left text-lg text-[#0F2656] font-semibold hover:text-[#87D3F8] transition-colors">About Me</button>
          <button onClick={() => { setMenuOpen(false); goHomeTo("skills"); }} className="text-left text-lg text-[#0F2656] font-semibold hover:text-[#87D3F8] transition-colors">Skills</button>
          <button onClick={() => { setMenuOpen(false); goHomeTo("contact"); }} className="text-left text-lg text-[#0F2656] font-semibold hover:text-[#87D3F8] transition-colors">Contact</button>
        </div>
      )}

      {/* Cover photo */}
      <div className="relative w-full" style={{ height: "220px" }}>
        <img
          src={coverPhoto}
          alt={company}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: coverPosition }}
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(15, 38, 86, 0.25)" }} />
        {coverContent ? (
          <div className="absolute inset-0 flex items-center justify-center">
            {coverContent}
          </div>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h2 className="text-white font-bold text-5xl mb-3" style={{ letterSpacing: "0.1em" }}>{company}</h2>
            <p className="text-[#87D3F8] text-xl font-semibold">{role}</p>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-8 py-8 flex flex-col gap-10 pb-28">

        {/* 1. My Role */}
        {roles && roles.length > 0 ? (
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-[#87D3F8] text-xl font-semibold tracking-widest">Experience</h3>
              <button
                onClick={() => goHomeTo("experience")}
                className="flex items-center gap-2 text-white font-semibold hover:text-[#87D3F8] transition-colors text-sm"
              >
                ← Back
              </button>
            </div>
            <div className="h-px bg-white opacity-20 mb-5" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {roles.map((r, i) => (
                <div
                  key={i}
                  className="rounded-xl p-4 flex flex-col gap-2 shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
                  style={{ backgroundColor: "#002147", border: "1px solid #87D3F8" }}
                >
                  <div className="flex items-center gap-2 flex-wrap mb-2">
                    <span
                      className="text-xs font-bold px-3 py-1 rounded-full"
                      style={{ backgroundColor: "#87D3F8", color: "#0F2656" }}
                    >
                      {r.timeline}
                    </span>
                  </div>
                  <h4 className="text-white font-bold text-lg">{r.title}</h4>
                  <p className="text-white text-sm leading-7 opacity-90">{r.description}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <>
            <div>
              <h3 className="text-[#87D3F8] text-xs font-semibold tracking-widest mb-4">My Role</h3>
              <div className="h-px bg-white opacity-20 mb-6" />
              <p className="text-white text-lg leading-relaxed">{roleDescription}</p>
            </div>
            <div>
              <h3 className="text-[#87D3F8] text-xs font-semibold tracking-widest mb-4">Timeline</h3>
              <div className="h-px bg-white opacity-90 mb-6" />
              <p className="text-white text-lg">{timeline}</p>
            </div>
          </>
        )}

        {/* 2. Stats */}
        <div>
          <h3 className="text-[#87D3F8] text-xl font-semibold tracking-widest mb-4">Stats</h3>
          <div className="h-px bg-white opacity-20 mb-6" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <span className="text-white font-bold text-4xl mb-2">{stat.value}</span>
                <span className="text-[#87D3F8] text-sm">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Team & Collaboration */}
        <div>
          <h3 className="text-[#87D3F8] text-xl font-semibold tracking-widest mb-4">Team & Collaboration</h3>
          <div className="h-px bg-white opacity-20 mb-6" />
          {teams && teams.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {teams.map((t, i) => (
                <div
                  key={i}
                  className="rounded-xl p-4 flex flex-col gap-3 shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
                  style={{ backgroundColor: "#002147", border: "1px solid #87D3F8" }}
                >
                  <h4 className="text-white font-semibold text-lg tracking-wide">{t.title}</h4>
                  <p className="text-white text-sm leading-relaxed opacity-90">{t.description}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-white text-lg leading-relaxed">{team}</p>
          )}
        </div>

        {/* 4. Tools & Skills */}
        <div>
          <h3 className="text-[#87D3F8] text-xl font-semibold tracking-widest mb-4">Tools & Skills</h3>
          <div className="h-px bg-white opacity-20 mb-6" />
          <div className="flex flex-wrap gap-3 justify-center">
            {tools.map((tool, i) => (
              <span
                key={i}
                className="text-white text-sm font-semibold px-5 py-2 rounded-full"
                style={{ backgroundColor: "#002147", border: "1px solid #87D3F8" }}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* 5. Reflections & Takeaways */}
        <div>
          <h3 className="text-[#87D3F8] text-xl font-semibold tracking-widest mb-4">
            Reflections & Takeaways
          </h3>
          <div className="h-px bg-white opacity-20 mb-10" />

          <div className="flex gap-12 items-start">
            {/* Left: Reflections */}
            <div className="flex flex-col gap-8 flex-1">
              {reflections && reflections.length > 0 ? (
                reflections.map((r, i) => (
                  <div key={i} className="flex gap-8 items-start">
                    <span
                      className="font-bold shrink-0 leading-none"
                      style={{
                        fontSize: "4rem",
                        color: "#87D3F8",
                        opacity: 0.25,
                        lineHeight: 1,
                        width: "70px",
                        minWidth: "70px",
                        textAlign: "right",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <div className="flex flex-col gap-2 pt-1" style={{ maxWidth: "440px" }}>
                      <h4 className="text-white font-semibold text-lg tracking-wide">
                        {r.title}
                      </h4>
                      <p className="text-white/90 text-sm leading-7">
                        {r.description}
                      </p>
                      <div className="h-px bg-white/10 mt-4" />
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-white text-lg leading-relaxed">{reflection}</p>
              )}
            </div>

            {/* Right: Photos — hidden on mobile */}
            <div className="hidden md:flex flex-col gap-4 shrink-0" style={{ width: "380px" }}>
              {photos.slice(0, 3).map((photo, i) => (
                <img
                  key={i}
                  src={photo}
                  alt={`photo-${i}`}
                  className="w-full rounded-2xl object-cover border border-white/10 shadow-[0_12px_30px_rgba(0,0,0,0.25)] transition-transform duration-200 hover:scale-[1.01]"
                  style={{
                    height: i === 0 ? "250px" : i === 1 ? "220px" : "190px",
                    objectPosition: photoPositions[i] ?? "center center",
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* 6. Photos — mobile only */}
        <div className="md:hidden">
          <h3 className="text-[#87D3F8] text-xl font-semibold tracking-widest mb-4">
            Photos
          </h3>
          <div className="h-px bg-white opacity-20 mb-6" />
          <div className="grid grid-cols-1 gap-4">
            {photos.length > 0 ? (
              photos.map((photo, i) => (
                <img
                  key={i}
                  src={photo}
                  alt=""
                  className="w-full h-64 object-cover rounded-2xl border border-white/10 shadow-[0_12px_30px_rgba(0,0,0,0.25)]"
                  style={{ objectPosition: photoPositions[i] ?? "center center" }}
                />
              ))
            ) : (
              [1, 2, 3].map((_, i) => (
                <div
                  key={i}
                  className="w-full h-48 rounded-2xl border border-white/10"
                  style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
                />
              ))
            )}
          </div>
        </div>

        {/* Back Button */}
        <div className="flex justify-center pt-4">
          <button
            onClick={() => goHomeTo("experience")}
            className="flex items-center gap-2 text-white font-semibold hover:text-[#87D3F8] transition-colors"
          >
            ← Back
          </button>
        </div>

      </div>
    </div>
  );
}