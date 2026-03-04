import huron from "../../assets/huron.jpg";
import mudd from "../../assets/nuit.jpg";
import { useNavigate } from "react-router-dom";

export function Experience() {
  const navigate = useNavigate();
  const cards = [
    {
      image: huron,
      href: "/huron",
      title: "Huron Consulting Group",
      roles: ["Digital Consulting Analyst", "Digital Consulting Intern"],
    },
    {
      image: mudd,
      href: "/northwestern",
      title: "Northwestern IT",
      roles: ["Team Lead", "Technical Consultant"],
    },
  ];

  return (
    <section id="experience" className="bg-[#0F2656] py-16 px-8" style={{ scrollMarginTop: "70px" }}>
      <h2 className="text-white text-4xl font-bold text-center mb-12" style={{ letterSpacing: "0.04em" }}>Experience</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {cards.map((card, i) => (
          <div
            key={i}
            onClick={() => navigate(card.href)}
            className="relative overflow-hidden rounded-lg block group cursor-pointer"
            style={{ height: "400px", border: "3px solid #87D3F8" }}
          >
            <img
              src={card.image}
              alt=""
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Base overlay */}
            <div
              className="absolute inset-0 transition-opacity duration-300"
              style={{ backgroundColor: "rgba(15, 38, 86, 0.60)" }}
            />
            {/* Hover overlay */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ backgroundColor: "rgba(15, 38, 86, 0.45)" }}
            />

            {/* Title — top left */}
            <div className="absolute top-8 left-0 p-8">
              <h3
                className="text-white font-bold text-2xl"
                style={{ letterSpacing: "0.1em" }}
              >
                {card.title}
              </h3>
            </div>

            {/* Progression — bottom left */}
            <div className="absolute bottom-39 left-0 p-8 flex items-center gap-4">
              <div className="flex flex-col items-center">
                {card.roles.map((_, j) => (
                  <div key={j} className="flex flex-col items-center">
                    <div
                      className="rounded-full"
                      style={{
                        width: "10px",
                        height: "10px",
                        backgroundColor: j === card.roles.length - 1 ? "#fff" : "#87D3F8",
                        border: "1px solid #fff",
                      }}
                    />
                    {j < card.roles.length - 1 && (
                      <div className="w-px bg-white opacity-90" style={{ height: "51px" }} />
                    )}
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                {card.roles.map((role, j) => (
                  <div
                    key={j}
                    style={{ height: j < card.roles.length - 1 ? "56px" : "auto" }}
                    className="flex items-start"
                  >
                    <span
                      className="text-white font-semibold text-lg"
                      style={{ opacity: j === card.roles.length - 1 ? 0.67 : 1 }}
                    >
                      {role}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Learn More button — bottom center */}
            <div className="absolute bottom-0 left-0 flex justify-center p-8">
              <span
                className="text-[#0F2656] bg-white text-sm font-semibold px-10 py-2 rounded-full border border-white opacity-90 group-hover:opacity-100 transition-opacity duration-300"
              >
                Learn More
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}