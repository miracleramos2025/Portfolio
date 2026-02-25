export function Skills() {
  const skillCategories = [
    {
      title: "Design",
      skills: ["UI/UX Design", "User Research", "User Testing", "Prototyping", "Human-Centered Design", "Wireframing", "Product Development"]
    },
    {
      title: "Development",
      skills: ["Frontend Development", "API Integration", "High Performance Computing", "Docker", "Git/GitHub", "Python", "C/C++", "AWS/Azure"]
    },
    {
      title: "Data & Tools",
      skills: ["R", "Machine Learning", "Data Visualization", "SQL", "Exploratory Analysis", "Databases", "Data Mapping/Importing"]
    }
  ];

  return (
    <section id="skills" className="bg-[#0F2656] py-16 px-8">
      <h2 className="text-[#FFFFFF] text-5xl font-bold text-center mb-5">Skills</h2>
      
      <div className="max-w-7xl mx-auto">
        {/* Main vertical line */}
        <div className="flex justify-center">
          <div className="w-1.25 h-29 bg-[#87D3F8]"></div>
        </div>
        
        
        {/* Main horizontal branch to 3 categories */}
        <div className="relative -mt-23">
  {/* Connector layer */}
  <div className="absolute top-0 left-0 right-0 flex justify-center pointer-events-none">
    {/* Horizontal line */}
    <div className="absolute left-[15.2%] right-[15.2%] h-1.25 bg-[#87D3F8]" />

    {/* Vertical lines */}
    <div className="grid grid-cols-3 gap-12 w-full">
      {[0, 1, 2].map((i) => (
        <div key={i} className="flex justify-center">
          <div className="w-1.25 h-17 bg-[#87D3F8]" />
        </div>
      ))}
    </div>
  </div>

  {/* Actual content pushed down */}
  <div className="pt-17">
    {/* Your category boxes go here */}
  </div>
</div>

        {/* Categories and their skills */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="flex flex-col items-center">
              {/* Category box */}
              <div className="border-4 border-[#87D3F8] bg-[#1a2e4a] px-18 py-5 rounded-lg mb-6 w-64 h-18 flex items-center justify-center">
                <h4 className="text-[#87D3F8] text-[24px] font-semibold whitespace-nowrap">{category.title}</h4>
              </div>
              
              {/* Skills as bigger interactive tags */}
              <div className="flex flex-wrap gap-3 justify-center max-w-sm">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="border border-[#87D3F8]/90 bg-[#1a2e4a]/50 text-[#87D3F8] text-[16px] px-5 py-2.5 rounded hover:bg-[#87D3F8]/10 transition-colors cursor-default"
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