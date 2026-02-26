import { HashLink } from "react-router-hash-link";

interface Stat {
  value: string;
  label: string;
}

interface ExperienceDetailProps {
  coverPhoto: string;
  company: string;
  role: string;
  roleDescription: string;
  timeline: string;
  team: string;
  stats: Stat[];
  tools: string[];
  photos: string[];
  reflection: string;
}

export function ExperienceDetail({
  coverPhoto,
  company,
  role,
  roleDescription,
  timeline,
  team,
  stats,
  tools,
  photos,
  reflection,
}: ExperienceDetailProps) {
  return (
    <div className="min-h-screen bg-[#0F2656]">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-white py-6 px-8 flex items-center justify-between border-b border-gray-200">
        <HashLink to="/">
          <h1 className="text-[#0F2656] text-2xl font-bold">Miracle Ramos</h1>
        </HashLink>
        <div className="flex gap-8">
          <HashLink to="/#projects" className="text-xl text-[#0F2656] font-semibold hover:text-[#87D3F8] transition-colors">Projects</HashLink>
          <HashLink to="/#about" className="text-xl text-[#0F2656] font-semibold hover:text-[#87D3F8] transition-colors">About Me</HashLink>
          <HashLink to="/#skills" className="text-xl text-[#0F2656] font-semibold hover:text-[#87D3F8] transition-colors">Skills</HashLink>
          <HashLink to="/#experience" className="text-xl text-[#0F2656] font-semibold hover:text-[#87D3F8] transition-colors">Experience</HashLink>
          <HashLink to="/#contact" className="text-xl text-[#0F2656] font-semibold hover:text-[#87D3F8] transition-colors">Contact</HashLink>
        </div>
      </nav>

      {/* Cover photo */}
      <div className="relative w-full" style={{ height: "420px" }}>
        <img
          src={coverPhoto}
          alt={company}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(15, 38, 86, 0.65)" }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h2 className="text-white font-bold text-5xl mb-3" style={{ letterSpacing: "0.1em" }}>{company}</h2>
          <p className="text-[#87D3F8] text-xl font-semibold">{role}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-8 py-16 flex flex-col gap-16">

        <div>
          <h3 className="text-[#87D3F8] text-xs font-semibold tracking-widest uppercase mb-4">My Role</h3>
          <div className="h-px bg-white opacity-20 mb-6" />
          <p className="text-white text-lg leading-relaxed">{roleDescription}</p>
        </div>

        <div>
          <h3 className="text-[#87D3F8] text-xs font-semibold tracking-widest uppercase mb-4">Timeline</h3>
          <div className="h-px bg-white opacity-20 mb-6" />
          <p className="text-white text-lg">{timeline}</p>
        </div>

        <div>
          <h3 className="text-[#87D3F8] text-xs font-semibold tracking-widest uppercase mb-4">Team & Collaboration</h3>
          <div className="h-px bg-white opacity-20 mb-6" />
          <p className="text-white text-lg leading-relaxed">{team}</p>
        </div>

        <div>
          <h3 className="text-[#87D3F8] text-xs font-semibold tracking-widest uppercase mb-4">Stats</h3>
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

        <div>
          <h3 className="text-[#87D3F8] text-xs font-semibold tracking-widest uppercase mb-4">Tools & Technologies</h3>
          <div className="h-px bg-white opacity-20 mb-6" />
          <div className="flex flex-wrap gap-3">
            {tools.map((tool, i) => (
              <span
                key={i}
                className="text-white text-sm font-semibold px-4 py-2 rounded-full"
                style={{ border: "1px solid rgba(135, 211, 248, 0.5)" }}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-[#87D3F8] text-xs font-semibold tracking-widest uppercase mb-4">Photos</h3>
          <div className="h-px bg-white opacity-20 mb-6" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {photos.length > 0 ? photos.map((photo, i) => (
              <img key={i} src={photo} alt="" className="w-full h-48 object-cover rounded-lg" />
            )) : (
              [1, 2, 3].map((_, i) => (
                <div key={i} className="w-full h-48 rounded-lg" style={{ backgroundColor: "rgba(255,255,255,0.1)" }} />
              ))
            )}
          </div>
        </div>

        <div>
          <h3 className="text-[#87D3F8] text-xs font-semibold tracking-widest uppercase mb-4">Reflections & Takeaways</h3>
          <div className="h-px bg-white opacity-20 mb-6" />
          <p className="text-white text-lg leading-relaxed">{reflection}</p>
        </div>

      </div>
    </div>
  );
}