import ctaImg from "../../assets/cs310/cta.JPG"; // update with your actual image filename
import { ProjectDetail } from "./ProjectDetail";

export function CTAProjectDetail() {
  return (
    <ProjectDetail
      coverPhoto={ctaImg}
      coverPosition="center 95%"
      title="CTA Transit Analysis"
      className="COMP_SCI 310: Scalable Software Architectures"
      quarter="Fall 2024"
      overview=""
      tools={[]}
      process={[]}
      images={[]}
      outcomes={[]}
      reflections={[]}
    />
  );
}