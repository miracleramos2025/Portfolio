// Skills.tsx

export function Skills() {
  const skillCategories = [
    {
      title: "Data",
      skills: ["R", "Machine Learning", "Data Visualization", "SQL", "Exploratory Analysis", "Databases", "Data Mapping/Importing"]
    },
    {
      title: "Development",
      skills: ["Frontend Development", "API Integration", "High Performance Computing", "Docker", "Git/GitHub", "Python", "C/C++", "AWS/Azure"]
    },
    {
      title: "Design",
      skills: ["UI/UX Design", "User Research", "User Testing", "Prototyping", "Human-Centered Design", "Wireframing", "Product Development"]
    },
  ];

  return (
    <section id="skills" className="bg-[#0F2656] py-16 pb-8 px-4 md:px-8" style={{ scrollMarginTop: "70px" }}>
      <h2 className="text-[#FFFFFF] text-4xl font-bold text-center mb-5" style={{ letterSpacing: "0.04em" }}>Skills</h2>
      
      <div className="max-w-7xl mx-auto">
        {/* Main vertical line — desktop only */}
        <div className="hidden md:flex justify-center">
          <div className="w-1.25 h-29 bg-[#87D3F8]"></div>
        </div>

        {/* Main horizontal branch — desktop only */}
        <div className="hidden md:block relative -mt-23">
          <div className="absolute top-0 left-0 right-0 flex justify-center pointer-events-none">
            <div className="absolute left-[15.2%] right-[15.2%] h-1.25 bg-[#87D3F8]" />
            <div className="grid grid-cols-3 gap-12 w-full">
              {[0, 1, 2].map((i) => (
                <div key={i} className="flex justify-center">
                  <div className="w-1.25 h-17 bg-[#87D3F8]" />
                </div>
              ))}
            </div>
          </div>
          <div className="pt-17" />
        </div>

        {/* Categories and their skills */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="flex flex-col items-center">
              {/* Category box */}
              <div
              className="border-4 border-[#87D3F8] bg-[#87D3F8] px-6 md:px-18 py-3 md:py-5 rounded-lg mb-6 w-40 md:w-64 h-14 md:h-18 flex items-center justify-center"
              style={{ boxShadow: 'inset 0 0 0 3px #0F2656' }}
              >
                <h4 className="text-[#0F2656] text-lg md:text-[24px] font-semibold whitespace-nowrap">{category.title}</h4>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-3 justify-center max-w-sm">
                {category.skills.map((skill, skillIndex) => (
                  <span
                  key={skillIndex}
                  className="bg-[#002147] border border-[#87D3F8]/90 text-[#87D3F8] text-xs md:text-[16px] px-3 md:px-4 py-1.5 md:py-2.5 rounded"
                >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}