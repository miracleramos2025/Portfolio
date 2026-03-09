import campusConnectImg from "../../assets/cs314/nu.jpg"; // update with your actual image filename
import { ProjectDetail } from "./ProjectDetail";

export function CampusConnectProjectDetail() {
  return (
    <ProjectDetail
      coverPhoto={campusConnectImg}
      coverPosition="center 58%"
      title="Campus Connect"
      className="COMP_SCI 314: Technology & Human Interaction"
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