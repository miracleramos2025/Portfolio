import nuitLogo from "../../assets/nuit5.png";
import { ExperienceDetail } from "./ExperienceDetail";

export function NUITDetail() {
  return (
    <ExperienceDetail
      coverPhoto="/campus.png"
      coverPosition="center 13%"
      roles={[
        {
          title: "Technical Consultant",
          timeline: "May 2024 – Feb 2025",
          description: "Advised and assisted faculty on AV/IT tools in 150+ educational spaces to support effective teaching. Applied problem-solving to identify technical issues and maintain a smooth learning environment.",
        },
        {
          title: "Team Lead",
          timeline: "Feb 2025 – July 2026",
          description: "Lead and mentor a team of 30 consultants through training, scheduling, and professional development. Oversee weekly operations to ensure smooth classroom support across Northwestern's campus.",
        },
      ]}
      team="Placeholder — describe your team here."
      stats={[
        { value: "30", label: "Consultants Led" },
        { value: "150+", label: "Educational Spaces" },
        { value: "35", label: "Hours/Week" },
        { value: "2", label: "Roles Held" },
      ]}
      tools={["AV/IT Tools", "Team Leadership", "Scheduling", "Training & Development", "Problem Solving"]}
      photos={[]}
      reflection="Placeholder — your reflections here."
      coverContent={
        <div
          className="bg-white rounded-2xl px-6 flex items-center justify-center"
          style={{ 
            boxShadow: "0 8px 32px rgba(0,0,0,0.10)", 
            height: "120px",
          }}
        >
          <img
            src={nuitLogo}
            alt="Northwestern IT"
            style={{ height: "190px" }}
          />
        </div>
      }
    />
  );
}