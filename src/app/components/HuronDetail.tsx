import { ExperienceDetail } from "./ExperienceDetail";

export function HuronDetail() {
  return (
    <ExperienceDetail
      coverPhoto="/assets/huron-cover.jpg"
      company="Huron Consulting Group"
      role="Digital Consulting Analyst"
      roleDescription="Placeholder — describe your role here."
      timeline="June 2025 – Present"
      team="Placeholder — describe your team here."
      stats={[
        { value: "3", label: "Client Projects" },
        { value: "X", label: "Placeholder Stat" },
        { value: "X", label: "Placeholder Stat" },
        { value: "X", label: "Placeholder Stat" },
      ]}
      tools={["Oracle Cloud", "Data Analytics", "AML", "Placeholder"]}
      photos={[]}
      reflection="Placeholder — your reflections here."
    />
  );
}