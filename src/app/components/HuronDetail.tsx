// HuronDetail.tsx

import huronLogo from "../../assets/huron/huronlogo.svg";
import group from "../../assets/huron/groupphoto.jpg";
import fincrime from "../../assets/huron/fincrime.jpg";
import dma from "../../assets/huron/dma.jpg";
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
          description: "Contributed to data strategy and cloud implementation across multiple client engagements. Supported database migration and environment setup to deliver scalable, long-term data solutions.",
        },
        {
          title: "Digital Consulting Analyst",
          timeline: "Starting Q4 2026",
          description: "Returning as a Digital Consulting Analyst in Huron's Data Management & Analytics practice.",
        },
      ]}
      teams={[
        {
          title: "Data Management & Analytics",
          description: "My primary team for the summer. Supported client engagements, presented key deliverables, and deepened my expertise in data analytics and database systems.",
        },
        {
          title: "Financial Crimes",
          description: "Invited to split my time with this team to broaden my exposure. Gained insight into AML, KYC, SAR reporting, blockchain, and Oracle Cloud vs. on-premise solutions.",
        },
        {
          title: "Intern Case Competition",
          description: "Collaborated with two interns to develop and present a case solution to Huron leadership. Covered internal research, implementation strategy, pricing, change management, and client alignment.",
        },
      ]}
      stats={[
        { value: "10", label: "Weeks" },
        { value: "3", label: "Client Projects" },
        { value: "30", label: "Coffee Chats" },
        { value: "2", label: "Certifications" },
      ]}
      tools={["Oracle Cloud", "Data Mapping", "AML/KYC", "Azure", "SQL", "SSMS", "Git", "Excel", "Smartsheet"] } 
      photos={[fincrime, group, dma]}
      photoPositions={["50% 10%", "center 64%", "center 47%"]}
      reflections={[
        {
          title: "Critical Thinking in the Age of AI",
          description: "Information is abundant; judgment is rare. Real value comes from asking sharper questions and focusing on what truly matters beneath the surface.",
        },
        {
          title: "Intellectual Curiosity",
          description: "Curiosity doesn’t clock out. It shows up in studying emerging technologies, engaging in meaningful conversations with mentors, and continuously sharpening my skill set.",
        },
        {
          title: "Humility",
          description: "Confidence and humility can coexist. The willingness to learn, admit what I don’t know, and seek feedback is what transforms early experience into long-term growth."

        },
        {
          title: "Taking Initiative",
          description: "Growth doesn’t wait to be assigned. It comes from stepping forward, scheduling coffee chats, volunteering for stretch work, and taking ownership beyond what’s expected.",
        },
      ]}
      coverContent={
        <div
          className="bg-white rounded-2xl px-6 md:px-10 flex items-center justify-center h-[70px] md:h-[85px]"
          style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.10)" }}
        >
          <img
            src={huronLogo}
            alt="Huron Consulting Group"
            {...{ fetchpriority: "high" }}
            decoding="sync"
            className="h-[45px] md:h-[60px]"
          />
        </div>
      }
    />
  );
}