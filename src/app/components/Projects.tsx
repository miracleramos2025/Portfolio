import { useState } from "react";

import presentationImg from "../../assets/presentation1.png";
import presentationImg2 from "../../assets/presentation2.png";
import airbnbImg from "../../assets/airbnb.png";
import vizcomSketchImg from "../../assets/sketch.jpg";
import vizcomImg from "../../assets/vizcom.png";
import vizcomImg2 from "../../assets/vizcom2.png";
import dtc from "../../assets/dtc.jpeg";
import campusconnect from "../../assets/campusconnect.jpeg";
import listingMatchesImg from "/mnt/user-data/uploads/Listing_Matches.png";
import wireframeImg from "/mnt/user-data/uploads/annotated-Unit_201_20Lab.pdf";
import compositeImg from "/mnt/user-data/uploads/Listing_Filters.png";

type Project = {
  title: string;
  thumbnail?: string;
  description: string;
  details: string;
  link: string;
  linkLabel: string;
  repoUrl?: string;
  image: string;
  tags: string[];
  gallery?: string[];
  videoUrl?: string;
};

const tabs = [
  { key: "design", label: "Design" },
  { key: "data", label: "Data" },
  { key: "development", label: "Development" },
];

const projects: ProjectsData = {
  design: [
    {
      title: "Headphones Product Rendering",
      description: "3D product rendering showcasing headphones against a city skyline backdrop, created using Vizcom to demonstrate photorealistic lighting, material finishes, and professional product visualization techniques.",
      details: "This project involved designing and rendering a pair of headphones using Vizcom, an AI-assisted design tool. The goal was to create a photorealistic product render with professional lighting and a polished aesthetic. The final render depicts the headphones against a blurred city skyline at dusk, emphasizing the product's sleek, modern design.",
      link: "#",
      linkLabel: "View Rendering",
      image: vizcomImg,
      tags: ["Sketching", "Rendering", "Vizcom"],
      gallery: [vizcomSketchImg, vizcomImg, vizcomImg2],
    },
  {
    title: "Compost & Carry",
    description: "Designed a compact vermicompost bin for urban living with a drawer mechanism for easy harvesting and transport, refined through client feedback and iterative testing.",
    details: "Coming soon.",
    link: "#",
    linkLabel: "View Project",
    image: dtc,
    tags: ["Product Design", "Client Project", "Prototyping"],
  },
  {
    title: "Campus Connect",
    description: "Led UX research and design for a campus app consolidating scattered resources into one platform. Tested prototypes with 8+ students and refined navigation based on feedback to improve accessibility.",
    details: "Coming soon.",
    link: "#",
    linkLabel: "View Project",
    image: campusconnect,
    tags: ["UI/UX", "User Testing", "Figma"],
  },
],
  data: [
    {
      title: "Pixar & Parallel Computing",
      description: "A technical deep-dive into how Pixar uses high-performance computing and parallel processing to render feature films like Coco, Finding Dory, and Inside Out.",
      details: "This presentation explores how Pixar leverages parallel computing across their entire rendering pipeline. Topics covered include frame-level parallelism using HPC clusters, intra-frame tile and ray-level parallelism, path tracing with GPU acceleration, Pixar's RenderMan rendering engine, and real-world case studies from Finding Dory, Coco, and Inside Out. The project was completed for a Parallel Computing course and demonstrates how embarrassingly parallel problems like rendering can be scaled across thousands of compute nodes to meet production deadlines.",
      link: "#",
      linkLabel: "",
      thumbnail: presentationImg,
      image: "",
      tags: ["Parallel Computing", "GPU Architecture", "Research", "Rendering"],
      videoUrl: "https://www.youtube.com/embed/toNq7nj4ROk",
    },
    {
      title: "NYC Airbnb Price Prediction",
      description: "Supervised machine learning pipeline comparing 6 models (linear regression, elastic net, KNN, random forest, and boosted trees) to predict NYC Airbnb rental prices using tidymodels in R.",
      details: "Built a supervised machine learning pipeline with tidymodels to compare regularized linear models (lasso, elastic net) and tree-based methods (random forest, boosted trees) for predicting NYC Airbnb prices. The linear model achieved the best RMSE of 188.7, outperforming more complex models — suggesting Airbnb pricing is largely driven by structured factors like location and room type. Included cross-validation, hyperparameter tuning, feature engineering, and model interpretability analysis. Low R² (13.4%) highlighted limitations around luxury listings and missing features like seasonality.",
      link: "https://github.com/miracleramos2025/final-project-2-site.git",
      linkLabel: "View GitHub Repo", 
      repoUrl: "",
      thumbnail: airbnbImg,
      image: "",
      tags: ["R", "Machine Learning", "Predictive Modeling", "Data Science"],
      videoUrl: "/Ramos_Miracle_final_report.html",
    },
    {
      title: "Disney Box Office Analysis",
      description: "Statistical analysis of Disney's box office history, quantifying how Pixar, Marvel, and Lucasfilm acquisitions reshaped revenue, with superhero and animated films leading profitability.",
      details: "An exploratory analysis of Disney's box office history using R and the tidyverse. Key findings: Pixar, Marvel, and Lucasfilm acquisitions significantly boosted revenue; superhero and animated films are Disney's most profitable genres; and each acquisition eventually surpassed its initial cost in box office earnings. Built with Quarto and published via GitHub Pages.",
      link: "#",
      linkLabel: "",
      thumbnail: presentationImg2,
      image: "",
      tags: ["R", "Exploratory Data Analysis", "Data Visualization"],
      videoUrl: "/ramos_miracle_final_project.html",
    },
  ],
  development: [
    { title: "Placeholder", description: "Final report built in R covering data analysis and findings.", details: "A comprehensive data analysis report written and rendered in R Markdown. Covers data cleaning, exploratory analysis, visualizations, and key findings.", link: "#", linkLabel: "View Report", image: "", tags: ["R", "Data Science", "Analysis"] },
    { title: "CTA Bus Tracker", description: "Data science presentation created using R.", details: "A slide deck presentation created in R using R Markdown and presentation packages, summarizing data findings for an audience.", link: "#", linkLabel: "View Slides", image: "", tags: ["R", "Data Science", "Presentation"] },
    { title: "Placeholder", description: "Website designed and built for incoming freshman students.", details: "A website designed and developed to help incoming freshman students navigate their first year. Includes resources, tips, and key information to help new students get oriented.", link: "#", linkLabel: "Visit Site", image: "", tags: ["Web Dev", "HTML/CSS", "UX"] },
  ],
};

function Modal({ project, onClose }: { project: Project; onClose: () => void }) {
  const [activeImg, setActiveImg] = useState(0);
  const images = project.gallery || (project.image ? [project.image] : []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl overflow-hidden max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        

        {images.length === 0 && !project.videoUrl && (
  <div className="h-32 bg-[#2a5a7a] flex items-center justify-center">
    <span className="text-white opacity-40 text-sm tracking-widest uppercase">Preview</span>
  </div>
)}
        {images.length > 0 && (
  <div className="flex flex-row gap-2 p-4 bg-gray-50 overflow-x-auto">
    {images.map((img, i) => (
      <img
        key={i}
        src={img}
        alt={project.title + " " + (i + 1)}
        className="w-full object-contain rounded-lg"
        style={{ maxHeight: "300px" }}
      />
    ))}
  </div>
)}
{project.videoUrl && (
  <div className="w-full" style={{ height: "500px" }}>
    <div className="bg-gray-100 px-4 py-2 text-sm text-gray-500 text-center">
  {project.videoUrl?.includes("youtu")
    ? "Press play to start the presentation"
    : project.videoUrl?.includes("revealjs") || project.videoUrl?.includes(".html") && project.videoUrl?.includes("ramos_miracle_final_project")
    ? "Click the presentation, then use ← → arrow keys to navigate slides"
    : "Scroll to navigate the report"}
</div>
    <iframe
      src={project.videoUrl}
      className="w-full"
      style={{ height: "460px" }}
      allowFullScreen
    />
  </div>
)}
        <div className="p-8">
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-2xl font-bold text-[#1a3552] pr-4">{project.title}</h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-2xl font-light flex-shrink-0"
            >
              x
            </button>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span key={tag} className="bg-[#1a3552] text-white text-xs font-semibold px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">{project.details}</p>

          {project.link !== "#" && (
            <button
              onClick={() => window.open(project.link, "_blank")}
              className="bg-[#5ab0d4] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#1a3552] transition-colors"
            >
              {project.linkLabel}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  return (
    <div
  onClick={onClick}
  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer hover:-translate-y-1 flex flex-col h-full w-full"
>
      {(project.thumbnail || project.image) ? (
  <img src={project.thumbnail || project.image} alt={project.title} className="w-full h-56 object-contain bg-[#FFFFF]" />
) : (
  <div className="bg-[#2a5a7a] h-64 w-full flex items-center justify-center">
    <span className="text-white opacity-40 text-sm font-medium tracking-widest uppercase">Preview</span>
  </div>
)}
      <div className="p-4 flex flex-col gap-2 flex-1">
        <h3 className="text-xl font-bold text-[#0F2656]">{project.title}</h3>
        <p className="text-gray-600 font-normal pb-2 text-sm flex-1">{project.description}</p>
        <div className="flex flex-wrap pb-4 gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="bg-[#eaf4fb] text-[#1a3552] text-xs px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const [activeTab, setActiveTab] = useState("design");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const activeProjects = projects[activeTab as keyof ProjectsData];

  return (
    <section id="projects" className="bg-[#0F2656] py-16 px-8" style={{ scrollMarginTop: "60px" }}>
      {selectedProject && (
        <Modal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}

        <div className="max-w-[1300px] mx-auto px-16">
        <h2 className="text-5xl font-bold text-white mb-10 text-center">Projects</h2>

        <div className="flex justify-center gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={"pb-3 px-4 text-[22px] font-semibold transition-colors border-b-2 " + (activeTab === tab.key ? "border-white text-[#87D3F8]" : "border-transparent text-[#87D3F8] opacity-60 hover:opacity-100")}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
  {activeProjects.map((project, index) => (
    <div key={index} className="flex w-full">
      <ProjectCard project={project} onClick={() => setSelectedProject(project)} />
    </div>
  ))}
</div>
      </div>
    </section>
  );
}