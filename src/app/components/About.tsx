import React, { useState, useRef } from "react";
import aboutImage from "../../assets/about/headshot.jpg";

// existing
import legoImg from "../../assets/about/lego.jpg";
import bagelsImg from "../../assets/about/bagels.jpg";
import musicalImg from "../../assets/about/musical.JPG";
import pizzaImg from "../../assets/about/pizza.jpg";

// placeholders you’ll swap later
import disneyVideo from "../../assets/about/disney.MOV"; // TODO: add file
import runningImg from "../../assets/about/run.JPG"; // TODO: add file

interface HoverImageProps {
  children: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  isVideo?: boolean;
}



function HoverImage({ children, imageSrc, imageAlt, isVideo = false }: HoverImageProps) {
  const [visible, setVisible] = useState(false);
  const wrapperRef = useRef<HTMLSpanElement | null>(null);

  // close when tapping/clicking outside
  React.useEffect(() => {
    function handleOutside(e: MouseEvent | TouchEvent) {
      if (!wrapperRef.current) return;
      if (!wrapperRef.current.contains(e.target as Node)) {
        setVisible(false);
      }
    }

    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("touchstart", handleOutside);

    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("touchstart", handleOutside);
    };
  }, []);

  return (
    <span
      ref={wrapperRef}
      className="relative inline-block" // <-- was: hidden md:inline-block
      onMouseEnter={() => setVisible(true)} // desktop hover
      onMouseLeave={() => setVisible(false)} // desktop hover
      onClick={(e) => {
        // mobile tap toggle (also works desktop)
        e.stopPropagation();
        setVisible((v) => !v);
      }}
    >
      <span className="cursor-pointer transition-all duration-200">
        {children}
      </span>

      {visible && (
        <span
          className="absolute left-1/2 z-50"
          style={{
            bottom: "calc(100% + 10px)",
            transform: "translateX(-50%)",
            animation: "popIn 0.15s ease-out forwards",
          }}
        >
          <span
  className="block rounded-xl overflow-hidden shadow-2xl border border-[#87D3F8]/35"
  style={{ width: 200, height: 140 }}
>
            {isVideo ? (
              <video
                src={imageSrc}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            ) : (
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-full object-cover"
              />
            )}
          </span>
        </span>
      )}

      <style>{`
        @keyframes popIn {
          from { opacity: 0; transform: translateX(-50%) scale(0.94) translateY(6px); }
          to   { opacity: 1; transform: translateX(-50%) scale(1) translateY(0); }
        }
      `}</style>
    </span>
  );
}

type LoveItem = {
  label: string;
  img: string;
  alt: string;
  isVideo?: boolean;
};

const loveItems: LoveItem[] = [
  { label: "Making Bagels", img: bagelsImg, alt: "Homemade bagels" },
  { label: "Disney Parks", img: disneyVideo, alt: "Disney Parks", isVideo: true },
  { label: "Running", img: runningImg, alt: "Running" },
  { label: "LEGO", img: legoImg, alt: "Lego sets" },
  { label: "Musicals", img: musicalImg, alt: "Musicals" },
  { label: "Pizza (ask me about the best spots in Chicago)", img: pizzaImg, alt: "Chicago pizza" },
];

export function About() {
  return (
    <section
      id="about"
      className="bg-[#0F2656] py-16 px-8 flex flex-col items-center justify-center"
      style={{ scrollMarginTop: "60px" }}
    >
      {/* Preload hover images */}
      <div className="hidden">
        {loveItems.filter(item => !item.isVideo).map(item => (
          <img key={item.label} src={item.img} alt="" fetchPriority="high" />
        ))}
      </div>
      <div className="max-w-6xl w-full">
        <h2 className="text-white text-4xl font-bold text-center mb-10" style={{ letterSpacing: "0.04em" }}>
          About Me
        </h2>

        <div className="flex flex-col md:flex-row gap-12 items-start justify-center">
          {/* Profile Image */}
          <div className="flex-shrink-0 flex justify-center w-full md:w-auto">
            <div className="bg-[#87D3F8] p-1 rounded-xl">
            <img
  src={aboutImage}
  alt="Miracle Ramos"
  className="w-[220px] h-[280px] md:w-[320px] md:h-[430px] object-cover rounded-xl"
  style={{ objectPosition: "50% 20%" }}
/>
            </div>
          </div>

          {/* About Text */}
          <div className="flex-1 text-white space-y-4 max-w-[570px] text-sm md:text-base text-center leading-relaxed lg:text-left px-2 md:px-0 mx-auto lg:mx-0">

<p>
I’m a computer scientist interested in how technology, data, and design come together to create meaningful experiences and solve complex problems. I'm driven by bringing imaginative ideas to life and I believe the best
  work happens when <span className="text-[#87D3F8] font-semibold">technical problem-solving</span> meets{" "}
  <span className="text-[#87D3F8] font-semibold">creative storytelling</span>.
  </p>
  <p>
  Innovation, curiosity, and collaboration are at the core of what I do, and I'm always
  looking to create work that has real <span className="text-[#87D3F8] font-semibold">impact</span>. 
  I'm starting my professional journey in consulting and excited to keep building from here.
</p>

{/* Education Box */}
<div className="mt-3 pt-3 border-t border-[#87D3F8]/25">
<h3 className="text-white font-semibold tracking-wide mb-1">Education</h3>
<p className="text-[#87D3F8] font-semibold">Northwestern University</p>
  <p className="text-[#FFFFFF] text-[13px]">
    BA Computer Science · Minor in Data Science · Segal Design Certificate
  </p>

  {/* Things I Love */}
  <div className="mt-4">
  <h3 className="text-white font-semibold tracking-wide mb-3">Things I Love</h3>
  <div className="flex flex-wrap gap-x-2 gap-y-5 justify-center lg:justify-start">
      {loveItems.map((item) => (
        <HoverImage
          key={item.label}
          imageSrc={item.img}
          imageAlt={item.alt}
          isVideo={item.isVideo}
        >
          <span
          className="bg-[#002147] border border-[#87D3F8]/90 text-[#FFFFFF] text-xs px-3 py-2 rounded-full font-medium hover:bg-[#87D3F8]/10 transition-colors animate-[softPulse_3s_ease-in-out_infinite]"
          >
            {item.label}
          </span>
        </HoverImage>
      ))}
    </div>
  </div>
</div>

</div>
        </div>
      </div>
    </section>
  );
}