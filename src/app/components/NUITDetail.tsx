import { ExperienceDetail } from "./ExperienceDetail";

export function NUITDetail() {
  return (
    <ExperienceDetail
      coverPhoto="/assets/northwestern-cover.jpg"
      company="Northwestern IT"
      role="Team Lead"
      roleDescription="Placeholder — describe your role here."
      timeline="May 2024 – July 2026"
      team="Placeholder — describe your team here."
      stats={[
        { value: "30", label: "Consultants Led" },
        { value: "150+", label: "Educational Spaces" },
        { value: "35", label: "Hours/Week" },
        { value: "X", label: "Placeholder Stat" },
      ]}
      tools={["AV/IT Tools", "Team Leadership", "Scheduling", "Placeholder"]}
      photos={[]}
      reflection="Placeholder — your reflections here."
    />
  );
}