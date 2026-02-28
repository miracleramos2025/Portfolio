import React, { useEffect, useRef } from "react";
import heroImage from "../../assets/home.png";
import Typed from "typed.js";

export function Hero() {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Designer", "Developer", "Strategist"],
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 1500,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  return (
    <section id="home" className="min-h-screen bg-white flex flex-col">
      <div className="relative flex-1 min-h-screen">
        <img
          src={heroImage}
          alt="Miracle Ramos overlooking Chicago skyline"
          className="w-full h-full object-cover absolute inset-0"
        />
        <div className="absolute inset-0 flex flex-col items-start justify-start text-left pt-[4%] pl-[41%]">
          <p style={{ color: "#0F2656" }} className="text-2xl font-light mb-2">
            Hey, I'm 
          </p>
          <h2 style={{ color: "#0F2656" }} className="text-5xl font-bold mb-4">
            Miracle Ramos
          </h2>
          <p style={{ color: "#0F2656" }} className="text-2xl font-light">
            I'm a <span ref={typedRef}></span>
          </p>
          <a
            href="#projects"
            className="mt-5 text-white bg-[#0F2656] text-sm font-semibold px-6 py-2 rounded-full border border-[#0F2656] hover:bg-white hover:text-[#0F2656] transition-colors duration-200">
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
}