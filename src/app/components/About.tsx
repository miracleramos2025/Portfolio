import React from "react";
import aboutImage from "@/assets/headshot.jpg";

export function About() {
  return (
    <section id="about" className="bg-[#0F2656] py-16 px-8 flex flex-col items-center justify-center" style={{ scrollMarginTop: "60px" }}>
      <div className="max-w-6xl w-full">
        <h2 className="text-white text-4xl font-bold text-center mb-10" style={{ letterSpacing: "0.04em" }}>About Me</h2>
        
        <div className="flex flex-col md:flex-row gap-12 items-start">

  {/* Profile Image with Border */}
  <div className="flex-shrink-0 flex justify-center w-full md:w-auto">
    <div className="bg-[#87D3F8] p-1 rounded-lg">
      <img 
        src={aboutImage} 
        alt="Miracle Ramos" 
        className="w-[320px] h-[430px] object-cover rounded-lg scale-101"
        style={{ objectPosition: '50% 20%' }}
      />
    </div>
  </div>

          {/* About Text */}
          <div className="flex-1 text-white space-y-5 text-lg leading-7 max-w-[730px] text-center md:text-left">
            <p>
              I'm driven by <span className="text-[#87D3F8] font-semibold">bringing imaginative ideas to life</span>, and I believe the best 
              work happens when technical problem-solving meets creative storytelling.
              <span className="font-semibold"> Innovation, curiosity, and collaboration</span> are at the core of what I do, and I'm always 
              looking to <span className="text-[#87D3F8] font-semibold">create</span> work that has <span className="text-[#87D3F8] font-semibold">real impact</span>.
            </p>
            <p>
              In my free time, I enjoy building Lego sets, making bagels, and singing along to 
              musicals with friends and family. The singing may not be sensational, but the 
              enthusiasm is definitely there!
            </p>
            <p>
              I'm starting my professional journey in <span className="text-[#87D3F8] font-semibold">consulting</span> and excited to keep building 
              from here. If you need the best pizza recommendations in Chicago, I'm your person.
            </p>

            {/* Education Box */}
            <div className="mt-8 pt-5 border-t border-[#87D3F8]/30">
              <h3 className="text-[#87D3F8] font-semibold text-sm uppercase tracking-wide mb-2">Education</h3>
              <p className="text-white font-semibold">Northwestern University</p>
              <p className="text-[#87D3F8]/90 text-base">BA Computer Science • Minor in Data Science • Segal Design Certificate</p>
              <p className="text-white/70 text-sm mt-1">McCormick School of Engineering</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}