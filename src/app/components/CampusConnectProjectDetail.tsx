import campusConnectImg from "../../assets/nu.jpg"; // update with your actual image filename
import { ProjectDetail } from "./ProjectDetail";

export function CampusConnectProjectDetail() {
  return (
    <ProjectDetail
      coverPhoto={campusConnectImg}
      coverPosition="center 58%"
      title="Campus Connect"
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