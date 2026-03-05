import disneyImg from "../../assets/boxoffice.jpg";
import { ProjectDetail } from "./ProjectDetail";

export function DisneyProjectDetail() {
  return (
    <ProjectDetail
      coverPhoto={disneyImg}
      coverPosition="center 31%"
      title="Disney Box Office Analysis"
      className="STAT 301-2: Data Science II"
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