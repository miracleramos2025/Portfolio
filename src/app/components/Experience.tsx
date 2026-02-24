export function Experience() {
  const experiences = [
    {
      date: "May 2024 - February 2025",
      title: "Technical Consultant",
      company: "Northwestern IT",
      department: "IT Media & Technological Innovation",
      location: "Evanston, IL",
      description: "Advised and assisted faculty on AV/IT tools in 150+ educational spaces to support effective teaching. Applied problem-solving and critical thinking to identify technical issues, recommend solutions, and maintain a smooth learning environment. Collaborated to ensure consistent support across campus facilities."
    },
    {
      date: "February 2025 - July 2026",
      title: "Team Lead",
      company: "Northwestern IT",
      department: "IT Media & Technological Innovation",
      location: "Evanston, IL",
      description: "Lead and mentor a team of 30 consultants through training, scheduling, and professional development. Oversee weekly operations to ensure smooth classroom support across Northwestern's campus. Dedicate 35 hours per week to operational and team leadership while enrolled as a full-time undergraduate student."
    },
    {
      date: "June 2025 - August 2025",
      title: "Digital Consulting Intern",
      company: "Huron Consulting Group",
      department: "Data Management & Analytics",
      location: "Chicago, IL",
      description: "Supported data strategy and cloud implementation across three client projects, contributing to database importing, mapping, and cloud environment setup. Delivered functional and technical consulting by collaborating with internal teams and engaging with client needs to support long-term data solutions."
    },
    {
      date: "July 2026 - Present",
      title: "Digital Consulting Analyst",
      company: "Huron Consulting Group",
      department: "Financial Crimes Compliance",
      location: "Chicago, IL",
      description: "Develop and implement anti-money laundering (AML) solutions for financial institutions to detect and prevent fraudulent activities. Contribute to cloud migration projects in Oracle Cloud Infrastructure and apply data analysis to enhance detection capabilities and streamline financial crimes prevention."
    }
  ];

  return (
    <section id="experience" className="bg-[#0F2656] py-16 px-8">
      <h2 className="text-white text-5xl font-bold text-center mb-13">Experience</h2>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {experiences.map((exp, index) => (
          <div key={index} className="flex flex-col">
            {/* Date and Title */}
            <div className="mb-4">
              <p className="text-[#87D3F8] text-sm mb-2">{exp.date}</p>
              <h3 className="text-white font-bold text-lg">{exp.title}</h3>
              <div className="mt-2">
                <div className="h-0.5 bg-[#87D3F8] w-full rounded-full"></div>
              </div>
            </div>

            {/* Company Info */}
            <div className="mb-4">
              <h4 className="text-[#87D3F8] font-bold text-lg">{exp.company}</h4>
              <p className="text-white text-sm">{exp.department}</p>
              <p className="text-[#87D3F8] text-sm">{exp.location}</p>
            </div>

            {/* Description */}
            <p className="text-white text-sm leading-relaxed">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
