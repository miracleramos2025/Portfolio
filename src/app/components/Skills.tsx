export function Skills() {
  const skillCategories = [
    {
      title: "Design",
      color: "bg-[#87D3F8]",
      skills: [
        "Experience Design (UI/UX)",
        "Human-Centered Design",
        "Journey Mapping",
        "Prototyping & Testing",
        "User Experience Research",
        "Product Development"
      ]
    },
    {
      title: "Development",
      color: "bg-[#87D3F8]",
      skills: [
        "Frontend Development",
        "Systems Programming",
        "Interactive Prototyping",
        "API Integration",
        "High Performance Computing",
        "Git & Docker"
      ]
    },
    {
      title: "Data & Tools",
      color: "bg-[#87D3F8]",
      skills: [
        "Data Visualization & Storytelling",
        "Machine Learning",
        "R",
        "SQL & Databases",
        "Exploratory Data Analysis",
        "Data Mapping/Importing"
      ]
    }
  ];

  return (
    <section id="skills" className="bg-[#0F2656] py-16 px-8">
      <h2 className="text-[#FFFFFF] text-5xl font-bold text-center mb-10">Skills</h2>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="flex flex-col rounded-2xl overflow-hidden shadow-lg">
            {/* Header */}
            <div className={`${category.color} py-6 px-8`}>
              <h3 className="text-[#1a3a52] text-2xl font-bold text-center">{category.title}</h3>
            </div>
            
            {/* Skills List */}
            <div className="bg-[#F7F7F7] flex-1 py-8 px-8">
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-[#0F2656] font-bold flex items-start">
                    <span className="mr-3 mt-1.5">•</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
