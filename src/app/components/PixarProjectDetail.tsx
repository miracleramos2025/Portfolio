// PixarProjecctDetail.tsx

import presentationImg from "../../assets/cs358/renderfarm.webp";
import denoising from "../../assets/cs358/denoising.png";
import renderman from "../../assets/cs358/renderman.png";
import hpc from "../../assets/cs358/hpc.png";
import casestudy from "../../assets/cs358/casestudy.png";
import { ProjectDetail } from "./ProjectDetail";
import React, { useEffect, useRef, useState } from "react";
import Typed from "typed.js";

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

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center px-4 py-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={alt}
    >
      <div
        className="relative w-full max-w-3xl flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white/80 hover:text-white text-3xl leading-none transition-colors"
          aria-label="Close expanded plot"
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
    </div>
  );
}

type ClickablePlotProps = {
  src: string;
  alt: string;
  title: string;
  description: string;
  heightClassName?: string;
  fit?: "contain" | "cover";
  bgColor?: string;
};

function ClickablePlot({
  src,
  alt,
  title,
  description,
  heightClassName = "h-[280px] md:h-[210px]",
  fit = "cover",
  bgColor = "#F2F3F4",
}: ClickablePlotProps) {
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
              backgroundColor: bgColor,
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
              `<span style="opacity:0.4">// pseudocode (simplified)</span><br/>` + `<br/>` +
              `<span style="opacity:0.4">// C++</span><br/>` +
              `<span style="opacity:0.4">// One GPU thread per pixel</span><br/>` +
              `<span style="display:block;height:6px"></span>` +
              `<span style="color:#87D3F8">kernel void </span><span style="color:#ffffff">TraceFrame</span><span style="opacity:0.6">(Frame frame)</span> {<br/>` +
              `&nbsp;&nbsp;int x = <span style="color:#87D3F8">get_global_id</span>(0);<br/>` +
              `&nbsp;&nbsp;int y = <span style="color:#87D3F8">get_global_id</span>(1);<br/>` +
              `<span style="display:block;height:6px"></span>` +
              `&nbsp;&nbsp;Ray ray = <span style="color:#87D3F8">GeneratePrimaryRay</span>(x, y);<br/>` +
              `&nbsp;&nbsp;Color color = <span style="color:#87D3F8">TracePath</span>(ray);<br/>` +
              `&nbsp;&nbsp;frame.<span style="color:#87D3F8">setPixel</span>(x, y, color);<br/>` +
              `}`
            ],
            typeSpeed: 22,
            showCursor: false,
            cursorChar: "▋",
            loop: false,
            contentType: "html",
          });
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
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
      className="w-full rounded-2xl border border-white/10 shadow-[0_12px_30px_rgba(0,0,0,0.25)] p-5 font-mono text-xs md:text-sm leading-5 h-[280px] md:h-[360px] overflow-hidden"
      style={{ backgroundColor: "#001233" }}
    >
      <div ref={typedRef} className="text-white/80" />
    </div>
  );
}

function PipelineDiagram() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPercent, setScrollPercent] = useState(0);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const scrollable = el.scrollWidth - el.clientWidth;
    const percent = scrollable > 0 ? el.scrollLeft / scrollable : 0;
    setScrollPercent(percent);
  };

  const steps = [
    { label: "Modeling", desc: "Create 3D characters and environments" },
    { label: "Animation", desc: "Bring characters to life through motion" },
    { label: "Lighting", desc: "Add lights, materials, and atmosphere" },
    { label: "Rendering", desc: "Compute final 2D frames from the scene", highlight: true },
    { label: "Final Film", desc: "The finished story on screen", final: true },
  ];

  return (
    <div className="w-full py-2">
      <div className="px-1 mt-0 mb-2">
        <p className="text-white text-base font-semibold tracking-wide text-left">
          From Scene to Screen
        </p>
      </div>

      <div className="w-full overflow-x-auto" ref={scrollRef} onScroll={handleScroll}>
        <div
          className="relative min-w-[760px] rounded-2xl border border-white/8 bg-[#001233] px-8 pt-10 pb-7"
          style={{ boxShadow: "0 14px 34px rgba(0,0,0,0.24)" }}
        >
          <div className="grid grid-cols-5 gap-6 relative z-10">
            {steps.map((step, i) => (
              <div key={i} className="relative flex flex-col items-center text-center">
                <p className="text-white text-sm font-semibold mb-5">{step.label}</p>

                <div className="relative flex items-center justify-center w-full mb-5">
                  {i < steps.length - 1 && (
                    <>
                      <div className="absolute left-1/2 top-1/2 h-px w-full bg-white/40 translate-y-[-50%]" />
                      <div className="absolute right-[-10px] top-1/2 text-white/55 text-sm translate-y-[-55%]">
                        →
                      </div>
                    </>
                  )}
                  <div
                    className="relative z-10 rounded-full transition-transform duration-200 hover:scale-105"
                    style={{
                      width: "24px",
                      height: "24px",
                      backgroundColor: step.final ? "#87D3F8" : step.highlight ? "#2563EB" : "#0F2656",
                      border: step.final || step.highlight ? "2px solid #87D3F8" : "2px solid rgba(135, 211, 248, 0.85)",
                      boxShadow: step.highlight ? "0 0 0 6px rgba(135, 211, 248, 0.12)" : "none",
                    }}
                  />
                </div>

                <p className="text-white/70 text-xs leading-5 max-w-[120px]">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Scroll hint — mobile only */}
          <div className="md:hidden absolute bottom-3 left-8 right-8 flex items-center gap-2">
            <div className="flex-1 h-1 rounded-full bg-white/10 relative overflow-hidden">
              <div
                className="absolute top-0 h-full w-1/5 rounded-full bg-[#87D3F8]/60 transition-transform duration-75"
                style={{ transform: `translateX(${scrollPercent * 400}%)` }}
              />
            </div>
            <span className="text-white/40 text-xs"></span>
          </div>

        </div>
      </div>
    </div>
  );
}

function ProjectHighlights() {
  return (
    <div className="flex flex-col gap-6">

      {/* Case study + pseudo code */}
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <div className="flex flex-col gap-1 w-full md:w-2/3">
          <ClickablePlot
            src={casestudy}
            alt="Case study"
            title="Why Parallel Computing Matters"
            description="A 90-minute animated film contains over 130,000 frames. As lighting, physics, and particle effects grow more complex, rendering becomes computationally intensive. Large-scale parallel computing allows studios like Pixar to render thousands of frames simultaneously."
            heightClassName="h-[200px] md:h-[360px]"
            fit="contain"
            bgColor="#001233"
          />
        </div>
        <div className="w-full md:flex-1 flex flex-col gap-2">
          <TerminalBox />
          <div className="px-1 flex flex-col gap-1">
            <p className="text-[#FFFFFF] text-base tracking-wider text-center md:text-left">
              GPU Parallelization
            </p>
            <p className="text-white/60 text-sm italic text-center md:text-left">
              Each GPU thread computes the color of one pixel. Thousands of threads run at the same time to render the frame in parallel.
            </p>
          </div>
        </div>
      </div>

      {/* Geometry → RenderMan → Denoising */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex flex-col gap-1">
          <img
            src={hpc}
            alt="Mike Wazowski wireframe"
            className="w-full rounded-2xl object-cover border border-white/10 shadow-[0_12px_30px_rgba(0,0,0,0.25)] h-[260px] md:h-[200px]"
            style={{ objectPosition: "center center" }}
          />
          <div className="px-1 mt-2 flex flex-col gap-1">
            <p className="text-[#FFFFFF] text-base tracking-wider text-center md:text-left">
              From Geometry to Film
            </p>
            <p className="text-white/60 text-sm italic text-center md:text-left">
              Before rendering begins, every character and environment is built as a detailed 3D mesh that defines the shapes and geometry seen in the final film.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <img
            src={renderman}
            alt="RenderMan"
            className="w-full rounded-2xl object-cover border border-white/10 shadow-[0_12px_30px_rgba(0,0,0,0.25)] h-[260px] md:h-[200px]"
            style={{ objectPosition: "center center" }}
          />
          <div className="px-1 mt-2 flex flex-col gap-1">
            <p className="text-[#FFFFFF] text-base tracking-wider text-center md:text-left">
              Pixar's Rendering Engine
            </p>
            <p className="text-white/60 text-sm italic text-center md:text-left">
              RenderMan is Pixar's rendering engine, built to run across CPUs and GPUs to simulate how light bounces, reflects, and scatters through a scene.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <img
            src={denoising}
            alt="Denoising"
            className="w-full rounded-2xl object-cover border border-white/10 shadow-[0_12px_30px_rgba(0,0,0,0.25)] h-[260px] md:h-[200px]"
            style={{ objectPosition: "center center" }}
          />
          <div className="px-1 mt-2 flex flex-col gap-1">
            <p className="text-[#FFFFFF] text-base tracking-wider text-center md:text-left">
              Intra-Frame Parallelism
            </p>
            <p className="text-white/60 text-sm italic text-center md:text-left">
              Path tracing splits each frame into small tiles and launches hundreds of light rays per pixel, allowing GPUs to compute thousands of lighting calculations simultaneously.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}

export function PixarProjectDetail() {
  return (
    <ProjectDetail
      coverPhoto={presentationImg}
      coverPosition="center center"
      title="Pixar & Parallel Computing"
      className="COMP_SCI 358: Intro to Parallel Computing"
      quarter="Spring 2025"
      overview="This project explores how Pixar uses high-performance computing and parallel processing to bring animated films to life. The presentation breaks down Pixar’s animation pipeline, showing how large render farms and GPU-accelerated ray tracing are used to render complex scenes. Examples from Finding Dory, Coco, and Inside Out illustrate how thousands of frames can be processed in parallel. The goal was to connect parallel computing concepts with a real-world workflow."
      presentationUrl="https://youtu.be/toNq7nj4ROk?si=b7YwZuh1SCw3139t"
      slidesUrl="/cs358-finalproject.pdf"
      customHighlights={<ProjectHighlights />}
      pipelineDiagram={<PipelineDiagram />}
      process={[
        {
          title: "Research",
          description:
            "Reviewed Pixar papers, SIGGRAPH talks, and RenderMan documentation to understand where parallelism appears in the rendering pipeline.",
        },
        {
          title: "Pipeline Breakdown",
          description:
            "Mapped the animation pipeline to identify where rendering becomes the most computationally intensive stage.",
        },
        {
          title: "Parallelism Analysis",
          description:
            "Examined frame, tile, and ray-level parallelism and how each contributes to large-scale rendering performance.",
        },
        {
          title: "Case Study Comparison",
          description:
            "Compared Finding Dory, Coco, and Inside Out to show how render complexity scales in production.",
        },
      ]}
      images={[]}
      outcomes={[]}
      reflections={[]}
    />
  );
}