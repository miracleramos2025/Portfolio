import disneyImg from "../../assets/boxoffice.jpg";
import { ProjectDetail } from "./ProjectDetail";

export function DisneyProjectDetail() {
  return (
    <ProjectDetail
      coverPhoto={disneyImg}
      coverPosition="center 31%"
      title="Disney Box Office Analysis"
      className="STAT 302: Data Visualization"
      quarter="Winter 2025"
      overview=""
      tools={[]}
      process={[]}
      images={[]}
      outcomes={[]}
      reflections={[]}
    />
  );
}