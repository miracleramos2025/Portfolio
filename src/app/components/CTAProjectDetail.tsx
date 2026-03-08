import ctaImg from "../../assets/cta.JPG"; // update with your actual image filename
import { ProjectDetail } from "./ProjectDetail";

export function CTAProjectDetail() {
  return (
    <ProjectDetail
      coverPhoto={ctaImg}
      coverPosition="center 50%"
      title="CTA Transit Analysis"
      className=""
      quarter=""
      overview=""
      tools={[]}
      process={[]}
      images={[]}
      outcomes={[]}
      reflections={[]}
    />
  );
}