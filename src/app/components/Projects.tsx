// Projects.tsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import cs358 from "../../assets/cs358/renderfarm.webp";
import stat302 from "../../assets/stat302/disney.jpg";
import stat301_2 from "../../assets/stat301-2/newyork.jpg";
import cs314 from "../../assets/cs314/campusconnect.jpeg";
import cs310 from "../../assets/cs310/cta.JPG";
import dtc from "../../assets/dtc.jpeg";

type Project = {
  title: string;
  thumbnail?: string;
  description: string;
  tags: string[];
  image: string;
  route: string;
};

type ProjectsData = {
  data: Project[];
  development: Project[];
  design: Project[];
};

const tabs = [
  { key: "all", label: "All" },
  { key: "data", label: "Data" },
  { key: "development", label: "Development" },
  { key: "design", label: "Design" },
];

const projects: ProjectsData = {
  data: [
    {
      title: "NYC Airbnb Price Prediction",
      description: "Supervised machine learning pipeline comparing 6 models to predict NYC Airbnb rental prices using tidymodels in R.",
      thumbnail: stat301_2,
      image: "",
      tags: [
        "Machine Learning",
        "Feature Engineering",
        "Model Evaluation",
        "R",
        "Data Cleaning",
        "Hyperparameter Tuning",
        "Resampling",
      ],
      route: "/projects/nyc-airbnb-price-prediction",
    },
    {
      title: "Disney Box Office Analysis",
      description: "Statistical analysis of Disney's box office history, quantifying how Pixar, Marvel, and Lucasfilm acquisitions reshaped revenue.",
      thumbnail: stat302,
      image: "",
      tags: ["R", "Exploratory Data Analysis", "Data Visualization", "ggplot2", "Statistical Analysis", "Data Storytelling"],
      route: "/projects/disney-box-office-analysis",
    },
  ],
  development: [
    {
      title: "Pixar & Parallel Computing",
      description: "A technical deep-dive into how Pixar uses high-performance computing and parallel processing to render feature films.",
      thumbnail: cs358,
      image: "",
      tags: ["Parallel Computing", "HPC", "Path Tracing", "RenderMan", "Frame-Level Parallelism", "GPU Architecture", "Research", "Presentation"],
      route: "/projects/pixar-parallel-computing",
    },
    {
      title: "CTA Bus Tracker",
      description: "Data science presentation created using R.",
      image: cs310,
      tags: ["R", "Data Science", "R Markdown", "Presentation", "Data Visualization"],
      route: "/projects/cta-bus-tracker",
    },
  ],
  design: [
    {
      title: "Compost & Carry",
      description: "Designed a compact vermicompost bin for urban living with a drawer mechanism for easy harvesting and transport.",
      image: dtc,
      tags: ["Product Design", "Client Project", "Prototyping", "Human-Centered Design", "Iterative Testing"],
      route: "/projects/compost",
    },
    {
      title: "Campus Connect",
      description: "Led UX research and design for a campus app consolidating scattered resources into one platform.",
      image: cs314,
      tags: ["UI/UX", "User Testing", "Figma", "Prototyping", "User Research"],
      route: "/projects/campus-connect",
    },
  ],
};

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="rounded-lg transition-all cursor-pointer hover:-translate-y-1 flex flex-col h-full w-full overflow-hidden"
      style={{ backgroundColor: "#002147", border: "2px solid #87D3F8" }}
    >
      <div className="p-3">
        <div className="w-full rounded-lg overflow-hidden">
          {(project.thumbnail || project.image) ? (
            <img
            src={project.thumbnail || project.image}
            alt={project.title}
            {...{ fetchpriority: "high" }}
            decoding="sync"
            className="w-full object-cover bg-white h-[140px] md:h-[210px]"
          />
          ) : (
            <div className="w-full flex items-center justify-center h-[140px] md:h-[210px]" style={{ backgroundColor: "rgba(255,255,255,0.06)" }}>
              <span className="text-white opacity-40 text-sm font-medium tracking-widest uppercase">Preview</span>
            </div>
          )}
        </div>
      </div>
      <div className="px-4 pb-4 flex flex-col gap-3">
      <h3 className="text-base md:text-xl font-bold text-white text-center">{project.title}</h3>
        <div className="flex flex-wrap gap-2 justify-center">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-full font-medium transition-colors hover:bg-[#87D3F8]/10"
              style={{ backgroundColor: "transparent", color: "rgba(255,255,255,0.85)", border: "1px solid #87D3F8" }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const [activeTab, setActiveTab] = useState("all");
  const navigate = useNavigate();

  const allProjects = [
    projects.development[0],
    projects.data[0],
    projects.data[1],
  ];

  const activeProjects =
    activeTab === "all"
      ? allProjects
      : projects[activeTab as keyof ProjectsData];

      const preloadImage = (src: string) => {
        if (!src) return;
        // Don't add duplicate preload tags
        const existing = document.querySelector(`link[rel="preload"][href="${src}"]`);
        if (existing) return;
        const link = document.createElement("link");
        link.rel = "preload";
        link.as = "image";
        link.href = src;
        document.head.appendChild(link);
      };

  return (
    <section id="projects" className="bg-[#0F2656] py-16 px-8" style={{ scrollMarginTop: "60px" }}>
      <div className="max-w-5xl md:max-w-[1300px] mx-auto px-0 md:px-16">
        <h2 className="text-4xl font-bold text-white mb-11 text-center" style={{ letterSpacing: "0.04em" }}>Projects</h2>
       {/* <div className="flex justify-center gap-2 mb-5 md:mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={"pb-3 px-2 md:px-4 text-[14px] md:text-[22px] font-semibold transition-colors border-b-2 " + (activeTab === tab.key ? "border-white text-[#87D3F8]" : "border-transparent text-[#87D3F8] opacity-60 hover:opacity-100")}
            >
              {tab.label}
            </button>
          ))}
        </div>
        </div> */}
        <div className={`grid gap-4 md:gap-8 items-stretch grid-cols-1 md:grid-cols-2 ${
          activeProjects.length === 2
            ? "md:max-w-2xl md:mx-auto"
            : "lg:grid-cols-3"
        }`}>
          {activeProjects.map((project, index) => (
  <div
    key={index}
    className="flex w-full"
    onMouseEnter={() => preloadImage(project.thumbnail || project.image)}
    onTouchStart={() => preloadImage(project.thumbnail || project.image)}
  >
    <ProjectCard
      project={project}
      onClick={() => navigate(project.route)}
    />
  </div>
))}
        </div>
      </div>
    </section>
  );
}