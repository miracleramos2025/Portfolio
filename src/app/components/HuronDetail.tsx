import huronLogo from "../../assets/huronlogo.svg";
import { ExperienceDetail } from "./ExperienceDetail";

export function HuronDetail() {
  return (
    <ExperienceDetail
      coverPhoto="/chicago.jpg"
      coverPosition="center 65%"
      roles={[
        {
          title: "Digital Consulting Intern",
          timeline: "June 2025 – Aug 2025",
          description: "Placeholder — describe your internship experience here.",
        },
        {
          title: "Digital Consulting Analyst",
          timeline: "Summer 2026 – Present",
          description: "Returning as a full-time Analyst in Huron's Financial Crimes Compliance practice. Details to come.",
        },
      ]}
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
      coverContent={
        <div
          className="bg-white rounded-2xl px-12 flex items-center justify-center"
          style={{ 
            boxShadow: "0 8px 32px rgba(0,0,0,0.10)", 
            height: "120px",
          }}
        >
          <img
            src={huronLogo}
            alt="Northwestern IT"
            style={{ height: "90px" }}
          />
        </div>
      }
    />
  );
}