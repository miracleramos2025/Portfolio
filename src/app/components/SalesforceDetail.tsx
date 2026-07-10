// SalesforceDetail.tsx

import salesforceLogo from "../../assets/salesforce/salesforce_logo.png";
import group from "../../assets/salesforce/salesforcetower1.jpg";
import fincrime from "../../assets/salesforce/salesforcetower1.jpg";
import dma from "../../assets/salesforce/salesforcetower1.jpg";
import { ExperienceDetail } from "./ExperienceDetail";

export function SalesforceDetail() {
  return (
        <ExperienceDetail
          coverPhoto="/outside.jpg"
          coverPosition="center 71%"
          roles={[
            {
              title: "Graduate Solution Engineer",
              timeline: "Aug 2026 – Present",
              description: "Placeholder text. Full details for this specific milestone tracking box will be populated here soon.",
            },
            {
              title: "Coming Soon",
              timeline: "Coming Soon",
              description: "Placeholder text. Full details for this specific milestone tracking box will be populated here soon.",
            },
          ]}
          teams={[
            {
              title: "Coming Soon",
              description: "Placeholder text. Detailed overview of this core operational area will be added here soon.",
            },
            {
              title: "Coming Soon",
              description: "Placeholder text. Detailed overview of this core operational area will be added here soon.",
            },
            {
              title: "Coming Soon",
              description: "Placeholder text. Detailed overview of this core operational area will be added here soon.",
            },
          ]}
          stats={[
            { value: "--", label: "Placeholder" },
            { value: "--", label: "Placeholder" },
            { value: "--", label: "Placeholder" },
            { value: "--", label: "Placeholder" },
          ]}
          tools={["Placeholder", "Placeholder", "Placeholder"]}
          photos={["salesforcetower1.jpg", "salesforcetower1.jpg", "salesforcetower1.jpg"]}
          photoPositions={["center center", "center center", "center center"]}
          reflections={[
        {
          title: "Placeholder",
          description: "Placeholder text. Detailed overview of this core operational area will be added here soon.",
        },
        {
          title: "Placeholder",
          description: "Placeholder text. Detailed overview of this core operational area will be added here soon.",
        },
        {
          title: "Placeholder",
          description: "Placeholder text. Detailed overview of this core operational area will be added here soon."

        },
        {
          title: "Placeholder",
          description: "Placeholder text. Detailed overview of this core operational area will be added here soon.",
        },
      ]}
      coverContent={
        <div
          className="bg-white rounded-2xl px-6 md:px-14 flex items-center justify-center h-[70px] md:h-[105px]"
          style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.10)" }}
        >
          <img
            src={salesforceLogo}
            alt="Salesforce"
            {...{ fetchpriority: "high" }}
            decoding="sync"
            className="h-[45px] md:h-[80px]"
          />
        </div>
      }
    />
  );
}