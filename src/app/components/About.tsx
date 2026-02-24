import React from "react";
import aboutImage from "@/assets/headshot.png";

export function About() {
  return (
    <section id="about" className="bg-[#0F2656] py-16 px-8 flex flex-col items-center justify-center">
      <div className="max-w-6xl w-full">
        <h2 className="text-white text-5xl font-bold text-center mb-12">About Me</h2>
        
        <div className="flex gap-12 items-start">
          {/* Profile Image with Border */}
          <div className="flex-shrink-0">
            <div className="bg-[#87D3F8] p-2 rounded-sm">
              <img 
                src={aboutImage} 
                alt="Miracle Ramos" 
                className="w-[280px] h-auto object-cover"
              />
            </div>
          </div>

          {/* About Text */}
          <div className="flex-1 text-white space-y-6 text-lg">
            <p>
              I'm a senior at Northwestern University studying <span className="font-semibold">Computer Science, Data Science, 
              and Design.</span> I'm driven by <span className="text-[#87D3F8] font-semibold">bringing imaginative ideas to life</span>, and I believe the best 
              work happens when technical problem-solving meets creative storytelling.
            </p>
            <p>
              <span className="font-semibold">Innovation, curiosity, and collaboration</span> are at the core of what I do, and I'm always 
              looking to <span className="text-[#87D3F8] font-semibold">create</span> work that has <span className="text-[#87D3F8] font-semibold">real impact</span>.
            </p>
            <p>
              In my free time, I enjoy building Lego sets, making bagels, and singing along to 
              musicals with friends and family. The singing may not be sensational, but the 
              enthusiasm is definitely there!
            </p>
            <p>
              I'm starting my professional journey in <span className="text-[#87D3F8] font-semibold">consulting</span> and excited to keep building 
              from here. If you ever need the best pizza recommendations in Chicago, I'm your 
              person.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}