// NUITDetail.tsx

import nuitLogo from "../../assets/nuit/nuit5.png";
import { ExperienceDetail } from "./ExperienceDetail";
import seniors from "../../assets/nuit/seniors.jpg";
import mic from "../../assets/nuit/mic.jpg";
import cables from "../../assets/nuit/cables.jpg";

export function NUITDetail() {
  return (
    <ExperienceDetail
      coverPhoto="/campus.png"
      coverPosition="center 13%"
      roles={[
        {
          title: "Technical Consultant",
          timeline: "May 2024 – Feb 2025",
          description: "Advised and assisted faculty on AV/IT tools across Northwestern's Evanston campus to support effective teaching. Applied problem-solving to identify technical issues and maintain a smooth learning environment.",
        },
        {
          title: "Team Lead",
          timeline: "Feb 2025 – July 2026",
          description: "Promoted to lead daily operations, training, and scheduling while guiding a team of consultants through technical skill-building and professional development. Served as a primary point of contact for escalated technical issues and classroom support.",
        },
      ]}
      teams={[
        {
          title: "Mentorship",
          description: "Conducted weekly 1-on-1s with 5 student consultants each quarter, providing guidance on technical skills, professional development, and navigating their roles.",
        },
        {
          title: "Team Leadership",
          description: "Met weekly with fellow Team Leads to discuss performance, operational updates, upcoming events, and scheduling across the consultant team.",
        },
        {
          title: "Weekly Trainings",
          description: "Led weekly training sessions for all student consultants to build technical skills and foster a sense of community within the team.",
        },
      ]}
      stats={[
        { value: "9", label: "Consecutive Quarters" },
        { value: "35", label: "Hrs/Week as a Full-Time Student" },
        { value: "30", label: "Consultants Led" },
        { value: "150+", label: "Spaces Supported" },
      ]}
      tools={["Training & Development", "Scheduling & Operations","TeamDynamix", "OvrC", "Zoom Rooms", "Crestron"]}
      photos={[mic, cables, seniors]}
      photoPositions={["50% 20%", "center 75%", "center 47%"]}
      reflections={[
        {
          title: "Leadership vs. Authority",
          description: "A title grants authority, but not leadership. Real leadership lives in the daily tasks and what you choose to do with the influence you're given, not the position you hold.",
        },
        {
          title: "Accountability Sets the Standard",
          description: "Strong teams don't happen by accident. They are built when leaders model responsibility and establish trust as the foundation. When accountability starts at the top, it becomes the culture.",
        },
        {
          title: "Communication Under Pressure",
          description: "In tense moments with frustrated professors, struggling mentees, and colleagues needing direction, how you communicate matters more than the fix itself.",
        },
        {
          title: "Building Up Others",
          description: "Great teams aren't built on dependency, they're built on growth. The best leaders don't just lead; they develop the people around them, creating opportunities for others to step up.",
        },
      ]}
      coverContent={
        <div
  className="bg-white rounded-2xl px-6 md:px-1 flex items-center justify-center h-[70px] md:h-[90px]"
  style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.10)" }}
>
  <img
    src={nuitLogo}
    alt="Northwestern IT"
    {...{ fetchpriority: "high" }}
    decoding="sync"
    className="h-[100px] md:h-[130px]"
  />
</div>
      }
    />
  );
}