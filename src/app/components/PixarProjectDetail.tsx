import presentationImg from "../../assets/renderfarm.webp";
import { ProjectDetail } from "./ProjectDetail";

export function PixarProjectDetail() {
  return (
    <ProjectDetail
      coverPhoto={presentationImg}
      coverPosition="center center"
      title="Pixar & Parallel Computing"
      className="COMP_SCI 358: Intro to Parallel Computing"
      quarter="Spring 2025"
      overview="A technical deep-dive into how Pixar leverages high-performance computing and parallel processing to render feature films. This research presentation explored Pixar's full animation pipeline — from frame-level parallelism on HPC clusters to GPU-accelerated path tracing — with real-world case studies from Finding Dory, Coco, and Inside Out. The goal was to bridge abstract parallel computing concepts with a real-world, creative application."
      tools={["Parallel Computing", "GPU Architecture", "HPC", "Path Tracing", "RenderMan", "CUDA", "OpenMP", "MPI"]}
      process={[
        {
          title: "Research & Literature Review",
          description: "Surveyed Pixar's published technical papers, SIGGRAPH presentations, and RenderMan documentation to understand how their rendering pipeline is architected and where parallelism is applied at each stage.",
        },
        {
          title: "Pipeline Breakdown",
          description: "Mapped out Pixar's full animation pipeline — modeling, animation, lighting, and rendering — identifying exactly where parallel computing becomes essential. Rendering stood out as the most computationally demanding step, requiring 24 frames per second across 90+ minute films.",
        },
        {
          title: "Parallelism Analysis",
          description: "Analyzed three levels of parallelism Pixar uses: frame-level parallelism across HPC clusters (embarrassingly parallel), tile-level parallelism within each frame, and ray-level parallelism through path tracing. Also examined how denoising filters run in parallel across tiles.",
        },
        {
          title: "Case Study Comparison",
          description: "Compared render complexity across three Pixar films. Finding Dory averaged 7 hours per frame as Pixar's first fully path-traced film. Coco pushed some frames to 90 hours due to tens of thousands of light sources. Inside Out ranged from 11–20 hours per frame due to volumetric rendering and particle effects.",
        },
        {
          title: "Presentation & Communication",
          description: "Synthesized highly technical rendering and GPU architecture concepts into a clear, visual slide deck accessible to a mixed technical audience, connecting course concepts like SIMT, data parallelism, and Amdahl's law to real production workflows.",
        },
      ]}
      images={[
        {
          src: presentationImg,
          caption: "Pixar's animation pipeline — from modeling to rendering",
        },
        {
          src: presentationImg,
          caption: "Frame-level parallelism across HPC compute nodes",
        },
        {
          src: presentationImg,
          caption: "Intra-frame tile and ray-level parallelism in path tracing",
        },
        {
          src: presentationImg,
          caption: "Render time comparison — Finding Dory, Coco, and Inside Out",
        },
      ]}
      outcomes={[
        "Delivered a comprehensive technical presentation connecting Pixar's rendering pipeline to core parallel computing concepts including SIMT, data parallelism, task distribution, and Amdahl's law.",
        "Demonstrated how three levels of parallelism — frame, tile, and ray — work together to make feature-length photorealistic animation possible at scale.",
        "Showed through real case studies that some frames in Coco required 90 hours of compute time, illustrating why HPC clusters with thousands of nodes are essential to Pixar's production schedule.",
      ]}
      reflections={[
        {
          title: "Real-World Context Makes Concepts Click",
          description: "Studying parallel computing through the lens of Pixar films made abstract concepts like task parallelism, SIMT execution, and load balancing far more intuitive. Seeing how thousands of GPU threads map to individual pixels in a frame turned theory into something tangible.",
        },
        {
          title: "Communication Is Part of Engineering",
          description: "Translating deeply technical material — path tracing algorithms, photon mapping, GPU kernel design — into something clear and engaging for a mixed audience pushed me to truly understand the concepts, not just recite them.",
        },
        {
          title: "Scale Changes Everything",
          description: "Seeing that a single frame of Coco could require 90 hours of compute time reframed how I think about performance. Optimization at the scale Pixar operates is a fundamentally different challenge than optimizing a single program.",
        },
      ]}
    />
  );
}