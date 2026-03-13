// DisneyProjectDetail.tsx

import disneyImg from "../../assets/stat302/boxoffice.jpg";
import { ProjectDetail } from "./ProjectDetail";
import revbystudio from "../../assets/stat302/avg_revenue_by_studio_modern.png";
import avgrev from "../../assets/stat302/disney_avg_revenue_trend.png";
import top10 from "../../assets/stat302/top10_table.png";
import revshare from "../../assets/stat302/film_vs_revenue_share.png";
import React, { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import { createPortal } from "react-dom";

function TerminalBox() {
  const typedRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const typedInstance = useRef<Typed | null>(null);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && typedRef.current && !typedInstance.current) {
          typedInstance.current = new Typed(typedRef.current, {
            strings: [
              `<span style="opacity:0.4"># R</span><br/>` +
              `<span style="opacity:0.4"># favorite films by studio</span><br/>` +
              `favorite_films <- list(<br/>` +
              `&nbsp;&nbsp;disney = <span style="color:#87D3F8">"Tangled"</span>,<br/>` +
              `&nbsp;&nbsp;pixar = <span style="color:#87D3F8">"Ratatouille"</span>,<br/>` +
              `&nbsp;&nbsp;marvel = <span style="color:#87D3F8">"Iron Man"</span>,<br/>` +
              `)<br/>` +
              `<span style="display:block;height:10px"></span>` +
              `<span style="opacity:0.4"># box office</span><br/>` +
              `box_office <- c(<br/>` +
              `&nbsp;&nbsp;Tangled = <span style="color:#87D3F8">2.01e8</span> <span style="opacity:0.4"># $201M</span>,<br/>` +
              `&nbsp;&nbsp;Ratatouille = <span style="color:#87D3F8">2.06e8</span> <span style="opacity:0.4"># $206M</span>,<br/>` +
              `&nbsp;&nbsp;Iron_Man = <span style="color:#87D3F8">5.86e8</span> <span style="opacity:0.4"># $586M</span>,<br/>` +
              `)`
            ],
            typeSpeed: 18,
            startDelay: 150,
            showCursor: false,
            cursorChar: "▋",
            loop: false,
            contentType: "html",
          });
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      typedInstance.current?.destroy();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full rounded-2xl border border-white/10 shadow-[0_12px_30px_rgba(0,0,0,0.25)] px-3 py-4 sm:px-4 sm:py-5 md:px-5 md:py-5 font-mono text-[9px] sm:text-[10px] md:text-xs leading-5 sm:leading-6 h-[303px] sm:h-[220px] md:h-[360px] overflow-hidden terminal-box"
      style={{ backgroundColor: "#001233" }}
    >
      <div
        ref={typedRef}
        className="text-white/80 break-words whitespace-normal"
      />
      <style>{`
        .terminal-box br {
          display: block;
          content: "";
          margin-top: -10px;
        }

        @media (min-width: 768px) {
          .terminal-box br {
            margin-top: -13px;
          }
        }

        .terminal-box .typed-cursor {
          color: rgba(255,255,255,0.8);
        }
      `}</style>
    </div>
  );
}

type LightboxProps = {
  src: string;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
};

function PlotLightbox({ src, alt, isOpen, onClose }: LightboxProps) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 9999,
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        backgroundColor: "rgba(0,0,0,0.3)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
      }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={alt}
    >
      <div
        style={{ position: "relative", width: "100%", maxWidth: "860px" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "-40px",
            right: 0,
            color: "white",
            background: "none",
            border: "none",
            fontSize: "32px",
            cursor: "pointer",
            lineHeight: 1,
          }}
          aria-label="Close"
          type="button"
        >
          ×
        </button>
        <div className="w-full rounded-2xl bg-[#F2F3F4] p-3 sm:p-4 shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
          <img
            src={src}
            alt={alt}
            className="w-full max-h-[80vh] object-contain rounded-xl"
          />
        </div>
      </div>
    </div>,
    document.body
  );
}

type ClickablePlotProps = {
  src: string;
  alt: string;
  title: string;
  description: string;
  heightClassName?: string;
  fit?: "contain" | "cover";
};

function ClickablePlot({
  src,
  alt,
  title,
  description,
  heightClassName = "h-[280px] md:h-[210px]",
  fit = "cover",
}: ClickablePlotProps & { fit?: "contain" | "cover" }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col gap-1">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="text-left group cursor-zoom-in"
          aria-label={`Expand ${title}`}
        >
          <img
            src={src}
            alt={alt}
            className={`w-full ${heightClassName} rounded-2xl border border-white/10 shadow-[0_12px_30px_rgba(0,0,0,0.25)] transition-transform duration-200 group-hover:scale-[1.01] ${
              fit === "cover" ? "object-cover" : "object-contain"
            }`}
            style={{
              objectPosition: "center center",
              backgroundColor: "#F2F3F4",
              padding: fit === "cover" ? "0px" : "6px",
            }}
          />
        </button>

        <div className="px-1 mt-2 flex flex-col gap-1">
          <p className="text-[#FFFFFF] text-sm sm:text-base tracking-wider text-center md:text-left">
            {title}
          </p>
          <p className="text-white/60 text-xs sm:text-sm italic text-center md:text-left leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      <PlotLightbox
        src={src}
        alt={alt}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}

function ProjectHighlights() {
  return (
    <div className="flex flex-col gap-6">
      {/* large image + workflow block */}
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <div className="flex flex-col gap-1 w-full md:w-2/3">
        <ClickablePlot
  src={revbystudio}
  alt="Large Differences in Average Film Revenue by Studio"
  title="Average Film Revenue by Studio"
  description="Average box office revenue varies widely across Disney studios. Lucasfilm and Marvel films generate much higher average revenue per release than Pixar or Disney-branded films, highlighting substantial differences in financial performance across studio labels."
  heightClassName="h-[190px] md:h-[360px]"
  fit="contain"
/>
        </div>

        <div className="w-full md:flex-1 flex flex-col gap-2 min-w-0">
          <TerminalBox />
          <div className="px-1 flex flex-col gap-1">
            <p className="text-[#FFFFFF] text-sm sm:text-base tracking-wider text-center md:text-left">
            My Favorite Films by Studio
            </p>
            <p className="text-white/60 text-xs sm:text-sm italic text-center md:text-left leading-relaxed">
            Favorite films from each studio that sparked my curiosity about storytelling and the technology behind immersive experiences.
            </p>
          </div>
        </div>
      </div>

      {/* 3-card grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ClickablePlot
          src={avgrev}
          alt="Revenue Growth After Major Acquisitions"
          title="Revenue Growth After Acquisitions"
          description="Average box office revenue per film increases noticeably after the mid-2000s, indicating a clear upward shift in performance over time."
          heightClassName="h-[233px] md:h-[210px]"
        />

        <ClickablePlot
          src={top10}
          alt="Top Box Office Performers"
          title="Top Box Office Performers"
          description="8 out of 10 of Disney’s highest-grossing films since 2006 come from acquired studios rather than the original Disney studio."
          heightClassName="h-[175px] md:h-[210px]"
        />

        <ClickablePlot
          src={revshare}
          alt="Production vs Revenue"
          title="Film Output vs Revenue"
          description="Some studios, like Lucasfilm and Marvel, generate a larger share of revenue than their share of films produced."
          heightClassName="h-[220px] md:h-[210px]"
        />
      </div>
    </div>
  );
}

export function DisneyProjectDetail() {
  return (
    <ProjectDetail
      coverPhoto={disneyImg}
      coverPosition="center 31%"
      title="Disney Box Office Analysis"
      className="STAT 302: Data Visualization"
      quarter="Winter 2025"
      overview="This project analyzes how Disney’s acquisitions of Pixar, Marvel, and Lucasfilm reshaped the company’s box office performance. Using a dataset of 579 Disney films with inflation-adjusted revenue, the analysis compares revenue per film, studio output, and top-performing releases to understand how acquired studios contribute to Disney’s overall success. The project uses exploratory data analysis and data visualization in R to highlight how Disney’s acquisition strategy influenced its overall revenue portfolio."
      githubUrl="https://github.com/miracleramos2025/disney-boxoffice-analysis.git"
      reportUrl="/ramos_miracle_final_report_stat302.html"
      customHighlights={<ProjectHighlights />}
      process={[
        {
          title: "Data Exploration",
          description:
            "Loaded the Disney box office dataset, verified there were no missing values, and explored the structure of the variables and revenue distributions.",
        },
        {
          title: "Studio-Level Aggregation",
          description:
            "Grouped films by studio to calculate average inflation-adjusted revenue per film and compare financial performance across studios.",
        },
        {
          title: "Trend Analysis",
          description:
            "Analyzed changes in Disney’s average film revenue over time to identify how the company’s box office performance evolved after major acquisitions.",
        },
        {
          title: "Data Visualization",
          description:
            "Created ggplot2 visualizations to highlight differences in studio performance, top-grossing films, and the relationship between film output and revenue share.",
        },
      ]}
      images={[]}
      outcomes={[]}
      reflections={[]}
    />
  );
}